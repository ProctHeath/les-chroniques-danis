// BASE_URL vaut '/les-chroniques-danis/' en production (cf. vite.config.js) et '/' en dev.
// Les chemins d'images doivent le préfixer, sinon ils pointent vers la racine du domaine
// (proctheath.github.io/images/...) au lieu du dossier du projet.
const BASE = import.meta.env.BASE_URL;
const img = (name) => `${BASE}images/${name}`;

export const chronicles = [
  {
    id: '01', place: 'ISLANDE', year: '2026', title: 'Terre de feu\net de glace',
    image: img('iceland-01.jpg'),
    alt: 'Anis face à l’océan et aux blocs de glace sur une plage noire.',
    intro: 'Une terre où le vent, la glace et l’océan semblent raconter la même histoire.', align: 'left'
  },
  {
    id: '02', place: 'AU-DELÀ DU CIEL', year: '2026', title: 'Quand la nuit\ns’illumine',
    image: img('iceland-03.jpg'),
    alt: 'Aurore boréale au-dessus d’un paysage sombre.',
    intro: 'Dans le silence du Nord, le ciel devient parfois le paysage lui-même.', align: 'right'
  },
  {
    id: '03', place: 'SUR LES TRACES DU NORD', year: '2026', title: 'Vestiges, brume\net légendes',
    image: img('iceland-04.jpg'),
    alt: 'Bateau nordique noir posé devant une montagne brumeuse.',
    intro: 'Entre mythes anciens et paysages immenses, chaque détour devient une chronique.', align: 'left'
  },
];

export const gallery = [
  img('iceland-02.jpg'), img('iceland-05.jpg'), img('iceland-06.jpg'),
  img('iceland-07.jpg'), img('iceland-08.jpg'), img('iceland-09.jpg'), img('iceland-10.jpg'),
];
