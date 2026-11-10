import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => { await page.goto('/'); });

test('theme choice survives reload and navigation closes cleanly', async ({ page }, testInfo) => {
  await page.locator('#theme-toggle').click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  if (testInfo.project.name === 'mobile') {
    const menu = page.locator('#menu-toggle');
    await menu.click();
    await expect(page.locator('#mobile-menu')).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(menu).toHaveAttribute('aria-expanded', 'false');
    await menu.click();
    await page.locator('#mobile-menu a[href="#skills"]').click();
    await expect(page.locator('#mobile-menu')).toBeHidden();
    await expect(page.locator('#skills')).toBeFocused();
  } else {
    await page.locator('.desktop a[href="#skills"]').click();
    await expect(page.locator('.desktop a[href="#skills"]')).toHaveAttribute('aria-current', 'true');
  }
});

test('skill search filters results, handles empty results, and restores accordion', async ({ page }) => {
  const search = page.locator('#skill-search');
  await search.fill('flutter');
  await expect(page.locator('#skill-groups li:visible')).toHaveCount(2);
  await expect(page.locator('#skill-count')).toHaveText('2 / 62');
  await search.fill('no-such-skill');
  await expect(page.locator('#skill-empty')).toBeVisible();
  await search.fill('');
  await expect(page.locator('#skill-empty')).toBeHidden();
  await page.locator('#skills-head-1').click();
  await expect(page.locator('#skills-head-0')).toHaveAttribute('aria-expanded', 'false');
  await expect(page.locator('#skills-panel-0')).toHaveAttribute('inert', '');
  await expect(page.locator('#skills-head-1')).toHaveAttribute('aria-expanded', 'true');
});

test('rapid project filters leave only the final category visible', async ({ page }) => {
  await page.locator('#projects').scrollIntoViewIfNeeded();
  await page.evaluate(() => {
    for (const filter of ['Mobile', 'AI', 'All', 'Web', 'Tools']) {
      document.querySelector<HTMLButtonElement>(`[data-filter="${filter}"]`)!.click();
    }
  });
  const total = await page.locator('.proj').count();
  const expected = await page.locator('.proj[data-category="Tools"]').count();
  await expect(page.locator('.proj:visible')).toHaveCount(expected);
  await expect(page.locator('.proj:visible:not([data-category="Tools"])')).toHaveCount(0);
  await expect(page.locator('#project-count')).toHaveText(`Showing ${expected} of ${total} projects`);
  await page.locator('[data-filter="All"]').click();
  await expect(page.locator('.proj:visible')).toHaveCount(total);
});

test('Murphy care persists, changes expression, and completes the tour', async ({ page }) => {
  const bot = page.locator('#guide-bot');
  await bot.focus(); await page.keyboard.press('Enter');
  await page.locator('[data-tab="care"]').click();
  await page.locator('[data-action="feed"]').click();
  await expect(bot).toHaveAttribute('data-mood', 'love');
  await expect(page.locator('#guide-body')).toContainText('1 snacks shared');
  await page.reload(); await bot.click();
  await page.locator('[data-tab="care"]').click();
  await expect(page.locator('#guide-body')).toContainText('1 snacks shared');
  await page.locator('[data-tab="explore"]').click();
  await page.locator('[data-action="tour"]').click();
  for (let i = 0; i < 8; i++) await page.locator('[data-action="next"]').click();
  await expect(page.locator('#guide-body')).toContainText('Tour complete');
  await expect(page.locator('.guide-highlight')).toHaveCount(0);
  await page.keyboard.press('Escape');
  await expect(page.locator('#guide-bubble')).toBeHidden();
  await expect(bot).toBeFocused();
});

test('local images load and narrow layouts stay inside the viewport', async ({ page }) => {
  await page.locator('#contact').scrollIntoViewIfNeeded();
  const local = await page.locator('img').evaluateAll(images => images.every(img => new URL((img as HTMLImageElement).src).origin === location.origin));
  expect(local).toBe(true);
  await page.locator('img').evaluateAll(images => images.forEach(img => { (img as HTMLImageElement).loading = 'eager'; }));
  await expect.poll(() => page.locator('img').evaluateAll(images => images.every(el => {
    const img = el as HTMLImageElement;
    return img.complete && img.naturalWidth > 0;
  }))).toBe(true);
  for (const width of [320, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  }
});
