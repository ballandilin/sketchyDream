# SketchyDream 🎨

> **⚠️ WORK IN PROGRESS (WIP) ⚠️**  
> Ce projet est actuellement en développement et n'est pas encore terminé.

## Description

SketchyDream est une application web collaborative de dessin en temps réel avec une esthétique rétro-wave. Les utilisateurs peuvent dessiner ensemble sur un canvas partagé et voir les créations des autres en direct.

## Fonctionnalités

### ✅ Implémentées
- Interface de connexion avec design rétro-wave
- Canvas de dessin collaboratif en temps réel
- Communication WebSocket pour la synchronisation
- Gestion des pseudonymes d'utilisateurs
- Interface utilisateur responsive

### 🚧 En développement
- Système d'authentification complet
- Sauvegarde des dessins
- Outils de dessin avancés
- Gestion des salles/rooms
- Optimisations performances

## Technologies utilisées

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5 Canvas, jQuery, CSS3
- **Communication temps réel**: Socket.io
- **Template Engine**: Jade/Pug
- **Styling**: CSS avec thème rétro-wave

## Structure du projet

```
sketchyDream/
├── app.js                 # Point d'entrée de l'application
├── package.json           # Dépendances et scripts
├── bin/www               # Configuration serveur
├── routes/               # Routes Express
│   ├── login.js          # Route de connexion
│   ├── sketch.js         # Route du canvas
│   └── users.js          # Gestion utilisateurs
├── views/                # Templates Jade
│   ├── login.jade        # Page de connexion
│   ├── sketch.jade       # Page de dessin
│   └── layout.jade       # Layout principal
└── public/               # Assets statiques
    ├── javascripts/      # Scripts client
    ├── stylesheets/      # Styles CSS
    ├── images/           # Images thème rétro
    └── dataBase/         # Données utilisateurs (JSON)
```

## Installation

1. **Cloner le repository**
   ```bash
   git clone https://github.com/ballandilin/sketchyDream.git
   cd sketchyDream
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer l'application**
   ```bash
   npm start
   ```

4. **Accéder à l'application**
   ```
   http://localhost:3000
   ```

## Utilisation

1. Accédez à la page d'accueil pour vous connecter
2. Entrez votre pseudonyme
3. Commencez à dessiner sur le canvas partagé
4. Vos dessins apparaîtront en temps réel pour tous les utilisateurs connectés

## Dépendances principales

- `express` - Framework web Node.js
- `socket.io` - Communication WebSocket temps réel
- `jade` - Moteur de templates
- `jquery` - Manipulation DOM côté client
- `cookie-parser` - Gestion des cookies
- `morgan` - Logger HTTP

## Roadmap

- [ ] Système d'authentification sécurisé
- [ ] Palette d'outils de dessin (pinceaux, formes, couleurs)
- [ ] Système de salles privées/publiques
- [ ] Sauvegarde et partage des créations
- [ ] Mode spectateur
- [ ] Historique des dessins
- [ ] Optimisation des performances WebSocket
- [ ] Tests unitaires et d'intégration
- [ ] Documentation API

## Contribution

Le projet étant en développement actif, les contributions sont les bienvenues ! 

1. Fork le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commitez vos changements (`git commit -am 'Ajout nouvelle fonctionnalité'`)
4. Push sur la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrez une Pull Request

## Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

## Auteur

**Nicolas** - [ballandilin](https://github.com/ballandilin)

---

*Projet créé avec ❤️ et une esthétique rétro-wave des années 80* 🌊✨
