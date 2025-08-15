# SEA proxy server

Ce répertoire contient un petit serveur proxy Node.js qui ajoute des en-têtes CORS permissifs afin de contourner les restrictions de la SPA `5.html`.

## Développement

```bash
npm install
npm start
```

## Génération d'un exécutable autonome (SEA)

Node.js ≥20 peut produire une application autonome (Single Executable Application). Le script suivant crée un binaire `sea` contenant ce serveur ainsi que le runtime Node.js :

```bash
npm run build
```

Cette commande effectue les étapes suivantes :

1. génère un blob SEA à partir de `server.js` ;
2. copie l'exécutable Node.js courant sous le nom `sea` ;
3. injecte le blob dans ce binaire grâce à `postject`.

Vous pouvez ensuite exécuter le serveur directement :

```bash
./sea
```
