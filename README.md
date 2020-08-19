# Site web pour la détection des fraudes bancaires 

Ce projet est la partie front-end de Systéme de détection des fraudes bancaires permettant la vérification des signatures des clients (de la banque) sur les chéques ce qui permet de détecter les chéques falsifié anisi que la gestion des comptes des agents bancaires .  

## Détails

Cette partie renferme 6 interfaces :
-Interface d'acceuil pour le login (component home) :  permet la redirection de chaque utilisateur vers la page correspondante selon le role :
l'admin passe automatiquement à la page des listes des agents et l'agent passe à la page de vérification des signatures .
-Interface de listes des agents bancaires (component admin) : l'admin peut supprimer un agent , modifier le state d'un agent et passer à la page de modification des données des agents , il peut aussi accéder à la page de vérification de signature
-Interface de vérification de signature (component agent) : l'agent sélectionne un chéque à traiter et selon le résultat de l'algorithme de vérification décide si la signature est falsifié ou non 
-Interface de register : à travers laquelle l'admin peut ajouter des comptes pour les agents(component register)
-Interface pour la modification des données des agents (component update-agent)
-Interface 404 (en cas d'erreur)
