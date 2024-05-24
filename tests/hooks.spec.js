

const {test,expect} = require('@playwright/test')

test.only('login',async({page})=>{

    

await page.goto('https://www.saucedemo.com/')

const user=await page.getByPlaceholder('Username')
await user.fill('standard_user')
await page.waitForTimeout(3000)
await page.locator('id=password').fill('secret_sauce')
//await page.click("//input[@value='Login']")
await page.click("[value=Login]")
const title=await expect.soft(page).toHaveTitle('Swag Labs')
await page.pause()
const button=await page.locator("//button[@id='add-to-cart-sauce-labs-backpack']")

await expect(button).toBeVisible()

});

test('Add To Cart', async({page})=>{

    

    await page.goto('https://www.saucedemo.com/')
    
    const user=await page.$('#user-name')
    await user.fill('error_user')
    
    await page.locator('id=password').fill('secret_sauce')
    //await page.click("//input[@value='Login']")
    await page.click("[value=Login]")
    const title=await expect(page).toHaveTitle('Swag Labs')

    await page.waitForTimeout(3000)
    const carts=await page.$$('//button[text()="Add to cart"]')

    for(const cart of carts){

        await cart.click()
        await page.waitForTimeout(3000)
    }
    
    await page.locator("[data-test='shopping-cart-badge']").click()

    await expect(page.locator("//span[text()='Your Cart']")).toBeVisible()
    await page.pause()

    
    });

test('logout',async({page})=>{


    

await page.goto('https://www.saucedemo.com/')

const user=await page.$('#user-name')
await user.fill('standard_user')
await page.waitForTimeout(3000)
await page.locator('id=password').fill('secret_sauce')
//await page.click("//input[@value='Login']")
await page.click("[value=Login]")
const title=await expect(page).toHaveTitle('Swag Labs')

await page.locator('id=react-burger-menu-btn').click()
await page.locator('[data-test="logout-sidebar-link"]').click();
await page.pause()
        
    });



// test.only('google',async({page})=>{

//     await page.goto('https://www.google.com/')
//     await page.pause()
//     await page.waitForURL('https://www.google.com/')
    
// })