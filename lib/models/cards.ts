// Enum of card types
export enum CARD_TYPES {
  VIDEO = 'video',
  E_LEARNING = 'elearning',
  LEARNING_PLAN = 'learning_plan',
  PLAYLIST = 'playlist'
}

// Enum of card cardinality
export enum CARD_CARDINALITY {
  SINGLE = 'single',
  COLLECTION = 'collection'
}

// Interface for carousel card
export interface ICarouselCard {
  image?: string;
  type: CARD_TYPES;
  duration?: number;
  title?: string;
  subtitle?: string;
  cardinality: CARD_CARDINALITY;
}
