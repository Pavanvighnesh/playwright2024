import{test,expect} from '@playwright/test'

test('child window',async({browser})=>{

 const context=     await browser.newContext()
 const page= await context.newPage()
    

  await page.goto('https://www.hyrtutorials.com/p/window-handles-practice.html')

  

   expect( await page.screenshot()).toMatchSnapshot('screenshot.png')
 

  await page.locator("//button[@id='newTabBtn']").click()
  const page2=await context.waitForEvent('page')
  
  await page2.click("//button[@id='alertBox']")
  
})

test('child window two',async({browser})=>{

    const context=     await browser.newContext()
    const page= await context.newPage()
       
   
     await page.goto('https://www.hyrtutorials.com/p/window-handles-practice.html')

    
   
     await page.locator("//button[@id='newTabBtn']").click()
     const page2=await context.waitForEvent('page')
     
     await page2.click("//button[@id='alertBox']")
     
   })

