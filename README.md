# 🍣 Sushi-Fast

Application web de présentation et filtrage de menus de sushi, développée en **React**.  
Projet réalisé dans un cadre pédagogique (TP) avec gestion de données JSON et filtres dynamiques.

---

## 🎯 Objectifs du projet

- Afficher une liste de menus de sushi à partir d’un fichier JSON
- Mettre en place des **filtres dynamiques**
- Manipuler des données (prix, saveurs, pièces, aliments)
- Structurer une application React proprement (Header / Pages / Data)

---

## 🛠️ Technologies utilisées

- **React** (Vite)
- **JavaScript**
- **HTML / CSS**
- **React Bootstrap**
- **React Icons**

---

## 📁 Structure du projet

Sushi-Fast/
│
├── src/
│ ├── components/
│ │ ├── header.jsx
│ │ └── footer.jsx
│ │
│ ├── pages/
│ │ └── accueil.jsx
│ │
│ ├── data/
│ │ └── boxes.json
│ │
│ ├── App.jsx
│ └── main.jsx
│
├── public/
│ └── assets/ (images des menus)
│
└── package.json
---

## 📊 Données

Les menus sont stockés dans `boxes.json`.  
Chaque menu contient :

- `nom`
- `prix`
- `pieces`
- `saveurs`
- `aliments`
- `image`

---

## 🔎 Fonctionnalités

### ✔ Affichage des menus
- Image
- Nom
- Saveurs principales
- Prix
- Bouton **Détails** avec modale

### ✔ Modale de détails
- Nombre de pièces
- Liste complète des saveurs
- Aliments et quantités

### ✔ Filtres par saveurs
- avocat  
- coriandre  
- saumon  
- cheese  
- thon  
- viande  
- spicy  
- crevette  

### ✔ Exclusion spécifique
- Exclure les menus contenant **"California Saumon Avocat"**

### ✔ Filtre Prix Min / Max
- Bouton permettant d’afficher :
  - le menu **le moins cher**
  - le menu **le plus cher**
- Informations affichées :
  - nom
  - prix
  - nombre de pièces

---

## ▶️ Lancer le projet

```bash
npm install
npm run dev

http://localhost:5173

