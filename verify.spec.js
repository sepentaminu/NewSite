const { test, expect } = require('@playwright/test');

test('homepage screenshot', async ({ page }) => {
  await page.goto('http://localhost:8000/index.html');
  // Wait for network to be idle to ensure all assets are loaded
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: 'screenshot.png' });
});
