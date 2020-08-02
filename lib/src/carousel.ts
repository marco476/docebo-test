import {
  ICarousel,
  ICarouselHeader,
  ICarouselOptions,
  IFetchCards,
  CHUNK_SIZE
} from '../models/carousel';
import { ICarouselCard } from '../models/cards';

// Main Class - Carousel library
class Carousel implements ICarousel {
  container: HTMLElement = undefined;
  page: number = 0;
  maxPage: number = 0;
  cards: ICarouselCard[][] = [];
  fetchCards: IFetchCards = undefined;

  /**
   * Class constructor
   * @param {ICarouselOptions} options
   */
  constructor({
    container,
    title,
    subtitle,
    icon,
    maxPage,
    fetchCards
  }: ICarouselOptions) {
    if (!container) {
      throw "You can't create a Carousel without a container!";
    }

    // Get container node: will be used by library for create the Carousel
    const containerNode: HTMLElement = document.getElementById(container);
    containerNode.className = 'carousel';

    // Create Carouselheader
    const headerNode: HTMLDivElement | undefined = this.createHeader({
      title,
      subtitle,
      icon
    });

    const bodyNode: HTMLDivElement = this.createBody(maxPage);

    // Append header in container node
    if (headerNode) {
      containerNode.appendChild(headerNode);
    }

    // Append body in container node
    containerNode.appendChild(bodyNode);

    this.container = containerNode;
    this.maxPage = maxPage;

    // Save the fetch cards function
    this.fetchCards = fetchCards;

    // I'm ready to fetch the first cards chunk!
    this.handleFetchCards();
  }

  /**
   * Utility method fo create Carousel Header
   *
   * @param {ICarouselHeader} params
   * @param {string} params.title
   * @param {string} params.subtitle
   * @param {string} params.icon
   * @returns {HTMLDivElement|undefined}
   */
  createHeader({
    title,
    subtitle,
    icon
  }: ICarouselHeader): HTMLDivElement | undefined {
    // Header will be created only if one of inner elements exists
    if (!title && !subtitle && !icon) {
      return undefined;
    }

    const headerNode: HTMLDivElement = document.createElement('div');
    headerNode.className = 'carouselHeader';

    /**
     * Icon element will be created only if icon exist
     * Create icon element and append it to the parent
     */
    if (icon) {
      const iconNode: HTMLDivElement = document.createElement('div');
      iconNode.className = 'carouselHeader__image material-icons';
      iconNode.textContent = icon;

      headerNode.appendChild(iconNode);
    }

    // Content will be created only if one of inner elements exists
    if (title || subtitle) {
      const contentNode: HTMLDivElement = document.createElement('div');
      contentNode.className = 'carouselHeaderContent';

      // Create title element and append it to the parent
      if (title) {
        const titleNode: HTMLParagraphElement = document.createElement('p');
        titleNode.className = 'carouselHeaderContent__title';
        titleNode.textContent = title;

        contentNode.appendChild(titleNode);
      }

      // Create subtitle element and append it to the parent
      if (subtitle) {
        const subtitleNode: HTMLParagraphElement = document.createElement('p');
        subtitleNode.className = 'carouselHeaderContent__subtitle';
        subtitleNode.textContent = subtitle;

        contentNode.appendChild(subtitleNode);
      }

      // Append content header node to the parent
      headerNode.appendChild(contentNode);
    }

    return headerNode;
  }

  /**
   * Utility method for create Carousel body
   *
   * @param {number} maxPage
   * @returns {HTMLDivElement}
   */
  createBody(maxPage: number): HTMLDivElement {
    const bodyNode: HTMLDivElement = document.createElement('div');
    bodyNode.className = 'carouselBody';

    const goAheadNode: HTMLDivElement = document.createElement('div');
    const goPrevNode: HTMLDivElement = document.createElement('div');

    // Create CHUNK_SIZE cards to append in the body
    for (let i = 0; i < CHUNK_SIZE; i++) {
      const cardNode: HTMLDivElement = this.createCard();
      bodyNode.appendChild(cardNode);
    }

    goAheadNode.className = 'carouselBody__goAhead hide material-icons';
    goPrevNode.className = 'carouselBody__goPrev hide material-icons';

    goAheadNode.textContent = 'arrow_forward_ios';
    goPrevNode.textContent = 'arrow_back_ios';

    /**
     * Attach event listener to arrows elements to go ahead and prev
     * in the carousel
     */
    goAheadNode.addEventListener('click', () => this.goAhead());
    goPrevNode.addEventListener('click', () => this.goBack());

    // Show the ahead arrow only if exist more than one page
    if (maxPage > 0) {
      goAheadNode.classList.remove('hide');
    }

    bodyNode.appendChild(goAheadNode);
    bodyNode.appendChild(goPrevNode);

    return bodyNode;
  }

