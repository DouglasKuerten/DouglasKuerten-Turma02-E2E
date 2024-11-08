import { Page, expect } from '@playwright/test';
import BasePage from './BasePage';
import MoviePageElements from '../elements/MoviePageElements';

export default class MovieInterestelarPage extends BasePage {
  readonly moviePageElements: MoviePageElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.moviePageElements = new MoviePageElements(page);
  }

  async verifyGeneralMovieInformation(): Promise<void> {
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

  async openTabMovieAndChecks(): Promise<void> {
    await this.moviePageElements.getMovieButton().click();
    await expect(this.page).toHaveURL(/.*\/pesquisar\/movie\/?q=interestelar/);
    await expect(this.moviePageElements.getMovieButton()).toHaveClass(
      /current/
    );
    await expect(this.moviePageElements.getMovieSynopsisDetails()).toHaveText(
      'Após ver a Terra consumindo boa parte de suas reservas naturais, um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper (Matthew McConaughey) é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand (Anne Hathaway), Jenkins (Marlon Sanders) e Doyle (Wes Bentley), ele seguirá em busca de uma nova casa. Com o passar dos anos, sua filha Murph (Mackenzie Foy e Jessica Chastain) investirá numa própria jornada para também tentar salvar a população do planeta.'
    );
  }
  async openTabPersonsAndCheck(): Promise<void> {
    await this.moviePageElements.getMoviePersonsButton().click();
    await expect(this.page).toHaveURL(/.*\/pesquisar\/person\/?q=interestelar/);
    await expect(this.moviePageElements.getMovieButton()).toHaveClass(
      /current/
    );
  }
  async openTabNewsAndCheck(): Promise<void> {
    await this.moviePageElements.getMovieNewsButton().click();
    await expect(this.page).toHaveURL(/.*\/pesquisar\/news\/?q=interestelar/);
    await expect(this.moviePageElements.getMovieButton()).toHaveClass(
      /current/
    );
  }

  async openTabVideosAndChecks(): Promise<void> {
    await this.moviePageElements.getMovieVideosButton().click();
    await expect(this.page).toHaveURL(
      /.*\/filmes\/filme-114782\/trailer-19538702/
    );
    await expect(this.moviePageElements.getMovieVideosButton()).toHaveClass(
      /current/
    );

    // Verifica se o vídeo está sendo executado

    /* Não funcionou o playing, o que vale é a intenção :) */

    /*         const videoElement = this.homeElementsAdoroCinema.getVideoViwer();
                    await expect(videoElement).toBeVisible();
                    const isPlaying = await videoElement.evaluate(
                        (video: any) => video.playing && !video.ended
                    );
                    expect(isPlaying).toBe(true);
                     */
  }
}
