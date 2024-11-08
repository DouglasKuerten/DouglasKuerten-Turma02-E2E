import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class HomeElementsAdoroCinema extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getSearchInput(): Locator {
    return this.page.locator('#header-search-input');
  }
  getAutocompleteResults(): Locator {
    return this.page.locator('.autocomplete-results');
  }
  getAutocompleteResultItemByTitle(): Locator {
    return this.page
      .locator('.autocomplete-results')
      .locator('.autocomplete-result-item')
      .locator('.autocomplete-result-title');
  }
}
