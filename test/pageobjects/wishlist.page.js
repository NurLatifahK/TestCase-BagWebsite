import {$} from '@wdio/globals'

class WishlistPage {
    // element locators
    get wishlistIcon() { return $('//*[@id="shopify-section-header"]/header[2]/div/div[2]/div/div[3]/ul/li[2]/a/i')}

    // page actions
    async openWishlist() {
        await this.wishlistIcon.click();
    }
}

export default new WishlistPage();
