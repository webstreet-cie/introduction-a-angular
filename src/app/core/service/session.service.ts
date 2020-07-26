import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  sessions = [
    {
        "id": 1,
        "trainingTitle":"Angular - Créer des applications web",
        "language": {
            "name": "Français"
        },
        "sessionModality": {
            "id": 4,
            "name": "Classe Virtuelle",
            "price": 504
        },
        "trainer": {
            "firstname": "Roxane",
            "lastname": "Anquetil"
        },
        "localisation": null,
        "slug": "formation-angular-creer-des-applications-web-du-24082020-au-27082020-langage-fr",
        "startDateTime": "2020-08-24T09:00:00+00:00",
        "endDateTime": "2020-08-27T17:30:00+00:00"

    },
    {
        "id": 2,
        "trainingTitle":"HTML5 & CSS3 - Créer un site web responsive",
        "language": {
            "name": "Français"
        },
        "sessionModality": {
            "id": 1,
            "name": "Présentiel",
            "price": 1680
        },
        "trainer": {
            "firstname": "Roxane",
            "lastname": "Anquetil"
        },
        "localisation": {
            "address": {
                "address": "5 rue Gustave Eiffel",
                "city": "Bois-Guillaume",
                "operationCity": "Rouen",
                "zipCode": "76230",
                "country": "France",
                "complement": ""
            },
            "room": "Ada Lovelace"
        },
        "slug": "formation-angular-creer-des-applications-web-du-03092020-au-06092020-langage-fr",
        "startDateTime": "2020-09-03T09:00:00+00:00",
        "endDateTime": "2020-09-06T17:30:00+00:00"
    },
    {
      "id": 3,
      "trainingTitle":"PHP & MySQL - Créer un site web dynamique",

      "language": {
          "name": "Français"
      },
      "sessionModality": {
          "id": 1,
          "name": "Présentiel",
          "price": 1680
      },
      "trainer": {
          "firstname": "Roxane",
          "lastname": "Anquetil"
      },
      "localisation": {
          "address": {
              "address": "5 rue Gustave Eiffel",
              "city": "Bois-Guillaume",
              "operationCity": "Rouen",
              "zipCode": "76230",
              "country": "France",
              "complement": ""
          },
          "room": "Grace Hopper"
      },
      "slug": "formation-php-mysql-creer-site-web-dynamique-du-07092020-au-10092020-langage-fr",
      "startDateTime": "2020-09-07T09:00:00+00:00",
      "endDateTime": "2020-09-10T17:30:00+00:00"
  }
];

getSessions() {
    return this.sessions;
}

}
