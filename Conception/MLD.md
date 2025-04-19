# MLD

VINS (
  id
  couleur
  annee
  appellation
  nom
  quantite
  status
  favoris
)

CAVES (
  id
  nom
  #utilisateur_id: utilisateurs(id)
)

AVIS (
  id
  note
  commentaire
  #vin_id: VINS(id)
)

UTILISATEURS (
  id ,
  pseudonyme
  email
  mot_de_passe
)

CAVES_has_VINS (
  id
  #cave_id: CAVES(id),
  #vin_id: VINS(id)
)
