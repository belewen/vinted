export type TypeCategory = {
  id: number;
  title: string;
  subCategories?: TypeSubCategory[];
  navigation?: NavigationVintedPages[];
};

export type NavigationVintedPages = {
  title: string;
  navigationTitles: { description: string; path?: string }[];
};

export type TypeSubCategory = {
  id: number;

  title: string;
  iconName?: string;
  // Utile pour le "Voir tout"
  navLink?: string;
  subsubCategories?: TypeSubSubCategory[];
};

const seeAll: 'Voir tout' = 'Voir tout';
const seeOthers: 'Autres' = 'Autres';

export type TypeSubSubCategory = { title: string; link?: string };

export const headerCategories: TypeCategory[] = [
  {
    id: 1,
    title: 'Femmes',

    subCategories: [
      { id: 0, title: seeAll, iconName: 'see-all' },
      {
        id: 1,
        title: 'Vêtements',
        iconName: 'skirt',

        subsubCategories: [
          { title: seeAll },
          { title: 'Sweats et sweats à capuches' },
          { title: 'Robes' },
          { title: 'Hauts et t-shirts' },
          { title: 'Pantalons et leggings' },
          { title: 'Combinaisons et combishorts' },
          { title: 'Lingerie et pyjamas' },
          { title: 'Vêtements de sport' },
          { title: 'Autres' },
          { title: 'Manteaux et vestes' },
          { title: 'Blazers et tailleurs' },
          { title: 'Jupes' },
          { title: 'Jeans' },
          { title: 'Shorts' },
          { title: 'Maillots de bain' },
          { title: 'Maternité' },
          { title: 'Costumes et tenues particulières' },
        ],
      },
      {
        id: 2,
        title: 'Chaussures',
        iconName: 'shoes_woman',
        subsubCategories: [
          { title: seeAll },
          { title: 'Mules et sabots' },
          { title: 'Sandales, claquettes et tongs' },
          { title: 'Chaussures et pantoufles' },
          { title: 'Baskets' },
          { title: 'Bottes' },
          { title: 'Chaussures plates' },
          { title: 'Chaussures à talons' },
          { title: 'Chaussures de sport' },
        ],
      },
      { id: 99, title: seeOthers, iconName: 'dot-others' },
    ],
  },
  {
    id: 2,
    title: 'Hommes',

    subCategories: [
      { id: 0, title: seeAll, iconName: 'see-all' },
      {
        id: 1,
        title: 'Vêtements',
        iconName: 't-shirt',
        subsubCategories: [
          { title: seeAll },
          { title: 'Manteaux et vestes' },
          { title: 'Costumes et blazers' },
          { title: 'Pantalons' },
          { title: 'Sous-vêtements et chaussetes' },
          { title: 'Maillots de bains' },
          { title: 'Vêtements spécialisés et costumes' },
          { title: 'Hauts et t-shirts' },
          { title: 'Swets et pulls' },
          { title: 'Shorts' },
          { title: 'Pyjamas' },
          { title: 'Vêtements de sport et accessoires' },
          { title: 'Autres' },
        ],
      },
      {
        id: 2,
        title: 'Chaussures',
        iconName: 'manshoes',
        subsubCategories: [
          { title: seeAll },
          { title: 'Bottes' },
          { title: 'Sandales,claquettes et tongs' },
          { title: 'Chaussons et pantoufles' },
          { title: 'Baskets' },
          { title: 'Mocassins et chaussures bateau' },
          { title: 'Espadrilles' },
          { title: 'Chaussures habillées' },
          { title: 'Chaussures de sport' },
        ],
      },
      { id: 99, title: seeOthers, iconName: 'dot-others' },
    ],
  },

  {
    id: 3,

    title: 'Enfants',
    subCategories: [
      { id: 0, title: seeAll, iconName: 'see-all' },
      {
        id: 1,
        title: 'Filles',
        iconName: 'skirt',
        subsubCategories: [
          { title: seeAll },
          { title: 'Chaussures' },
          { title: 'Pulls & sweats' },
          { title: 'Robes' },
          { title: 'Pantalons et shorts' },
          { title: 'Accessoires' },
          { title: 'Sous-vêtements' },
          { title: 'Vêtements de sport' },
          { title: 'Jumeaux et plus' },
          { title: 'Tenues de soirée' },
          { title: 'Bébé filles' },
          { title: 'Vêtements extérieur' },
          { title: 'Chemises et t-shirts' },
          { title: 'Jupes' },
          { title: 'Sac et sacs à dis' },
          { title: 'Equiments de natations' },
          { title: 'Oyhamas et chemises de nuit' },
          { title: 'Housse pour vêtements' },
          { title: 'Déguisements' },
          { title: 'Autres' },
        ],
      },
      {
        id: 3,
        title: 'Garçons',
        iconName: 'boy',
        subsubCategories: [
          { title: seeAll },
          { title: 'Chaussures' },
          { title: 'Pulls & sweats' },
          { title: 'Pantalons et shorts' },
          { title: 'Accessoires' },
          { title: 'Sous-vêtements' },
          { title: 'Vêtements de sport' },
          { title: 'Jumeaux et plus' },
          { title: 'Tenues de soirée' },
          { title: 'Bébé garçons' },
          { title: 'Vêtements extérieurs' },
          { title: 'Chemises et t-shirts' },
          { title: 'Sacs et sac à dos' },
          { title: 'Equipements de natations' },
          { title: 'Pyjamas' },
          { title: 'Housses pour vêtements' },
          { title: 'Déguisements' },
          { title: 'Autres' },
        ],
      },
      { id: 99, title: seeOthers, iconName: 'dot-others' },
    ],
  },
  {
    id: 4,

    title: 'Maison',
    subCategories: [
      { id: 0, title: seeAll, iconName: 'see-all' },
      {
        id: 1,
        title: 'Textiles',
        iconName: 'tissue',
        subsubCategories: [
          { title: seeAll },
          { title: 'Couvertures' },
          { title: 'Coussins décoratifs' },
          { title: 'Linge de table' },
          { title: 'Serviettes' },
          { title: 'Linge de lit' },
          { title: 'Rideaux et voilages' },
          { title: 'Taps' },
          { title: 'Tapisseries décoratives' },
        ],
      },
      {
        id: 2,
        title: 'Décoration',
        iconName: 'vase',
        subsubCategories: [
          { title: seeAll },
          { title: 'Horloges' },
          { title: 'Encadrements' },
          { title: 'Rangements' },
          { title: 'Bougies & bougeoirs' },
          { title: 'Etagères murales' },
          { title: 'Miroirs' },
          { title: 'Vases' },
        ],
      },
      { id: 99, title: seeOthers, iconName: 'dot-others' },
    ],
  },
  {
    id: 5,

    title: 'Divertissement',
    subCategories: [
      { id: 0, title: seeAll, iconName: 'see-all' },
      {
        id: 1,
        title: 'Jeux vidéos et consoles',
        iconName: 'videogamecontroller',
        subsubCategories: [
          { title: seeAll },
          { title: 'Xbox One' },
          { title: 'Playstation 5' },
          { title: 'Playstation antérieures' },
          { title: 'Nintendo Wii & Wii U' },
          { title: 'Nintendo Game boy' },
          { title: 'Sega' },
          { title: 'Réalité virtuelle' },
          { title: 'Xbox series X et S' },
          { title: 'Xbox antérieures' },
          { title: 'Playstation 4' },
          { title: 'Nintendo Switch' },
          { title: 'Nintendo 3DS & 2DS' },
          { title: 'Jeux PC' },
          { title: 'Rétrogaming' },
        ],
      },
      {
        id: 2,
        title: 'Jeux et puzzles',
        iconName: 'chess',
        subsubCategories: [
          { title: seeAll },
          { title: 'Jeux de placement ' },
          { title: 'Puzzles' },
          { title: 'Jeux de voyage et de poche' },
          { title: 'Jeux adresse' },
          { title: 'Jeux de plateau' },
          { title: 'Casse-têtes' },
          { title: 'Jeux de sociétés et de figurines' },
          { title: 'Jeux au sol' },
        ],
      },
      { id: 99, title: seeOthers, iconName: 'dot-others' },
    ],
  },
  {
    id: 6,

    title: 'Animaux',
    subCategories: [
      { id: 0, title: seeAll, iconName: 'see-all' },
      {
        id: 1,
        title: 'Chiens',
        iconName: 'dog',
        subsubCategories: [
          { title: seeAll },
          { title: 'Vêtements & accessoires' },
          { title: 'Colliers & laisses' },
          { title: 'Gamelles & distributeurs' },
          { title: 'Toilettage' },
          { title: 'Paniers & couvertures' },
          { title: 'Jouets' },
          { title: 'Accessoires de dressage' },
          { title: 'Cages, caisses & sacs' },
        ],
      },
      {
        id: 2,

        title: 'Chats',
        iconName: 'cat',
        subsubCategories: [
          { title: seeAll },
          { title: 'Jouets' },
          { title: 'Paniers' },
          { title: 'Vêtements & accessoires' },
          { title: 'Toilettage' },
          { title: 'Gamelles & distributeurs' },
          { title: 'Colliers & laisses' },
          { title: 'Transport' },
          { title: 'Bacs à litière' },
        ],
      },
      { id: 99, title: seeOthers, iconName: 'dot-others' },
    ],
  },
  {
    id: 7,
    title: 'A propos',
    navigation: [
      {
        title: 'Découvrir',
        navigationTitles: [
          { description: 'Comment ça marche' },
          { description: `Vérification de l'article` },
          { description: 'Applications mobiles' },
          { description: `Centre d'aide` },
          { description: 'Tableau de bord' },
          { description: 'Vinted Pro' },
          { description: 'Guide Vinted Pro' },
        ],
      },
      {
        title: 'Entreprise',
        navigationTitles: [
          { description: 'A propos de Vinted' },
          { description: 'Carrière' },
          { description: 'Eco-responsabilité' },
          { description: 'Presse' },
          { description: 'Publicités' },
        ],
      },
      {
        title: 'Politiques',
        navigationTitles: [
          { description: 'Confiances et sécurité' },
          { description: 'Politique de confidentialité' },
          { description: 'Terme et conditions' },
          { description: 'Politiques de cookies' },
          { description: 'Conditions de vente Pro' },
          { description: "Conditions d'utilisation Pro" },
        ],
      },
      {
        title: 'Vie privée',
        navigationTitles: [{ description: 'Paramètre des cookies' }],
      },
      {
        title: 'Communauté',
        navigationTitles: [{ description: 'Forum' }],
      },
    ],
  },
  {
    id: 8,
    title: 'Notre plateforme',
  },
];
