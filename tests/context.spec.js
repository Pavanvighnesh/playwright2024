import {test} from '@playwright/test'


test("browser", async({browser,page})=>{

    
    // const context= await browser.newContext()
    // const page=await context.newPage()
    await page.goto('https://www.saucedemo.com/')
    const user=await page.getByPlaceholder('Username')
    await page.pause()
await user.fill('standard_user')
await page.waitForTimeout(3000)
await page.locator('id=password').fill('secret_sauc')
//await page.click("//input[@value='Login']")
await page.click("[value=Login]")

const text=await page.locator("//h3[@data-test='error']").textContent()
console.log(text)


    
})

test.only('omayo',async({page})=>{
    

    await page.goto('https://omayo.blogspot.com/')
    
    const dropdown=await page.locator('.combobox')
    
    //await page.pause()
    await dropdown.selectOption('doc 4')
    await page.waitForTimeout(3000)
    await dropdown.selectOption('doc 3')
    await page.waitForTimeout(3000)



})