<p align="center">
  <img src="./frontend/assets/argentBankLogo.png" alt="Logo ArgentBank" width="200">
</p>

## Table des matières
1. [Aperçu du projet](#aperçu-du-projet)
2. [Fonctionnalités](#fonctionnalités)
3. [Technologies](#technologies)
4. [Installation](#installation)
5. [Utilisation](#utilisation)

## Aperçu du projet

Argent Bank est une application web bancaire permettant aux utilisateurs de se connecter et de gérer leurs comptes et leur profil. 
Ce projet a été développé pour une nouvelle banque qui démarre dans le secteur.

## Fonctionnalités

- L'utilisateur peut visiter la page d'accueil
- L'utilisateur peut se connecter au système
- L'utilisateur peut se déconnecter du système
- L'utilisateur ne peut voir les informations relatives à son propre profil qu'après s'être connecté avec succès
- L'utilisateur peut modifier le profil et conserver les données dans la base de données. 

## Technologies
- Node.js
- React / Vite
- Redux
- RTK Query avec fetchBaseQuery

## Installation
Pour configurer le projet localement, suivez ces étapes :

1. Clonez le dépôt :
    ```bash
    git clone https://github.com/KevinDallancon/Argentbank.git
    ```
2. Accédez au répertoire du frontend :
    ```bash
    cd frontend
    ```
3. Installez les dépendances du frontend :
    ```bash
    npm install
    ```
4. Accédez au répertoire du backend :
    ```bash
    cd backend
    ```
5. Installez les dépendances du backend :
    ```bash
    npm install
    ```

## Utilisation
### Démarrer le serveur Frontend


```bash
npm run dev
```
Ouvrez votre navigateur et accédez à `http://localhost:5173` pour voir l'application.

### Démarrer le serveur Backend


```bash
npm run server
```
Ouvrez votre navigateur et accédez à `http://localhost:3001/api-docs` pour voir la documentation de l'api.
