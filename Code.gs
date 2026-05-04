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
