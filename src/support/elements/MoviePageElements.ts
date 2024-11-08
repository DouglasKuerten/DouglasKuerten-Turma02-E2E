import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class MoviePageElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getMovieTitleBar(): Locator {
    return this.page.locator('.titlebar-page').locator('.titlebar-title');
  }
  getMovieSynopsisDetails(): Locator {
    return this.page.locator('#synopsis-details').locator('.content-txt');
  }
  getMovieButton(): Locator {
    return this.page.locator('.entity-page-nav').getByText('Filme');
  }
  getMoviePersonsButton(): Locator {
    return this.page.locator('.entity-page-nav').getByText('Personalidades');
  }
  getMovieNewsButton(): Locator {
    return this.page.locator('.entity-page-nav').getByText('Notícias');
  }
  getMovieVideosButton(): Locator {
    return this.page.locator('.entity-page-nav').getByText('Vídeos');
  }
  getVideoViwer(): Locator {
    return this.page.locator('iframe.dailymotion-player');
  }
}
