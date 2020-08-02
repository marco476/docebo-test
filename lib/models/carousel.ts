import { ICarouselCard } from './cards';

// Static and hardcoded carousel chunk size
export const CHUNK_SIZE = 5;

// Types fetch cards promise
export type IFetchCards = () => Promise<ICarouselCard[]>;

// Interface for main class
export interface ICarousel {
  container: HTMLElement;
  page: number;
  maxPage: number;
  cards: ICarouselCard[][];
  fetchCards: IFetchCards;
}

// Interface for header component
export interface ICarouselHeader {
  title?: string;
  subtitle?: string;
  icon?: string;
}

// Interface for constructor options types
export interface ICarouselOptions extends ICarouselHeader {
  container: string;
  maxPage?: number;
  fetchCards: IFetchCards;
}
