import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://csra-modern.vercel.app/');
  await expect(page).toHaveTitle(/SaaSy/);
});

test.describe('navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://csra-modern.vercel.app/');
  });

  test('main navigation', async ({ page }) => {
    await expect(page).toHaveURL('https://csra-modern.vercel.app/');
  });
});
