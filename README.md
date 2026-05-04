# HTMLtoDocs

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Stack](https://img.shields.io/badge/stack-Google%20Apps%20Script-yellow)
![AI](https://img.shields.io/badge/AI-Gemini%202.0-orange)

Insérez du code HTML stylisé dans vos brouillons d'e-mails Google Docs avec l'aide de l'IA Gemini. Ce projet permet de transformer n'importe quel code HTML en éléments natifs Google Docs tout en conservant une mise en page fidèle pour l'envoi d'e-mails professionnels.

## 🚀 Fonctionnalités clés

* ✨ **Génération par IA** : Utilisez Gemini 2.0 Flash pour générer des templates d'e-mails HTML à partir d'un simple prompt.
* 🎨 **Conversion fidèle** : Transformation intelligente du HTML en éléments Google Docs (tableaux, styles inline, images).
* 📧 **Intégration "Brouillon d'e-mail"** : Remplissage automatique du corps des blocs interactifs `@email`.
* 🛠️ **Interface intuitive** : Barre latérale dédiée pour coller votre code ou piloter l'IA.
* 🧹 **Nettoyage automatique** : Suppression des fichiers temporaires après conversion pour un Drive propre.

## 📋 Prérequis & Installation

### Prérequis
* Un compte Google.
* Un document Google Doc ouvert.
* Une clé API Gemini (gratuite sur [Google AI Studio](https://aistudio.google.com/)).

### Installation
1. Dans votre Google Doc, allez dans **Extensions > Apps Script**.
2. Créez trois fichiers et copiez-y le code source de ce dépôt :
   - `Code.gs`
   - `UI.html`
   - `appsscript.json` (remplacez le contenu par celui du dépôt).
3. **Activer l'API Drive** : 
   - Dans l'éditeur Apps Script, cliquez sur le **+** à côté de **Services**.
   - Recherchez **Drive API** et ajoutez-le.
4. Actualisez votre document Google Doc. Un menu **HTML to Email** apparaîtra.

## 💡 Exemples d'utilisation

### 1. Générer avec l'IA
Saisissez votre clé API dans la barre latérale, puis entrez un prompt :
```text
Crée une newsletter élégante pour annoncer le lancement de ma nouvelle formation.
```

### 2. Insérer du HTML existant
Collez votre code HTML (ex: issu de Canva ou MJML) dans la zone dédiée et cliquez sur **Insérer**.

## 🛠️ Technologies utilisées

* **Google Apps Script** (V8 Runtime)
* **Google Drive API v3** (Conversion HTML)
* **Google Gemini API** (Modèle 2.0 Flash)
* **JavaScript / HTML5 / CSS3** (Interface UI)

## 🤝 Contribution & Licence

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une *Issue* ou une *Pull Request*.
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

Insert styled HTML code into your Google Docs Email Drafts with the help of Gemini AI. This project transforms any HTML code into native Google Docs elements while maintaining faithful layout for sending professional emails.

## 🚀 Key Features

* ✨ **AI Generation**: Use Gemini 2.0 Flash to generate HTML email templates from a simple prompt.
* 🎨 **Faithful Conversion**: Intelligent transformation of HTML into Google Docs elements (tables, inline styles, images).
* 📧 **"Email Draft" Integration**: Automatic filling of interactive `@email` building blocks.
* 🛠️ **Intuitive Interface**: Dedicated sidebar to paste your code or control the AI.
* 🧹 **Automatic Cleanup**: Temporary conversion files are deleted after use to keep your Drive clean.

## 📋 Prerequisites & Installation

### Prerequisites
* A Google account.
* An active Google Doc.
* A Gemini API Key (free at [Google AI Studio](https://aistudio.google.com/)).

### Installation
1. In your Google Doc, go to **Extensions > Apps Script**.
2. Create three files and copy the source code from this repository:
   - `Code.gs`
   - `UI.html`
   - `appsscript.json` (replace existing content with the one from the repo).
3. **Enable Drive API**: 
   - In the Apps Script editor, click the **+** next to **Services**.
   - Search for **Drive API** and add it.
4. Refresh your Google Doc. An **HTML to Email** menu will appear.

## 💡 Usage Examples

### 1. Generate with AI
Enter your API key in the sidebar, then enter a prompt:
```text
Create an elegant newsletter to announce the launch of my new training course.
```

### 2. Insert Existing HTML
Paste your HTML code (e.g., from Canva or MJML) into the dedicated area and click **Insert**.

## 🛠️ Technologies Used

* **Google Apps Script** (V8 Runtime)
* **Google Drive API v3** (HTML Conversion)
* **Google Gemini API** (2.0 Flash model)
* **JavaScript / HTML5 / CSS3** (UI Interface)

## 🤝 Contribution & License

Contributions are welcome! Feel free to open an *Issue* or a *Pull Request*.
This project is licensed under the **MIT** License.

---

**Author: Fabrice FAUCHEUX**
[GitHub Profile](https://github.com/FabriceFx)
