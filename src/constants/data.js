import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '₹4700.00',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '₹4900.00',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '₹3600.00',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '₹2600.00',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '₹2100.00',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '₹1600.00',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '₹1300.00',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '₹840.00',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '₹2600.00',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '₹2100.00',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Recognized for our exceptional culinary artistry and innovation.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Elevating your senses with our exquisite menu and ambiance.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Committed to providing unparalleled hospitality and service excellence."',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Honored by the industry’s most esteemed culinary professionals.',
  },
];

export default { wines, cocktails, awards };
