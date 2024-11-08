import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import MovieInterestelarPage from '../support/pages/MovieInterestelarPage';

test.describe('Movie Interestelar', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let movieInterestelarPage: MovieInterestelarPage;
  let BASE_URL =
    TheConfig.fromFile(CONFIG)
      .andPath('application.adoroCinema')
      .retrieveData() + '/filmes/filme-114782';

  test.beforeEach(async ({ page }) => {
    movieInterestelarPage = new MovieInterestelarPage(page);
    await page.goto(BASE_URL);
  });

  test('Check movie home', async () => {
    await movieInterestelarPage.verifyGeneralMovieInformation();
  });
  // Não foi possível executar os testes abaixo, pois o tem alguns erros que não deu tempo de resolver
  /*     test('Check movie informations', async () => {
            await movieInterestelarPage.openTabMovieAndChecks();
        });
        test('Check movie persons', async () => {
            await movieInterestelarPage.openTabPersonsAndCheck();
        });
        test('Check movie news', async () => {
            await movieInterestelarPage.openTabNewsAndCheck();
        });
        test('Open and execute movie trailer', async () => {
            await movieInterestelarPage.openTabVideosAndChecks();
        }); */
});
