# HTML to Google Docs Email Draft

Ce projet est un outil Google Apps Script permettant d'insérer du code HTML stylisé directement dans un bloc "Brouillon d'e-mail" de Google Docs, tout en conservant le style visuel.

## Fonctionnalités

- **Génération IA** : Intégration avec Gemini 2.0 Flash pour générer du code HTML à partir d'un prompt.
- **Conversion Fidèle** : Utilise l'API Drive pour convertir le HTML en éléments natifs Google Docs (tableaux, styles inline, couleurs).
- **Intégration Gmail** : Conçu spécifiquement pour être utilisé avec la fonction "Brouillon d'e-mail" (@email) de Google Docs.

## Installation

1.  Ouvrez un Google Doc.
2.  Allez dans **Extensions > Apps Script**.
3.  Copiez les fichiers `Code.gs`, `UI.html` et `appsscript.json` de ce dépôt.
4.  Activez l'**API Drive** dans les services (bouton + à gauche).
5.  Actualisez le document et utilisez le nouveau menu **HTML to Email**.

## Licence

MIT
