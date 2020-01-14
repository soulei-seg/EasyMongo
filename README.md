# :rocket: Projet Dev. Logiciel :rocket:

**1er PROJET : LOGICIEL ADAPTATIF**

## 💎 Objectifs 💎

3 composantes : une API, une IHM et une BDD. 

Le but est de créer **une IHM de type CRUD** qui s’adaptera à tout modèle de données importé sous la forme d'un Json, Xml et/ou Csv.

______

## ⚙️ Fonctionnalités ⚙️

L'utilisateur doit pouvoir importer des fichiers XML, JSON, CSV... via une IHM. 
Une API sera chargée de créer une table dans une BDD après l'import. 
Lorsque la table sera créée un ORM affichera un CRUD permettant de lire et d'éditer des données sans écrire une seule requête SQL.

**Modèle de données**:

Le modèle de donnée par défaut sera composée:

- de clients, composés de :
    - un nom, un prénom
    - une adresse mail
    - une date de création

- de factures, composés de :
    - une référence à un client
	- une date d’émission
	- une donnée indiquant si elle a été payé ou non
	- une date de paiement
	- un prix
	- des références à des produits
	
- de produits, composés de :
	- un nom
	- un stock
	- une photo
	- un prix
	- des références à des factures

(Mais il sera possible d'ajouter sa table à l'aide d'un fichier Json, Xml et/ou Csv qui va être automatiquement importé par l'IHM.)
	
- **L’API REST** :
	- doit faire le lien avec la BDD via un ORM (l’ORM peut même créer la BDD) 
	- doit fournir des routes HTTP pour toutes les actions CRUD de toutes les tables du modèle de données Difficulté : 5
    - doit fournir (en une route HTTP ou plusieurs) toutes les informations relatives à la composition du modèle de données (comme un MCD mais en JSON) 


- **L’IHM** :
    - Doit fournir des pages pour toutes les actions CRUD de toutes les tables du modèle de données.
(Ex : par table, une page liste / suppression et une page ajout / modification).
    - l’IHM doit utiliser la même page pour une action CRUD, quel que soit la table. 
    - La page devra se construire toute seule en fonction des informations de composition du modèle fournis par l’API.
    - Pour ce faire, il faudra créer des composants génériques pour chaque type de champ.
<br/>
## 👨‍💻 Technologies utilisées 👨‍💻 ##

### 🔘 Base de données 🔘 ###

**MongoDB**
Pour nous, MongoDB est un choix judicieux. En effet, le stockage des données proposé convient au format document et c'est une techno de base de données que nous souhaitons davantage explorer.

### Object Relational Mapping ###
Un ORM "est un type de programme informatique qui se place en interface entre un programme applicatif et une base de données relationnelle pour simuler une base de données orientée objet."
(**source**: https://fr.wikipedia.org/wiki/Mapping_objet-relationnel)
Cet outil nous permettra ainsi de mettre en place un CRUD, pour pouvoir lire et éditer les données d'une base. 
Nous utiliserons **Mongoose**.

### 🤖 Interface Humain-Machine 🤖 ###
- Back
    - Node.js / ExpressJS (Api Rest)
    Node.js est un langage que nous avons pu pratiquer à de nombreuses reprises. Il est utile dans la mise en place d'un système MVC (Model View Controller).
    Il permet également de communiquer avec tout type de bases de données.
    
    - Express.js
    Express.js est un framework qui permet de construire des applications web basées sur Node.js. C'est de fait le framework standard pour le développement de serveur en Node.js. Il permet aussi le développement d'API couplé au Node.js.
    
- Front 
    - ElectronJS
    Très utilisé dans la plupart des entreprises, le framework ElectronJS permet de créer tout types d'applications sous plusieurs systèmes d'exploitation. C'est une technologie intéressante dans la mesure où l'on peut créer des logiciels avec une interface graphique claire, et compatibles pour la grande majorité des utilisateurs.
    
## Installation d'un environnement de développement

- Visual studio code (Ubuntu 18.04 ls)
    - 1: Mise a jour d'apt et on installe les dépendances.

        > $ sudo apt update
        > $ sudo apt install software-properties-common apt-transport-https wget

    - 2: On importe le Microsoft GPG key.

        > $ wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add -
    
        et on selectionne le repository de VSC:
    
    > $ sudo add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main"
    
- 3: Maintenant que le repository est ajouté, on télécharge la dernière version de VSC.
	
		> $ sudo apt update
		> $ sudo apt install code

-----


- NodeJS && Npm

    - 1: Ajouter le paquet Node.js (Lts Release <=> Version stable).

		> $ sudo apt-get install curl
		> $ curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
		
    - 2: Installer Node.js.

        > $ sudo apt-get install nodejs

    - 3: Vérifier la version de Npm et de Node.

		> $ node -v 
		> $ npm -v

------

- MongoDB
    - 1: Import de la clé publique utilisée par le manager de paquets du système.

        > $ wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add -
    
    
    - 2: Créer un fichier liste pour MongoDB.

        > $ echo deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list
        
    - 3: Mettre à jour la liste des paquets.
    
        > $ sudo apt-get update
    
    - 4: Installer le paquet MongoDB.
    
        > $ sudo apt-get install -y mongodb-org
    
    - 5: Vérifier la version installée.
    
        > $ mongod --version

    - 6: Lancer Mongo

        > $ sudo service mongod restart

    - 7: Entrer dans le shell Mongo

        > $ mongo
-------

- Initialiser le projet
  Il suffit de se rendre dans le répertoire du projet et d'exécuter la commande **npm init**.
  
-------

- Express et Mongoose
  - **Après avoir installé NodeJS, npm et MongoDB**
  
    > $ npm i express mongoose

-------

- ElectronJS
  - **Installer electron globalement**
      > $ npm install electron -g
  > ⚠️**En cas de problème de droits**⚠️
  > sudo npm install -g electron --unsafe-perm=true --allow-root

-------

### Démarrer le projet ###
  - Editer le fichier **package.json**
      >"scripts": {
    >"start": "electron ."
  >}
  - **Puis exécuter la commande**
      
      > $ npm start 


# Développement de l'api REST # 

  - Installation et initialisation projet Vue.Js

    - Vue.Js va nous faciliter le développement de l'interfaçe utilisateur.
        
    > npm install -g @vue/cli @vue/cli-service-global
        
    - On peut initialiser un projet Vue.Js de deux manière. La manière CLI avec `npm install -g @vue/cli @vue/cli-service-global`. Ou la manière Interfaçe graphique en éxécutant `vue ui`.


  - Installation de dotenv et nodemon

    - dotenv permet de récupérer des variables d'environnement depuis un fichier .env et nodemon permet quant à lui de mettre à jour le serveur local à chaque fois que l'on enregistre des données.
        
        > npm i --save-dev dotenv nodemon
    - On édite ensuite le fichier package.json pour y insérer une nouvelle commande à éxecuter au démarrage : 
  >"scripts": {
>"devStart": "nodemon server.js"
    >}
    

Ce qui donne dans le fichier `package.json` : 

```JSON
{
  "name": "project",
  "version": "1.0.0",
  "description": "",
  "main": "main.js",
  "scripts": {
    "start": "electron . & nodemon server.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1",
    "mongoose": "^5.7.11"
  },
  "devDependencies": {
    "dotenv": "^8.2.0",
    "nodemon": "^1.19.4"
  }
}
```