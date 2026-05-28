# HTMLtoDocs

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Stack](https://img.shields.io/badge/stack-Google%20Apps%20Script-yellow)
![AI](https://img.shields.io/badge/AI-Gemini%202.0-orange)

Insérez du code HTML stylisé dans vos brouillons d'e-mails Google Docs avec l'aide de l'IA Gemini. Ce projet permet de transformer n'importe quelle demande en code HTML optimisé, puis en éléments natifs Google Docs tout en conservant une mise en page fidèle.

## 🚀 Fonctionnalités clés

* ✨ **Génération par IA** : Moteur intégré basé sur Gemini 2.0 Flash pour créer des structures HTML complexes à partir de prompts naturels.
* 🎨 **Conversion fidèle** : Transformation intelligente du HTML en éléments Google Docs (tableaux, styles inline, images).
* 📧 **Intégration "Brouillon d'e-mail"** : Remplissage automatique du corps des blocs interactifs `@email` de Google Workspace.
* 🛠️ **Interface intuitive** : Barre latérale permettant de piloter l'IA et de prévisualiser le code avant insertion.
* 🧹 **Nettoyage automatique** : Suppression systématique des fichiers de conversion temporaires pour préserver l'organisation de votre Google Drive.

## 📋 Prérequis & Installation

### Prérequis
* Un compte Google (Docs & Drive).
* Une clé API Gemini (disponible gratuitement sur [Google AI Studio](https://aistudio.google.com/)).

### Installation
1. Dans votre Google Doc, accédez à **Extensions > Apps Script**.
2. Copiez les fichiers suivants depuis ce dépôt :
   - `Code.gs` : Moteur de conversion et appels API.
   - `UI.html` : Interface utilisateur de la barre latérale.
   - `appsscript.json` : Manifeste de configuration des services et autorisations.
3. **Activer l'API Drive** : 
   - Dans l'éditeur Apps Script, cliquez sur le bouton **+** à côté de **Services**.
   - Sélectionnez **Drive API** et validez l'ajout.
4. Actualisez votre Google Doc pour voir apparaître le menu **HTML to Docs**.

## 💡 Exemples d'utilisation

### Génération de contenu HTML par IA
L'outil utilise un système de "System Instruction" pour garantir que le HTML généré par Gemini est parfaitement compatible avec les clients e-mail traditionnels (utilisation de tableaux, styles inline).

**Exemple de prompt :**
> "Génère une invitation pour un événement d'entreprise avec un tableau récapitulatif des horaires et un bouton d'appel à l'action bleu."

**Résultat attendu dans le Doc :**
Un tableau structuré avec des cellules stylisées, des polices adaptées et un bouton formaté, prêt à être envoyé via Gmail.

### Insertion de code externe
Vous pouvez également coller du code HTML provenant d'outils tiers (MJML, Canva, Mailchimp) pour l'importer directement dans votre brouillon d'e-mail.

## 🛠️ Technologies utilisées

* **Google Apps Script** : Environnement d'exécution et manipulation de `DocumentApp`.
* **Google Drive API v3** : Utilisé pour la conversion robuste HTML vers Document.
* **Google Gemini 2.0 Flash** : Intelligence artificielle pour la génération de structure HTML.
* **JavaScript / HTML5 / CSS3** : Interface utilisateur réactive et moderne.

## 🤝 Contribution & Licence

Les contributions sont encouragées ! N'hésitez pas à ouvrir une *Issue* ou soumettre une *Pull Request*.
Ce projet est sous licence **MIT**.

---

**Auteur : Fabrice FAUCHEUX**
[Profil GitHub](https://github.com/FabriceFx)

---
---

# HTMLtoDocs (English Version)

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Stack](https://img.shields.io/badge/stack-Google%20Apps%20Script-yellow)
![AI](https://img.shields.io/badge/AI-Gemini%202.0-orange)

Insert styled HTML code into your Google Docs Email Drafts with the help of Gemini AI. This project transforms any request into optimized HTML code, then into native Google Docs elements while maintaining a faithful layout.

## 🚀 Key Features

* ✨ **AI Generation**: Built-in engine based on Gemini 2.0 Flash to create complex HTML structures from natural language prompts.
* 🎨 **Faithful Conversion**: Intelligent transformation of HTML into Google Docs elements (tables, inline styles, images).
* 📧 **"Email Draft" Integration**: Automatic filling of interactive Google Workspace `@email` blocks.
* 🛠️ **Intuitive Interface**: Sidebar to control the AI and preview the code before insertion.
* 🧹 **Automatic Cleanup**: Systematic deletion of temporary conversion files to keep your Google Drive organized.

## 📋 Prerequisites & Installation

### Prerequisites
* A Google account (Docs & Drive).
* A Gemini API Key (available for free at [Google AI Studio](https://aistudio.google.com/)).

### Installation
1. In your Google Doc, go to **Extensions > Apps Script**.
2. Copy the following files from this repository:
   - `Code.gs`: Conversion engine and API calls.
   - `UI.html`: Sidebar user interface.
   - `appsscript.json`: Configuration manifest for services and permissions.
3. **Enable Drive API**: 
   - In the Apps Script editor, click the **+** button next to **Services**.
   - Search for **Drive API** and add it.
4. Refresh your Google Doc to see the **HTML to Docs** menu.

## 💡 Usage Examples

### AI HTML Content Generation
The tool uses a "System Instruction" approach to ensure Gemini generates HTML that is perfectly compatible with traditional email clients (using tables and inline styles).

**Prompt Example:**
> "Generate a corporate event invitation with a summary table of schedules and a blue call-to-action button."

**Expected Result in Doc:**
A structured table with styled cells, appropriate fonts, and a formatted button, ready to be sent via Gmail.

### Inserting External Code
You can also paste HTML code from third-party tools (MJML, Canva, Mailchimp) to import it directly into your email draft.

## 🛠️ Technologies Used

* **Google Apps Script**: Execution environment and `DocumentApp` manipulation.
* **Google Drive API v3**: Used for robust HTML-to-Document conversion.
* **Google Gemini 2.0 Flash**: Artificial Intelligence for HTML structure generation.
* **JavaScript / HTML5 / CSS3**: Reactive and modern UI.

## 🤝 Contribution & License

Contributions are encouraged! Feel free to open an *Issue* or submit a *Pull Request*.
This project is licensed under the **MIT** License.

---

**Author: Fabrice FAUCHEUX**
[GitHub Profile](https://github.com/FabriceFx)

---
<p align="center"><a href="https://faucheux.bzh" target="_blank" style="color: inherit; text-decoration: none;">&lt;&gt; par Fabrice Faucheux</a></p>