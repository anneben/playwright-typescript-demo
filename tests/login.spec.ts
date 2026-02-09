import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { users } from '../utils/testData';




test.describe('Login functionality', () => {

  test('Valid user can login successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login(users.valid.username, users.valid.password);

    await expect(page).toHaveURL(/inventory.html/);
  });

  test('Invalid user sees error message', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login(users.invalid.username, users.invalid.password);

    await expect(loginPage.errorMessage).toBeVisible();
  });

});
