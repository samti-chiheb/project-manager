# Project Manager (Frontend)

## Description
Project Manager est une application web intuitive permettant de gérer des projets et des équipes. Ce dépôt contient le code source du frontend, développé avec **Next.js** pour une performance et une optimisation accrues grâce au rendu côté serveur (SSR) et à la génération de pages statiques (SSG).

---

## Fonctionnalités principales
- Création, modification et suppression de projets.
- Gestion des tâches et assignation aux membres de l’équipe.
- Suivi en temps réel de l’avancement des projets.
- Interface utilisateur réactive et ergonomique.
- Intégration avec une API backend sécurisée.

---

## Prérequis
Assurez-vous d'avoir les éléments suivants installés sur votre machine :
- **Node.js** (version 16 ou supérieure)
- **npm** ou **yarn**

---

## Installation
1. Clonez ce dépôt :
   ```bash
   git clone https://github.com/samti-chiheb/project-manager.git
   ```

2. Accédez au répertoire du projet :
   ```bash
   cd project-manager
   ```

3. Installez les dépendances :
   ```bash
   npm install
   # ou
   yarn install
   ```

4. Configurez les variables d'environnement :
   - Créez un fichier `.env.local` à la racine du projet.
   - Ajoutez les variables nécessaires, comme l'URL de l'API backend :
     ```env
     NEXT_PUBLIC_API_URL=http://localhost:5000
     ```

---

## Démarrage
Pour lancer le projet en mode développement :
```bash
npm run dev
# ou
yarn dev
```
L'application sera accessible à l'adresse [http://localhost:3000](http://localhost:3000).

---

## Scripts disponibles
- `dev` : Lance le serveur de développement.
- `build` : Compile le projet pour la production.
- `start` : Lance le serveur en mode production après build.
- `lint` : Analyse le code pour détecter les erreurs et incohérences.

---

## Technologies utilisées
- **Framework** : Next.js
- **Langage** : JavaScript / TypeScript (optionnel)
- **Style** : CSS/SCSS, Tailwind CSS ou Material-UI
- **Gestion d'état** : Redux ou Context API

---

## Structure du projet
```
project-manager/
├── components/       # Composants réutilisables
├── pages/            # Pages gérées par Next.js
├── public/           # Fichiers statiques
├── styles/           # Fichiers CSS/SCSS
├── utils/            # Fonctions utilitaires
├── .env.local        # Variables d'environnement locales
```

---

## Contribution
Les contributions sont les bienvenues ! Pour contribuer :
1. Forkez le projet.
2. Créez une branche pour votre fonctionnalité :
   ```bash
   git checkout -b feature/ma-fonctionnalite
   ```
3. Commitez vos modifications :
   ```bash
   git commit -m "Ajout d'une nouvelle fonctionnalité"
   ```
4. Poussez vos modifications :
   ```bash
   git push origin feature/ma-fonctionnalite
   ```
5. Créez une Pull Request.

---

## Licence
Ce projet est sous licence MIT. Consultez le fichier `LICENSE` pour plus d'informations.

---

## Auteur
Développé par [Chiheb Eddine](https://github.com/samti-chiheb).

---

## Le repo backend
Le dépôt du backend est disponible ici : [Project Manager Backend](https://github.com/samti-chiheb/project-manager-backend).