  /**
   * Utility method for create a card
   *
   * @returns {HTMLDivElement}
   */
  createCard(): HTMLDivElement {
    const cardNode: HTMLDivElement = document.createElement('div');
    const imageNode: HTMLDivElement = document.createElement('div');

    const bodyNode: HTMLDivElement = document.createElement('div');
    const titleNode: HTMLDivElement = document.createElement('div');
    const subTitleNode: HTMLDivElement = document.createElement('div');
    const topLoadingNode: HTMLDivElement = document.createElement('div');
    const bottomLoadingNode: HTMLDivElement = document.createElement('div');

    const firstDivInnerTopLoadingNode: HTMLDivElement = document.createElement(
      'div'
    );
    const secondDivInnerTopLoadingNode: HTMLDivElement = document.createElement(
      'div'
    );

    const firstDivInnerBottomLoadingNode: HTMLDivElement = document.createElement(
      'div'
    );
    const secondDivInnerBottomLoadingNode: HTMLDivElement = document.createElement(
      'div'
    );
    const thirdDivInnerBottomLoadingNode: HTMLDivElement = document.createElement(
      'div'
    );

    cardNode.className = 'carouselCard';
    imageNode.className = 'carouselCard__image';

    bodyNode.className = 'carouselCardBody';
    titleNode.className = 'carouselCardBody__title';
    subTitleNode.className = 'carouselCardBody__subtitle';
    topLoadingNode.className = 'carouselCardBody__topLoading';
    bottomLoadingNode.className = 'carouselCardBody__bottomLoading';

    topLoadingNode.appendChild(firstDivInnerTopLoadingNode);
    topLoadingNode.appendChild(secondDivInnerTopLoadingNode);

    bottomLoadingNode.appendChild(firstDivInnerBottomLoadingNode);
    bottomLoadingNode.appendChild(secondDivInnerBottomLoadingNode);
    bottomLoadingNode.appendChild(thirdDivInnerBottomLoadingNode);

    bodyNode.appendChild(titleNode);
    bodyNode.appendChild(subTitleNode);
    bodyNode.appendChild(topLoadingNode);
    bodyNode.appendChild(bottomLoadingNode);

    cardNode.appendChild(imageNode);
    cardNode.appendChild(bodyNode);

    return cardNode;
  }

  /**
   * Utility method for get the arrow ahead node
   *
   * @returns {HTMLDivElement}
   */
  getArrowAheadNode(): HTMLDivElement {
    return this.container.getElementsByClassName(
      'carouselBody__goAhead'
    )[0] as HTMLDivElement;
  }

  /**
   * Utility method for get the arrow prev node
   *
   * @returns {HTMLDivElement}
   */
  getArrowPrevNode(): HTMLDivElement {
    return this.container.getElementsByClassName(
      'carouselBody__goPrev'
    )[0] as HTMLDivElement;
  }

  /**
   * Utility method for get all Carousel cards node
   *
   * @returns {HTMLCollectionOf<Element>}
   */
  getCardsNode(): HTMLCollectionOf<Element> {
    return this.container.getElementsByClassName('carouselCard');
  }

  /**
   * Utility method for get a Carousel card node based on a index
   *
   * @param {number} index
   * @returns {HTMLDivElement}
   */
  getCardNode(index: number): HTMLDivElement {
    const cardsNode: HTMLCollectionOf<Element> = this.getCardsNode();
    return cardsNode[index] as HTMLDivElement;
  }

  /**
   * Utility method for get image node by its card
   *
   * @param {HTMLDivElement} cardNode
   * @returns {HTMLDivElement}
   */
  getCardImageNode(cardNode: HTMLDivElement): HTMLDivElement {
    return cardNode.getElementsByClassName(
      'carouselCard__image'
    )[0] as HTMLDivElement;
  }

