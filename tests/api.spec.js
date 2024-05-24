import{test,expect} from  '@playwright/test'


test('api testing',async({page})=>{

await page.goto('https://conduit.bondaracademy.com/')

await expect( page.locator('.navbar-brand')).toHaveText('conduit')

})