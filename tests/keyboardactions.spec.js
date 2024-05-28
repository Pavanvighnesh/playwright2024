import{test,expect} from '@playwright/test'


test('keyboard_Actions',async({page})=>{


await page.goto('https://omayo.blogspot.com/')
const textarea=await  page.locator('(//textarea)[2]')
const textarea1=await page.locator('(//textarea)[1]')
await textarea.click()

await page.waitForTimeout(3000)

//ctrl  + A
await page.keyboard.press('Control+A')

//ctrl  + C
await page.keyboard.press('Control+C')

//shift + tab
await page.keyboard.press('Shift+Tab')

//ctrl  + V

await page.keyboard.press('Control+V')
await expect(textarea).toHaveText(/The cat was playing in the garden./)



})