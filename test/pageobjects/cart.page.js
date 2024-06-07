import {$} from '@wdio/globals'

class CartPage {
    // element locator
    get goToCartButton() { return $('//*[@id="shopify-section-header"]/header[2]/div/div[2]/div/div[3]/ul/li[1]/div/form/button')}

    // page actions
    async goToCart() {
        await this.goToCartButton.click()
    }
}

export default new CartPage()