import {
  ICarouselCard,
  CARD_TYPES,
  CARD_CARDINALITY
} from '../../lib/models/cards';

// List of fake cards!
const fake_cards: ICarouselCard[] = [
  {
    image:
      'https://static.scientificamerican.com/sciam/cache/file/4E0744CD-793A-4EF8-B550B54F7F2C4406.jpg',
    type: CARD_TYPES.VIDEO,
    duration: 2400,
    title: 'Welcome to Effective Time Management',
    cardinality: CARD_CARDINALITY.SINGLE,
    subtitle: 'English'
  },
  {
    image:
      'https://pix10.agoda.net/hotelImages/1199068/-1/09cb9a2780bf41ad1e8f8a3d2e074754.jpg?s=1024x768',
    type: CARD_TYPES.E_LEARNING,
    duration: 3811,
    title: 'Choose the best audio player software for your computer',
    cardinality: CARD_CARDINALITY.SINGLE
  },
  {
    image: 'https://scx2.b-cdn.net/gfx/news/hires/2019/2-nature.jpg',
    type: CARD_TYPES.LEARNING_PLAN,
    duration: 5934,
    title: 'The small change that creates massive results in your life',
    cardinality: CARD_CARDINALITY.COLLECTION
  },
  {
    image: 'https://i.ytimg.com/vi/Z4ls0-ZGnU4/maxresdefault.jpg',
    type: CARD_TYPES.PLAYLIST,
    duration: 1800,
    title: 'Enhance your brand potential with giant advertising blimps',
    cardinality: CARD_CARDINALITY.COLLECTION
  },
  {
    image:
      'https://q-cf.bstatic.com/images/hotel/max1024x768/244/244881048.jpg',
    type: CARD_TYPES.E_LEARNING,
    duration: 4890,
    title: 'How to write better advertising copy...',
    cardinality: CARD_CARDINALITY.SINGLE
  },
  {
    image:
      'https://www.obiettividarte.it/wp-content/uploads/2018/03/nature-3125912_960_720.jpg',
    type: CARD_TYPES.VIDEO,
    duration: 1621,
    title: 'How choose the best way to live my life',
    subtitle: 'English',
    cardinality: CARD_CARDINALITY.SINGLE
  },
  {
    image:
      'https://blog.nationalgeographic.org/wp-content/uploads/2020/05/May-11_Dorset-heathland_shutterstock_1332881306_sml-1140x450.jpg',
    type: CARD_TYPES.E_LEARNING,
    duration: 6219,
    title: 'How can you do the best in your job without effort',
    cardinality: CARD_CARDINALITY.COLLECTION
  },
  {
    image:
      'https://www.discovergreece.com/sites/default/files/styles/sc_1920x1000/public/2020-02/shutterstock_1188663136_aerial_view_of_the_old_stone_bridge_in_klidonia_zagoria_in_the_autumn_epirus_western_greece._this_arch_bridge_with_elongated_arch_built_in_1853.jpg?itok=FyKB6sJe',
    type: CARD_TYPES.LEARNING_PLAN,
    duration: 5067,
    title: 'Why COVID19 can be a problem for USA exports',
    cardinality: CARD_CARDINALITY.COLLECTION
  }
];

export default fake_cards;
