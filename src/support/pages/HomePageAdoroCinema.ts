import { Page, expect } from '@playwright/test';
import BasePage from './BasePage';
import HomeElementsAdoroCinema from '../elements/HomeElementsAdoroCinema';
import MoviePageElements from '../elements/MoviePageElements';

export default class HomePageAdoroCinema extends BasePage {
  readonly homeElementsAdoroCinema: HomeElementsAdoroCinema;
  readonly moviePageElements: MoviePageElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.homeElementsAdoroCinema = new HomeElementsAdoroCinema(page);
    this.moviePageElements = new MoviePageElements(page);
  }

  async searchMovieByName(): Promise<void> {
    await this.homeElementsAdoroCinema.getSearchInput().fill('Interestelar');
    await this.homeElementsAdoroCinema.getAutocompleteResults().isVisible();
    await this.homeElementsAdoroCinema
      .getAutocompleteResultItemByTitle()
      .getByText('Interestelar')
      .click();

    await this.page.waitForURL('**/filmes/filme-114782/');

    await expect(this.moviePageElements.getMovieTitleBar()).toHaveText(
      'Interestelar'
    );
    await expect(
      this.moviePageElements.getMovieSynopsisDetails()
    ).toBeVisible();
    await expect(this.moviePageElements.getMovieSynopsisDetails()).toHaveText(
      'Após ver a Terra consumindo boa parte de suas reservas naturais, um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper (Matthew McConaughey) é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand (Anne Hathaway), Jenkins (Marlon Sanders) e Doyle (Wes Bentley), ele seguirá em busca de uma nova casa. Com o passar dos anos, sua filha Murph (Mackenzie Foy e Jessica Chastain) investirá numa própria jornada para também tentar salvar a população do planeta.'
    );
  }
}
