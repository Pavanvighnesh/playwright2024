import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/search?q=omayo+blogspot+.com&oq=omayo+blogspot+.com&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDg0NjhqMGoyqAIAsAIB&sourceid=chrome&ie=UTF-8');
  await page.getByRole('link', { name: 'omayo (QAFox.com) omayo (' }).click();
  await page.locator('#multiselect1').selectOption('swiftx');
  await page.locator('#multiselect1').selectOption('Hyundaix');
  await page.locator('#multiselect1').selectOption('audix');
  await page.locator('#drop1').selectOption('ghi');
  await page.locator('#drop1').selectOption('mno');
  await page.locator('#link1').click();
  await page.goto('http://omayo.blogspot.com/');
  await page.locator('#HTML2').getByRole('textbox').click();
  await page.locator('#HTML2').getByRole('textbox').fill('');
  await page.getByText('The cat was playing in the').click();
  await page.getByText('The cat was playing in the').click();
  await page.getByText('The cat was playing in the').fill('hiii\n');
  await page.locator('#HTML11 div').filter({ hasText: 'The cat was playing in the' }).click();
  await page.getByRole('cell', { name: 'Kishore' }).click();
  await page.getByRole('cell', { name: 'Pune' }).click();
  await page.getByRole('cell', { name: 'Praveen' }).click();
  await page.locator('#HTML31 input[type="text"]').click();
  await page.locator('#HTML31 input[type="text"]').fill('arnmootori');
  await page.locator('#HTML31 input[type="password"]').click();
  await page.locator('#HTML31 input[type="password"]').fill('1234');
  await page.getByRole('button', { name: 'LogIn', exact: true }).click();
  await page.getByRole('button', { name: 'Double click Here' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Double click Here' }).dblclick();
  await page.getByRole('button', { name: 'Check this' }).click();
  await page.locator('#dte').check();
  await page.locator('#cssmenu').getByRole('link', { name: 'Home' }).click();
});