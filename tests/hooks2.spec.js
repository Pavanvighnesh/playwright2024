const {test,expect} = require('@playwright/test')

test.beforeAll(async({page})=>{

    

await page.goto('https://www.saucedemo.com/')

const user=await page.$('#user-name')
await user.fill('standard_user')
await page.waitForTimeout(3000)
await page.locator('id=password').fill('secret_sauce')
//await page.click("//input[@value='Login']")
await page.click("[value=Login]")
const title=await expect(page).toHaveTitle('Swag Labs')


});

test('Add To Cart', async({page})=>{

    await page.waitForTimeout(5000)
    await page.locator('(//button[text()="Add to cart"])[1]').click()
    
    await page.locator("[data-test='shopping-cart-badge']").click()

    await expect(page.locator("//span[text()='Your Cart']")).toBeVisible()


    
    });

test('logout',async({page})=>{

    await page.waitForTimeout(4000)

await page.locator('id=react-burger-menu-btn').click()
await page.locator('[data-test="logout-sidebar-link"]').click();

        
    });


