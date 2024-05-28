import {test,expect} from '@playwright/test'

test('alerts',async({page})=>{

await page.goto('https://omayo.blogspot.com/')

page.on('dialog', async dia=>{

    const message=await dia.message()
    console.log(await dia.type())
    console.log(message)
    await dia.accept()

})


await page.click('#prompt')

})

test('mousehover',async({page})=>{

await page.goto('https://omayo.blogspot.com/')

page.on('dialog',async dialog=>{

    await dialog.accept()
    console.log(await dialog.type())
})

await page.hover('#blogsmenu')
await page.waitForTimeout(4000)

await page.dblclick("//button[contains(text(),'Double')]")
await page.waitForTimeout(3000)

})

test.only('rightclick',async({page})=>{


    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')

    await page.locator("//span[contains(text(),'right')]").click({button:"right"})
    await page.waitForTimeout(4000)
    
})