/**
 * The chunk size (e.g. 6 cards) is static and hardcoded inside
 * the carousel component library.
 * The “fetchCards” function return randomly items in
 * static chunk size.
 *
 * The only way to know the static chunk size is export it
 * by carousel component library.
 *
 * Below you can see a workaround. If it really was an external
 * library, I can import the chunk size and all others library types/const like:
 * import Carousel, { CHUNK_SIZE, ICarouselOptions, ICarouselCard, ... } from '@docebo/carousel'
 */
import { CHUNK_SIZE, ICarouselOptions } from '../lib/models/carousel';
import { ICarouselCard } from '../lib/models/cards';

import fakeCards from './res/cards';

// Fake delay before returning the next cards chunk
const DELAY: number = 2000;

// Fake fetch cards function
function fetchCards(): Promise<ICarouselCard[]> {
  const cards: ICarouselCard[] = [];

  for (let i = 0; i < CHUNK_SIZE; i++) {
    // Get a random card by fake cards
    const nextCard: ICarouselCard =
      fakeCards[Math.floor(Math.random() * fakeCards.length)];

    // Add to cards array!
    cards.push(nextCard);
  }

  // Return a Promise with a timeout, need it for simulate API REST delay
  return new Promise((resolve) => setTimeout(() => resolve(cards), DELAY));
}

// Options for first carousel
const options1: ICarouselOptions = {
  container: 'carousel-1',
  title: "Beautiful Carousel - I'm the one",
  subtitle:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet magna finibus, scelerisque metus vitae, tincidunt quam.',
  icon: 'equalizer',
  maxPage: 3,
  fetchCards
};

// Options for second carousel
const options2: ICarouselOptions = {
  container: 'carousel-2',
  title: "Beautiful Carousel without icon - I'm the second",
  subtitle:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet magna finibus, scelerisque metus vitae, tincidunt quam.',
  maxPage: 2,
  fetchCards
};

// Options for third carousel
const options3: ICarouselOptions = {
  container: 'carousel-3',
  title: "Beautiful Carousel without icon and subtitle - I'm the third",
  maxPage: 4,
  fetchCards
};

// Options for third carousel
const options4: ICarouselOptions = {
  container: 'carousel-4',
  title: "Beautiful Carousel without others cards - I'm the fourth",
  subtitle:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet magna finibus, scelerisque metus vitae, tincidunt quam.',
  icon: 'school',
  fetchCards
};

const carousels = [
  new window.Carousel(options1),
  new window.Carousel(options2),
  new window.Carousel(options3),
  new window.Carousel(options4)
];

console.log('Hello! Take a look here:', carousels);
