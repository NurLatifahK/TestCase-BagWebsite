import {browser, $} from '@wdio/globals'

class BagPage {
    // element locator
    get bagSource() { return $('//*[@id="shopify-section-template--21404074443031__featured-promotions-1"]/section/div/figure[2]/div/a')}
    get carnivalIvory() { return $('//*[@id="shopify-section-template--21404074344727__main"]/section/div/div[4]/div/div[1]/div/div/div[3]')}
    
    // page actions
    async open() {
        await browser.url('https://beyondthevines.co.id/')
    }

    async selectBagSection() {
        await this.bagSource.click()
        await browser.url('https://beyondthevines.co.id/collections/bags-new-in')
    }

    async selectCarnivalIvoryBag() {
        await this.carnivalIvory.click()
        await browser.url('https://beyondthevines.co.id/products/the-carnival-bag?variant=47260687401239')
    }
}

export default new BagPage();
