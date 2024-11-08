import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import HomePageAdoroCinema from '../support/pages/HomePageAdoroCinema';

test.describe('Home Adoro Cinema ', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let homePageAdoroCinema: HomePageAdoroCinema;
  let BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.adoroCinema')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    homePageAdoroCinema = new HomePageAdoroCinema(page);
    await page.goto(BASE_URL);
  });

  test('Find movie by name and select by autocomplete suggestions', async () => {
    await homePageAdoroCinema.searchMovieByName();
  });
});
