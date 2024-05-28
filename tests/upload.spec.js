import{test,expect} from '@playwright/test'


test('uploadfile',async({page})=>{


await page.goto('https://omayo.blogspot.com/')
await page.locator('#uploadfile').setInputFiles("C:\\Users\\lenovo R3\\Downloads\\demoxl.xlsx")
await page.waitForTimeout(3000)
await page.locator('#uploadfile').setInputFiles([])
await page.waitForTimeout(3000)


})