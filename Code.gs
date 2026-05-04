/**
 * Script pour insérer du HTML dans Google Docs
 */

function onOpen() {
  DocumentApp.getUi()
    .createMenu('HTML to Docs')
    .addItem('Insérer du HTML...', 'showSidebar')
    .addToUi();
}

function showSidebar() {
  const html = HtmlService.createHtmlOutputFromFile('UI')
    .setTitle('Insérer du code HTML')
    .setWidth(400);
  DocumentApp.getUi().showSidebar(html);
}

/**
 * Main function to convert HTML and insert it into the Email Draft table
 */
function insertHtmlIntoDoc(htmlString) {
  try {
    const doc = DocumentApp.getActiveDocument();
    const body = doc.getBody();
    
    // 1. Find the Email Draft table
    const tables = body.getTables();
    let emailTable = null;
    
    if (tables.length > 0) {
      emailTable = tables[0]; 
    } else {
      throw new Error("Aucun tableau de 'Brouillon d'e-mail' trouvé. Veuillez d'abord insérer un brouillon via @email.");
    }

    const numRows = emailTable.getNumRows();
    const bodyCell = emailTable.getRow(numRows - 1).getCell(0);
    bodyCell.clear();

    // 2. Convert HTML to a temporary Google Doc
    const tempFileId = convertHtmlToTempDoc(htmlString);
    const tempDoc = DocumentApp.openById(tempFileId);
    const tempBody = tempDoc.getBody();

    // 3. Copy elements with High Style preservation
    const numChildren = tempBody.getNumChildren();
    for (let i = 0; i < numChildren; i++) {
      const sourceElement = tempBody.getChild(i);
      appendElementWithStyles(bodyCell, sourceElement);
    }

    // 4. Cleanup: Remove the temporary file and doc
    tempDoc.saveAndClose();
    Drive.Files.remove(tempFileId);

    // Remove the very first empty paragraph created by bodyCell.clear() if it's still there
    if (bodyCell.getNumChildren() > 1 && bodyCell.getChild(0).asParagraph().getText() === "") {
      bodyCell.removeChild(bodyCell.getChild(0));
    }

    return "HTML inséré avec succès en conservant les styles !";

  } catch (e) {
    return "Erreur lors de l'insertion : " + e.message;
  }
}

/**
 * Helper to append elements while forcing attribute preservation
 * Version 2: Enhanced for Tables, Lists, Images and Cell contents
 */
function appendElementWithStyles(container, element) {
  const type = element.getType();
  
  if (type == DocumentApp.ElementType.PARAGRAPH) {
    const sourceP = element.asParagraph();
    // Special check for empty paragraphs to avoid extra spaces
    if (sourceP.getText() === "" && sourceP.getNumChildren() === 0) {
      container.appendParagraph("");
      return;
    }
    const targetP = container.appendParagraph(sourceP.copy());
    targetP.setAttributes(sourceP.getAttributes());
  } 
  else if (type == DocumentApp.ElementType.LIST_ITEM) {
    const sourceLi = element.asListItem();
    const targetLi = container.appendListItem(sourceLi.copy());
    targetLi.setAttributes(sourceLi.getAttributes());
    targetLi.setGlyphType(sourceLi.getGlyphType());
  } 
  else if (type == DocumentApp.ElementType.TABLE) {
    const sourceTable = element.asTable();
    const targetTable = container.appendTable();
    targetTable.setAttributes(sourceTable.getAttributes());
    
    // Remove the default row created by appendTable()
    if (targetTable.getNumRows() > 0) targetTable.removeRow(0);

    for (let r = 0; r < sourceTable.getNumRows(); r++) {
      const sourceRow = sourceTable.getRow(r);
      const targetRow = targetTable.appendTableRow();
      targetRow.setAttributes(sourceRow.getAttributes());
      
      for (let c = 0; c < sourceRow.getNumCells(); c++) {
        const sourceCell = sourceRow.getCell(c);
        const targetCell = targetRow.appendTableCell();
        targetCell.setAttributes(sourceCell.getAttributes());
        
        // Preservation of column width
        try {
          const width = sourceTable.getColumnWidth(c);
          if (width) targetTable.setColumnWidth(c, width);
        } catch(e) {}

        // Recursive copy of cell content
        targetCell.clear();
        for (let i = 0; i < sourceCell.getNumChildren(); i++) {
          appendElementWithStyles(targetCell, sourceCell.getChild(i));
        }
        
        // Remove empty paragraph left by clear()
        if (targetCell.getNumChildren() > 1 && targetCell.getChild(0).asParagraph().getText() === "") {
          targetCell.removeChild(targetCell.getChild(0));
        }
      }
    }
  } 
  else if (type == DocumentApp.ElementType.INLINE_IMAGE) {
    const sourceImg = element.asInlineImage();
    try {
      const targetImg = container.appendImage(sourceImg.getBlob());
      targetImg.setWidth(sourceImg.getWidth());
      targetImg.setHeight(sourceImg.getHeight());
    } catch (e) {
      container.appendImage(sourceImg.copy());
    }
  }
}

/**
 * Generates HTML using Gemini API (v1beta)
 */
function generateHtmlWithGemini(prompt, apiKey) {
  try {
    PropertiesService.getUserProperties().setProperty('GEMINI_API_KEY', apiKey);

    // Using Gemini 2.0 Flash (Stable for 2026) or Gemini 3 Flash
    const model = 'gemini-2.0-flash'; 
    const url = 'https://generativelanguage.googleapis.com/v1beta/models/' + model + ':generateContent?key=' + apiKey;
    
    const systemInstruction = "Tu es un expert en e-mailing HTML. Génère du code HTML moderne mais compatible avec les clients e-mail (Outlook, Gmail). Utilise des tableaux pour la mise en page et des styles en ligne. Ne réponds QUE avec le code HTML, sans balises Markdown (pas de ```html).";
    
    const payload = {
      "contents": [{
        "parts":[{
          "text": systemInstruction + "\n\nDemande de l'utilisateur : " + prompt
        }]
      }],
      "generationConfig": {
        "temperature": 0.7,
        "maxOutputTokens": 4096,
      }
    };

    const options = {
      'method' : 'post',
      'contentType': 'application/json',
      'payload' : JSON.stringify(payload),
      'muteHttpExceptions': true
    };

    const response = UrlFetchApp.fetch(url, options);
    const result = JSON.parse(response.getContentText());

    if (result.error) {
      throw new Error(result.error.message);
    }

    if (result.candidates && result.candidates[0].content) {
      let html = result.candidates[0].content.parts[0].text;
      html = html.replace(/^```html/, '').replace(/```$/, '').trim();
      return { success: true, html: html };
    } else {
      throw new Error("Réponse vide de Gemini.");
    }

  } catch (e) {
    return { success: false, error: e.message };
  }
}

function getSavedApiKey() {
  return PropertiesService.getUserProperties().getProperty('GEMINI_API_KEY') || "";
}

function convertHtmlToTempDoc(htmlString) {
  const resource = {
    name: 'Temp_HTML_Conversion_' + new Date().getTime(),
    mimeType: 'application/vnd.google-apps.document'
  };
  const blob = Utilities.newBlob(htmlString, 'text/html');
  const file = Drive.Files.create(resource, blob);
  return file.id;
}
