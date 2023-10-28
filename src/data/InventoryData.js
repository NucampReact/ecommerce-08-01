import destructor from '../images/cards/destructor.jpeg';
import frodo from '../images/cards/frodo.jpeg';
import summon from '../images/cards/summon.jpeg';
import whitebeard from '../images/cards/whitebeard.webp';
import xyris from '../images/cards/xyris.jpeg';

import ancient from '../images/coins/ancient.jpeg';
import indianHead from '../images/coins/indian-head.jpeg';
import julius from '../images/coins/julius-caesar.jpg';
import peru from '../images/coins/peru.png';

const products = [
  {
    id: 1,
    image: destructor,
    title: 'Destructor',
    price: 123.99,
    category: 'Card',
    stockCount: 5
  },
  {
    id: 2,
    image: frodo,
    title: 'Frodo',
    price: 44.95,
    category: 'Card',
    stockCount: 3
  },
  {
    id: 3,
    image: summon,
    title: 'Summon',
    price: 84.69,
    category: 'Card',
    stockCount: 2
  },
  {
    id: 4,
    image: whitebeard,
    title: 'Whitebeard',
    price: 201,
    category: 'Card',
    stockCount: 8
  },
  {
    id: 5,
    image: xyris,
    title: 'Xyris',
    price: 50.25,
    category: 'Card',
    stockCount: 4
  },
  {
    id: 6,
    image: ancient,
    title: 'Ancient',
    price: 95.95,
    category: 'Coin',
    stockCount: 5
  },
  {
    id: 7,
    image: indianHead,
    title: 'Indian Head',
    price: 112,
    category: 'Coin',
    stockCount: 4
  },
  {
    id: 8,
    image: julius,
    title: 'Juluis Caeasar',
    price: 7880,
    category: 'Coin',
    stockCount: 5
  },
  {
    id: 9,
    image: peru,
    title: 'Peru',
    price: 20000,
    category: 'Coin',
    stockCount: 5
  }
];

export default products;