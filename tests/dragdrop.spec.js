import{test} from '@playwright/test'


test('dragdrop',async({page})=>{


    await page.goto("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")

    // await page.waitForTimeout(3000)

    const rome= await page.locator('#box1')

    //  await page.waitForTimeout(3000)

    // await page.mouse.down()
    // await page.waitForTimeout(3000)

    const itly= await page.locator('#box101')
    // await page.waitForTimeout(3000)

    // await page.mouse.up()
    // await page.waitForTimeout(3000)

    await rome.dragTo(itly)

})