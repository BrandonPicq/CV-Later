# CV-Later - CV Generator

Un générateur de CV simple avec aperçu en temps réel et export PDF.

## Prérequis

- PHP 8.0+
- Composer
- Un navigateur moderne

## Installation

0. Installer php : https://www.php.net/downloads.php

1. Installer les dépendances :

```bash
composer install
```

2. Démarrer le serveur :

```bash
php -S localhost:8000
```

3. Ouvrir dans le navigateur :

```
http://localhost:8000
```

## Utilisation

1. **Informations personnelles** - Nom, email, téléphone, titre et résumé
2. **Expériences** - Titre, entreprise, dates, description
3. **Formations** - Diplôme, institution, dates, description
4. **Compétences** - Nom et niveau (Beginner, Intermediate, Advanced, Expert)
5. **Aperçu en direct** - Le CV se met à jour au fur et à mesure
6. **Télécharger le PDF** - Générer et télécharger votre CV

## Fonctionnalités

- Aperçu en direct pendant la saisie
- Édition et suppression des entrées
- Validation des formulaires
- Génération de PDF
- Interface responsive avec Bootstrap

## Structure du projet

```
├── index.html                # Page principale
├── generate-pdf.php          # Génération PDF
├── assets/
│   ├── css/                  # Styles
│   └── js/                   # JavaScript
├── templates/
│   └── cv-template.php       # Template PDF
└── vendor/                   # Dépendances Composer
```

## Fonctionnalités clés

- **Édition** : Cliquez sur "Edit" pour modifier une entrée
- **Suppression** : Cliquez sur "Remove" pour supprimer
- **Validation** : Les champs obligatoires sont vérifiés
- **Couleurs des compétences** :
  - Beginner = Gris
  - Intermediate = Jaune
  - Advanced = Vert
  - Expert = Bleu

## Troubleshooting

**"Le PDF ne se génère pas"**

- Vérifier que tous les champs obligatoires sont remplis
- Vérifier que le serveur PHP est en cours d'exécution

**"Les styles s'affichent un peu differement dans le PDF"**

- Certaines propriétés CSS ne sont pas supportées par Dompdf provoquant quelques disparitées minimes

## Dépendances

- dompdf - Génération PDF
- Bootstrap 5.3.8 - Interface responsive
