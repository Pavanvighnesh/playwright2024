import { Login } from '../POI_objects/login';
import {test} from '@playwright/test' 
import { Homepage } from '../POI_objects/homepage';

test('login',async({page})=>{


    //login with credentials

    const login=new Login(page);

    await login.gotoLoginpage()

    await login.loginwithcredentials('error_user','secret_sauce')

    await page.waitForTimeout(3000)

    const homepage=new Homepage(page)

    await homepage.selectingitems()

    await page.waitForTimeout(3000)

    
})


    



    

    


