# MPD

VINS (
  id INT AUTO_INCREMENT PRIMARY KEY,
  couleur VARCHAR(50),
  annee INT,
  appellation TEXT,
  nom TEXT,
  quantite INT,
  is_consumed BOOLEAN,
  favoris BOOLEAN
)

CAVES (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom TEXT,
  utilisateur_id INT,
  FOREIGN KEY (utilisateur_id) REFERENCES UTILISATEURS(id) ON DELETE CASCADE
)

AVIS (
  id INT AUTO_INCREMENT PRIMARY KEY,
  note INT CHECK (note >= 1 AND note <= 10),
  commentaire TEXT,
  vin_id INT,
  FOREIGN KEY (vin_id) REFERENCES VINS(id) ON DELETE CASCADE
)

UTILISATEURS (
  id INT AUTO_INCREMENT PRIMARY KEY,
  pseudonyme VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  mot_de_passe VARCHAR(255) NOT NULL
)

CAVES_has_VINS (
  cave_id INT,
  vin_id INT,
  PRIMARY KEY (cave_id, vin_id),
  FOREIGN KEY (cave_id) REFERENCES CAVES(id) ON DELETE CASCADE,
  FOREIGN KEY (vin_id) REFERENCES VINS(id) ON DELETE CASCADE
)
