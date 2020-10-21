# Énoncé:

Vous êtes dans la peau d'un.e développeur.se travaillant sur un nouveau projet pour une application métier d'édition de contenu à imprimer.

Vous êtes responsable de la réalisation du front de l'application. Il a été décidé que l'application serait en Javascript avec VueJs.

Durant la réunion de cadrage vous avez eu les informations suivantes:

- L'application doit posséder un système d'authentification avec une gestion des roles simple (utilisateur, admin)
- L'administrateur doit pouvoir ajouter un certain nombre de documents type avec les données nécessaires à la génération. Ces documents sont considérés comme des "templates".
- Un utilisateur peut accéder uniquement à ses documents générés
- Un utilisateur doit pouvoir générer un document depuis un "template" créer par un administrateur en fournissant les champs requis.

# Questions de réflexion:

Vous devez répondre aux questions suivantes (chaque question attend une réponse suivie d'une explication):

## Quelle librairie allez vous utiliser pour gérer l'état de l'application ?

- Je ne suis pas sûre de bien comprendre la question.

## Quelles sont les pages nécessaires ?

##### Les pages nécéssaires seraient

- S'enregistrer / Se connecter pour l'authentification (qui auront chacun leur composant)
- Chaque nouvel enregistrement définira le nouvel utilisateur comme utilisateur simple
- Un composant Navbar dans lequel il y aurait un bouton en plus "création template" si admin
- Une page CreationTemplate avec composants "création template" et "liste templates déjà crées" accessible que admin
- Une page DocumentsGeneres & une page CreerDocument

## Comment allez-vous agencer votre navigation ?

- La navigation fonctionnera avec le router VueJs, par routes qui seront toutes ouvertes sauf la route /admin qui aura une authGuard basée sur son rôle (meta: { requiresAuth: true }) et il fonctionnera par la Navbar décrite plus haut.

## Quelles sont les requêtes d'api dont vous allez avoir besoin au minimum ?

Au minimum,

#### Auth :

post pour l'enregistrement,
post pour la connection.

#### Admin :

get pour tous les templates existants,
post pour un nouveau template

#### Utilisateur :

get les templates générés (documents types) et disponibles par admin,
get pour les documents types déjà générés par l'utilisateur,
post pour générer un nouveau documents type

## Comment allez-vous gérer l'exécution des requêtes d'api et le retour asynchrone de celles-ci ?

- Mon composant va interroger le service qui aura un retour asynchrone géré par le subscribe. L'éxécution sera avec axios.

## Comment allez-vous gérer l'authentification ?

- Avec une clé JWT qui sera affiliée automatiquement lors du login et supprimée lors du logout

## Bonus: Vous devez mettre en place une version "dark" optionnel dans l'application. Comment allez-vous procéder ?

- Je créer un thème 'dark' en scss qui surclasse pour changer les couleurs. (Les ordinateurs ayant maintenant des thèmes "sombres" l'os peut le reconnaitre et l'afficher comme tel si besoin).

# Cas pratique:

Vous devez mettre en place une application VueJs utilisant les méthodes sélectionnées. Cette application devra posséder une page avec une liste d'articles et une par article. Les articles doivent provenir de l'api suivante: https://jsonplaceholder.typicode.com/.
