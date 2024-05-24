exports.Homepage=

class Homepage{

    constructor(page){

        this.page=page
        //this.additem1="(//button[text()='Add to cart'])[1]"
        this.additem2="(//button[text()='Add to cart'])"
        this.cartitems="[data-test ='shopping-cart-link']"
        
    }

    async selectingitems(){

        //await this.page.locator(this.additem1).click()

        const items=await this.page.$$(this.additem2)

        for(const item of items){

            await item.click()
        }
        
        await this.page.locator(this.cartitems).click()


    }
}
