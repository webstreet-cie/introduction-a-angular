import { Injectable } from '@angular/core';
import { Category } from '../../shared/models/category';
import {Training} from '../../shared/models/training';
import { Module } from '../../shared/models/module';

@Injectable()
export class TrainingService {

   trainings =
   [
      {
         "id": 1,
         "category": {
             "name": "Développement web et mobile"
         },
         "skills": [
             {
                 "name": "Angular"
             },
             {
                 "name": "Développement Client"
             }
         ],
         "reference": "ANW-1-15",
         "title": "Angular - Créer des applications web",
         "slug": "formation-angular-creer-des-applications-web",
         "description": "Dans cette formation, vous apprendrez à créer des applications web et mobiles performantes à l'aide du framework Angular.",
         "image": {
             "file": null,
             "url": "/media/angular-training.PNG"
         },
         "level": "Intermédiaire",
         "goals": [
             "Développer des applications web performantes avec Angular",
             "Maîtriser les concepts clés du framework",
             "Etre capable de consommer des services HTTP"
         ],
         "participants": [
             "Développeurs web",
             "Designers web",
             "Chefs de projet Informatique",
             "Architectes Informatique"
         ],
         "prerequisite": "Bonne connaissance du HTML, du CSS et des technologies web",
         "pedagogicalMethods": [
             "Pratique du développement",
             "Présentation d'applications Angular issues du monde réel"
         ],
         "practicalWork": "Vous réaliserez une application web cliente complète permettant de gérer un centre de formation.",
         "durationInHours": 28,
         "modalities": [
            {
                "name": "Classe Virtuelle",
                "price":504
            },
            {
               "name": "Présentiel",
               "price":1680
            },
            {
               "name": "Sur-Mesure",
               "price":1848
            }
        ],
         "modules": [
             {
                 "title": "Introduction à Angular",
                 "chapters": [
                     {
                         "title": "Comprendre les différentes versions d'Angular"
                     },
                     {
                         "title": "Structure d'un projet Angular"
                     },
                     {
                         "title": "Mettre en place l'environnement de développement"
                     },
                     {
                         "title": "Votre première application Angular"
                     },
                     {
                         "title": "Structure Angular"
                     },
                     {
                         "title": "Webpack"
                     },
                     {
                         "title": "Exercices"
                     },
                     {
                         "title": "Corrections"
                     }
                 ],
                 "durationInHours": 1
             },
             {
                 "title": "Les fondamentaux d'Angular",
                 "chapters": [
                     {
                         "title": "Blocs de construction Angular"
                     },
                     {
                         "title": "Composants Angular"
                     },
                     {
                         "title": "Templates Angular"
                     },
                     {
                         "title": "Directives Angular"
                     },
                     {
                         "title": "Services Angular"
                     },
                     {
                         "title": "Injection de dépendance"
                     },
                     {
                         "title": "Exercices"
                     },
                     {
                         "title": "Corrections"
                     }
                 ],
                 "durationInHours": 2
             },
             {
                 "title": "Les fondamentaux de TypeScript",
                 "chapters": [
                     {
                         "title": "Qu'est-ce-que TypeScript?"
                     },
                     {
                         "title": "Votre premier programme TypeScript"
                     },
                     {
                         "title": "Déclarer des variables"
                     },
                     {
                         "title": "Types"
                     },
                     {
                         "title": "Assertion de Types"
                     },
                     {
                         "title": "Fonctions Fléchées"
                     },
                     {
                         "title": "Interfaces"
                     },
                     {
                         "title": "Classes"
                     },
                     {
                         "title": "Objets"
                     },
                     {
                         "title": "Constructeurs"
                     },
                     {
                         "title": "Modificateurs d'accès"
                     },
                     {
                         "title": "Propriétés"
                     },
                     {
                         "title": "Modules"
                     },
                     {
                         "title": "Exercices"
                     },
                     {
                         "title": "Corrections"
                     }
                 ],
                 "durationInHours": 2
             },
             {
                 "title": "Routing et Navigation",
                 "chapters": [
                     {
                         "title": "Introduction au Routing"
                     },
                     {
                         "title": "Configuring de Routes"
                     },
                     {
                         "title": "RouterOutlet"
                     },
                     {
                         "title": "RouterLink et RouterLinkActive"
                     },
                     {
                         "title": "Paramètres de Route"
                     },
                     {
                         "title": "Paramètres de Requête"
                     },
                     {
                         "title": "Exercices"
                     },
                     {
                         "title": "Corrections"
                     }
                 ],
                 "durationInHours": 2
             },
             {
                 "title": "Consommer des service HTTP",
                 "chapters": [
                     {
                         "title": "Introduction et API Fake"
                     },
                     {
                         "title": "Récupérer une liste d'entités"
                     },
                     {
                         "title": "Displaying one entity"
                     },
                     {
                         "title": "Creating an entity"
                     },
                     {
                         "title": "Updating an entity"
                     },
                     {
                         "title": "Deleting an entity"
                     },
                     {
                         "title": "Hetling Errors"
                     },
                     {
                         "title": "Observables et Promises"
                     },
                     {
                         "title": "Exercices"
                     },
                     {
                         "title": "Corrections"
                     }
                 ],
                 "durationInHours": 2
             },
             {
                 "title": "Angular Material",
                 "chapters": [
                     {
                         "title": "What is Angular Material"
                     },
                     {
                         "title": "Installer Angular Material"
                     },
                     {
                         "title": "Form Controls"
                     },
                     {
                         "title": "Navigation"
                     },
                     {
                         "title": "Layout"
                     },
                     {
                         "title": "Buttons et Indicators"
                     },
                     {
                         "title": "Popups et Modals"
                     },
                     {
                         "title": "Data table"
                     },
                     {
                         "title": "Exercices"
                     },
                     {
                         "title": "Corrections"
                     }
                 ],
                 "durationInHours": 2
             },
             {
                 "title": "Gérer des formulaires avec Angular",
                 "chapters": [
                     {
                         "title": "Introduction"
                     },
                     {
                         "title": "Reactive Forms"
                     },
                     {
                         "title": "Template-driven Forms"
                     },
                     {
                         "title": "Validate form input"
                     },
                     {
                         "title": "Building dynamic forms"
                     },
                     {
                         "title": "Exercices"
                     },
                     {
                         "title": "Corrections"
                     }
                 ],
                 "durationInHours": 2
             },
             {
                 "title": "Afficher des données et gérer les évènements",
                 "chapters": [
                     {
                         "title": "Interpolation et Template expressions"
                     },
                     {
                         "title": "Template statements"
                     },
                     {
                         "title": "Binding syntax"
                     },
                     {
                         "title": "Property binding"
                     },
                     {
                         "title": "Attribute, class, et style bindings"
                     },
                     {
                         "title": "Event binding"
                     },
                     {
                         "title": "Two-way binding"
                     },
                     {
                         "title": "Exercices"
                     },
                     {
                         "title": "Corrections"
                     }
                 ],
                 "durationInHours": 1
             },
             {
                 "title": "Les directives",
                 "chapters": [
                     {
                         "title": "Introduction"
                     },
                     {
                         "title": "Attributes directives"
                     },
                     {
                         "title": "Structural directives"
                     },
                     {
                         "title": "Create your directives"
                     },
                     {
                         "title": "Exercices"
                     },
                     {
                         "title": "Corrections"
                     }
                 ],
                 "durationInHours": 2
             },
             {
                 "title": "Authentification et Autorisation",
                 "chapters": [
                     {
                         "title": "Architecture"
                     },
                     {
                         "title": "Implementing Json Web Tokens"
                     },
                     {
                         "title": "Wildcard routes et 404 pages"
                     },
                     {
                         "title": "Login et Logout"
                     },
                     {
                         "title": "Sign up"
                     },
                     {
                         "title": "Forgotten password"
                     },
                     {
                         "title": "Updating the e-mail's account"
                     },
                     {
                         "title": "Get the current user to create a profile page"
                     },
                     {
                         "title": "Display / Hide items based on the user role"
                     },
                     {
                         "title": "Exercices"
                     },
                     {
                         "title": "Corrections"
                     }
                 ],
                 "durationInHours": 3
             },
             {
                 "title": "Mettre en place l'internationalisation",
                 "chapters": [
                     {
                         "title": "Setting"
                     },
                     {
                         "title": "Templates' translation"
                     },
                     {
                         "title": "Regular expressions"
                     },
                     {
                         "title": "Creating a translation source file"
                     },
                     {
                         "title": "Translation source text"
                     },
                     {
                         "title": "Integrating the translation file to the application"
                     },
                     {
                         "title": "Exercices"
                     },
                     {
                         "title": "Corrections"
                     }
                 ],
                 "durationInHours": 2
             },
             {
                 "title": "Intégrer un système de paiement",
                 "chapters": [
                     {
                         "title": "What is Stripe?"
                     },
                     {
                         "title": "Integrating Stripe in Angular"
                     },
                     {
                         "title": "Exercices"
                     },
                     {
                         "title": "Corrections"
                     }
                 ],
                 "durationInHours": 3
             },
             {
                 "title": "Tests unitaires et Tests d'intégration",
                 "chapters": [
                     {
                         "title": "Unit Testing Fundamentals"
                     },
                     {
                         "title": "Strings et Arrays"
                     },
                     {
                         "title": "Set Up et Tear Down"
                     },
                     {
                         "title": "Working with Forms"
                     },
                     {
                         "title": "Working with Event Emitters"
                     },
                     {
                         "title": "Working with Spies"
                     },
                     {
                         "title": "Interaction Testing"
                     },
                     {
                         "title": "Code Coverage"
                     },
                     {
                         "title": "Integration Testing Fundamentals"
                     },
                     {
                         "title": "Exercices"
                     },
                     {
                         "title": "Corrections"
                     }
                 ],
                 "durationInHours": 2
             },
             {
                 "title": "Déploiement",
                 "chapters": [
                     {
                         "title": "Preparing for Deployment"
                     },
                     {
                         "title": "Building Applications with Angular CLI"
                     },
                     {
                         "title": "Environments"
                     },
                     {
                         "title": "Deployments Options"
                     },
                     {
                         "title": "Exercices"
                     },
                     {
                         "title": "Corrections"
                     }
                 ],
                 "durationInHours": 2
             }
         ]
     
       
     }
      ,
      {
         "id": 2,
         "category": {
             "name": "Développement web et mobile"
         },
         "skills": [
             {
                 "name": "Html"
             },
             {
                 "name": "Css"
             }
         ],
         "reference": "HTW-2-15",
         "title": "HTML5 & CSS3 - Créer un site web responsive",
         "slug": "formation-html5-css3-creer-un-site-web-responsive",
         "description": "Dans cette formation, vous apprendrez à créer un site web responsive avec HTML5 et CSS3.",
         "image": {
             "file": null,
             "url": "/media/html-css-training.PNG"
         },
         "level": "Débutant",
         "goals": [
             "Développer des sites web responsive avec HTML5 & CSS3",
             "Maîtriser les fondamentaux de HTML5 and CSS3",
             "Etre capable de créer un site web responsive compatible avec les navigateurs modernes"
         ],
         "participants": [
             "Développeurs web",
             "Designers web",
             "Chefs de projet Informatique",
             "Architectes Informatique"
         ],
         "prerequisite": "Bonne compréhension des technologies web",
         "pedagogicalMethods": [
             "Pratique du développement",
             "Présentation de sites web issus du monde réel"
         ],
         "practicalWork": "Vous réaliserez un site web responsive pour une start-up.",

         "durationInHours": 21,
                  "modalities": [
            {
                "name": "Classe Virtuelle",
                "price":378
            },
            {
               "name": "Présentiel",
               "price":1260
            },
            {
               "name": "Sur-Mesure",
               "price":1386
            }
        ],
         "modules": [
             {
                 "title": "Les bases de HTML5",
                 "chapters": [],
                 "durationInHours": 4
             },
             {
                 "title": "Les médias HTML5",
                 "chapters": [],
                 "durationInHours": 3
             },
             {
                 "title": "Les formulaires HTML5",
                 "chapters": [],
                 "durationInHours": 3
             },
             {
                 "title": "Les APIs HTML5",
                 "chapters": [],
                 "durationInHours": 2
             },
             {
                 "title": "Les microdonnées HTML5",
                 "chapters": [],
                 "durationInHours": 2
             },
             {
                 "title": "Les bases de CSS3",
                 "chapters": [],
                 "durationInHours": 3
             },
             {
                 "title": "CSS3 Avancé",
                 "chapters": [],
                 "durationInHours": 2
             },
             {
                 "title": "Design Web Responsive avec CSS3",
                 "chapters": [],
                 "durationInHours": 2
             }
         ]
     }
       
    
   ];


    getTrainings() {
          return this.trainings;
    }

    getTrainingById(id:number) {
      const training = this.trainings.find(
         (s) => {
           return s.id === id;
         }
       );
       return training;
    }
}