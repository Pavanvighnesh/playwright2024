
exports.Login =
class Login {

    constructor(page){

        this.page=page
        this.username=page.locator("#user-name")
        this.password="#password"
        this.loginbutton="#login-button"
    }

    async gotoLoginpage(){

        await this.page.goto('https://www.saucedemo.com/')
    }

    async loginwithcredentials(usrname,pw){
        await this.username.fill(usrname)
        await this.page.locator(this.password).fill(pw)
        await this.page.locator(this.loginbutton).click()
    }
    
}