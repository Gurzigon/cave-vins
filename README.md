# 🍷 Ma cave à vins

Une application web permettant aux utilisateurs de gérer leur cave à vin de manière simple et intuitive.

## 🚀 Fonctionnalités

- Création de compte utilisateur
- Gestion de caves personnelles
- Ajout, modification et suppression de vins
- Association de vins à une cave
- Système de favoris et de consommation
- Ajout d'avis et de notes sur les vins

## 🛠️ Technologies utilisées

| Frontend       | Backend        | Base de données |
|----------------|----------------|------------------|
| React (Vite)   |NodeJS / Hono  | PostgreSQL     |
| TypeScript     | Prisma (ORM)   |                  |
| Tailwind CSS   | REST API       |                  |

## 📦 Installation

### 1. Clone du projet

```bash
git clone https://github.com/ton-user/ton-repo.git
cd ton-repo
```

### 2. Installation des dépendances

```bash
npm install
```

### 3. Configuration des variables d’environnement

Crée un fichier `.env` dans le dossier `backend` avec par exemple :

```env
DATABASE_URL=postgresql://user:password@localhost:5432/nom_base
PORT=3000
```

### 4. Lancer le projet

```bash
npm run dev
```

## 🗃️ Structure de la base de données

- **UTILISATEURS** : id, pseudonyme, email, mot_de_passe
- **CAVES** : id, nom, utilisateur_id (clé étrangère)
- **VINS** : id, couleur, année, appellation, nom, quantité, favoris, is_consumed
- **AVIS** : id, note, commentaire, vin_id
- **CAVES_has_VINS** : cave_id, vin_id (relation plusieurs-à-plusieurs)

## 📌 À venir

- Authentification sécurisée avec JWT
- Filtres par couleur, année, favoris ...
- Tri et recherche de vins
- Responsive design

---

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus d’informations.
