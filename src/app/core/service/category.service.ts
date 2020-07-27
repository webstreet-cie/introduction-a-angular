import { Injectable } from '@angular/core';
import { Category } from '../../shared/models/category';

@Injectable()
export class CategoryService {

  categories = [
    {
        "id": 1,
        "name": "Informatique",
        "slug": "formations-informatique",
        "subCategories": [
            {
                "id": 4,
                "name": "Gestion des projets et des SI",
                "slug": "formations-gestion-des-projets-et-des-si",

            },
            {
                "id": 5,
                "name": "Outils de développement",
                "slug": "formations-outils-de-developpement",

            },
            {
                "id": 6,
                "name": "Bureautique",
                "slug": "formations-bureautique",

            },
            {
                "id": 7,
                "name": "Création Graphique et DAO",
                "slug": "formations-creation-graphique-et-dao",

            },
            {
                "id": 8,
                "name": "Web Marketing et Réseaux Sociaux",
                "slug": "formations-web-marketing-et-reseaux-sociaux",

            },
        ]
    },
    {
        "id": 2,
        "name": "Management",
        "slug": "formations-management",
        "subCategories": [
            {
                "id": 9,
                "name": "Direction et stratégie d'entreprises",
                "slug": "formations-direction-et-strategie-dentreprise",

            },
            {
                "id": 10,
                "name": "Gestion de projet",
                "slug": "formations-gestion-de-projet",

            },
            {
                "id": 11,
                "name": "Leadership",
                "slug": "formations-leadership",

            },
            {
                "id": 12,
                "name": "Développement personnel",
                "slug": "formations-developpement-personnel",

            },
            {
                "id": 13,
                "name": "Les fondamentaux du management",
                "slug": "formations-les-fondamentaux-du-management",

            },
            {
                "id": 14,
                "name": "Communication et gestion des conflits",
                "slug": "formations-communication-gestion-des-conflits",

            },
        ]
    },
    {
        "id": 3,
        "name": "Langues",
        "slug": "formations-langues",
        "subCategories": [
            {
                "id": 15,
                "name": "Anglais",
                "slug": "formations-anglais",

            },
            {
                "id": 16,
                "name": "Français langue étrangère",
                "slug": "formations-francais-langue-etrangere",

            },
            {
                "id": 17,
                "name": "Espagnol",
                "slug": "formations-espagnol",

            },
            {
                "id": 18,
                "name": "Chinois",
                "slug": "formations-chinois",

            },
            {
                "id": 19,
                "name": "Japonais",
                "slug": "formations-japonais",

            },
            {
                "id": 20,
                "name": "Italien",
                "slug": "formations-italien",

            },
            {
                "id": 21,
                "name": "Allemand",
                "slug": "formations-allemand",

            },
            {
                "id": 22,
                "name": "Arabe",
                "slug": "formations-arabe",

            },
            {
                "id": 23,
                "name": "Portugais",
                "slug": "formations-portugais",

            },
            {
                "id": 24,
                "name": "Russe",
                "slug": "formations-russe",

            }
        ]
    },


];

getCategories() {
  return this.categories;
}


}
