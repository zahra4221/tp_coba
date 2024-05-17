import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/');
});

test('check bouton sum', async({ page }) => {
  await page.locator('.btnEqual').click();
  await expect(page.locator('.screen')).toHaveText('');
});

test('check l\'addition', async({ page }) => {
    await page.locator('button[name="1"]').click();
    await page.locator('button[name="sum"]').click();
    await page.locator('button[name="1"]').click();
    await expect(page.locator('.screen')).toHaveText('2');
  });

test('check soustraction', async({ page }) => {
    await page.locator('button[name="1"]').click();
    await page.locator('button[name="soustraction"]').click();
  await page.locator('button[name="1"]').click();
  await page.locator('button[name="="]').click();
  await expect(page.locator('.screen')).toHaveText('0');
});

test('check multiplication', async({ page }) => {
    await page.locator('button[name="1"]').click();
    await page.locator('button[name="multiplication"]').click();
  await page.locator('button[name="4"]').click();
  await page.locator('button[name="="]').click();
  await expect(page.locator('.screen')).toHaveText('4');
});