  /**
   * Utility method for get title node by its card
   *
   * @param {HTMLDivElement} cardNode
   * @returns {HTMLDivElement}
   */
  getCardTitleNode(cardNode: HTMLDivElement): HTMLDivElement {
    return cardNode.getElementsByClassName(
      'carouselCardBody__title'
    )[0] as HTMLDivElement;
  }

  /**
   * Utility method for get subtitle node by its card
   *
   * @param {HTMLDivElement} cardNode
   * @returns {HTMLDivElement}
   */
  getCardSubtitleNode(cardNode: HTMLDivElement): HTMLDivElement {
    return cardNode.getElementsByClassName(
      'carouselCardBody__subtitle'
    )[0] as HTMLDivElement;
  }

  /**
   * The method is responsible to increment the current page
   * number, show the prev arrow node and hide the ahead arrow node
   * based on max page supported by Carousel, and call handleFetchCards method
   * for get new data
   */
  goAhead() {
    ++this.page;

    const goAheadNode = this.getArrowAheadNode();
    const goPrevNode = this.getArrowPrevNode();

    goPrevNode.classList.remove('hide');

    if (this.page >= this.maxPage - 1) {
      goAheadNode.classList.add('hide');
    }

    this.handleFetchCards();
  }

  /**
   * The method is responsible to decrement the current page
   * number, show the ahead arrow node and hide the prev arrow node
   * if you are in the first page. In the end it call handleFetchCards method
   * for get new data
   */
  goBack() {
    --this.page;

    const goAheadNode = this.getArrowAheadNode();
    const goPrevNode = this.getArrowPrevNode();

    goAheadNode.classList.remove('hide');

    if (this.page === 0) {
      goPrevNode.classList.add('hide');
    }

    this.handleFetchCards();
  }

  /**
   * The method set card values by ICarouselCard DTO
   * in "index" position
   *
   * @param {ICarouselCard} card
   * @param {number} index
   */
  setCard(card: ICarouselCard, index: number) {
    const { image, title, subtitle }: ICarouselCard = card;
    const cardNode: HTMLDivElement = this.getCardNode(index);

    const imageNode: HTMLDivElement = this.getCardImageNode(cardNode);
    const titleNode: HTMLDivElement = this.getCardTitleNode(cardNode);
    const subTitleNode: HTMLDivElement = this.getCardSubtitleNode(cardNode);

    if (image) {
      imageNode.style.backgroundImage = `url(${image})`;
    }

    if (title) {
      titleNode.textContent = title;
    }

    if (subtitle) {
      subTitleNode.textContent = subtitle;
    }
  }

  /**
   * The method set cards values by an array of ICarouselCard DTO
   *
   * @param {ICarouselCard[]} cards
   */
  setCards(cards: ICarouselCard[]) {
    const cardsNode: HTMLCollectionOf<Element> = this.getCardsNode();

    for (let i = 0; i < cardsNode.length; i++) {
      this.setCard(cards[i], i);
    }
  }

  /**
   * The method handle the fetch cards: it's a wrapper to call
   * when you require new carousel data.
   * It use the cache data if exist it, or call the fetchCards
   * method for get new data.
   */
  handleFetchCards() {
    // Use cache!
    if (this.cards[this.page]) {
      this.setCards(this.cards[this.page]);
      return;
    }

    // Add carousel loading state!
    this.container.classList.add('carousel--loading');

    /**
     * Invoke the fetchCards method and use the list of
     * cards returned for:
     * 1) Save it in the cache based on the current active page
     * 2) Call setCards method for set cards values
     * 3) Remove carousel loading state
     *
     * Yeah, i know: what happen if the Promise is rejected?
     * I thought about it, and my answer is: everything and nothing.
     * So, maybe is better not implement a catch/finally without
     * any other informations!
     */
    this.fetchCards().then((cards: ICarouselCard[]) => {
      this.cards[this.page] = cards;
      this.setCards(cards);

      this.container.classList.remove('carousel--loading');
    });
  }
}

/**
 * Declare Carousel as Window global property
 * for types check
 */
declare global {
  interface Window {
    Carousel: typeof Carousel;
  }
}

// Carousel is now available on window global object 🎉️!
window.Carousel = Carousel;