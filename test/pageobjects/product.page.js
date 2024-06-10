import {browser, $} from '@wdio/globals'

class ProductPage {
    // element locator
    get productTitle() { return $('.product_name.everett-light-r.m-0-auto')}
    get themeChangeColour() { return $('[data-color="Mint Colourblock"]')}
    get themeChangeColourInput() { return $('input[aria-label="Mint Colourblock"]')}
    get detailWashcare() { return $('[data-mce-href="#tab2"]')}
    get detailWashcareInput() { return $('[data-mce-fragment="1"]')}
    get productMeasurement() { return $('[data-mce-href="#tab3"]')}
    get productMeasurementInput() { return $('#tab3')}
    get savedButton() { return $('//*[@id="product-form-8837452267799"]/div[3]/div/button/span')}
    get addToBagButton() { return $('//div[@class="purchase-details__buttons purchase-details__spb--false"]')}
    get popUpAddBag() { return $('//*[@id="shopify-section-header"]/header[2]/div/div[2]/div/div[3]/ul/li[1]/div/div[1]/div/span')}
    get flickity() { return $('//*[@id="shopify-section-template--21404074967319__main"]/section/div/section/div/div/div[2]/div[6]/div[3]/div/button[2]')}
    get addToCart() { return $('.jsc-upsell-grid-carousel.is-selected .jsc-upsell-atc')}
    get cartbutton() { return $('.header .svg_minicart')}
    get cartItemTitle() { return $('.menu > .jsc-cart-desk > .cart_content.animated.fadeIn.push-top-82 .item_title h2')}
    get viewport() { return $('//div[@class="thumb_variant_img gallery-cell "][3]')}
    get viewport2() { return $('//div[@class="thumb_variant_img gallery-cell "][4]')}
    get viewportInput() { return $('#prod_img_container > div > div > div:nth-child(5) > a > div > span > img.jsc-test.blur-up.lazyloaded')}

    // page actions
    async openProduct() {
        await browser.url('https://beyondthevines.co.id/products/the-carnival-bag?variant=47260687401239')
    }

    async getProductTitle() {
        return await this.productTitle.getText()
    }

    async changeColour() {
        await this.themeChangeColour.click()
    }

    async selectWashcare() {
        await this.detailWashcare.click()
        }

    async selectProductMeasurement() {
        await this.productMeasurement.click()
        }

    async saveProduct() {
        await this.savedButton.click()
       }

    async addToBag() {
        await this.addToBagButton.click()
        }

    async addChangesPairItWith() {
        await this.flickity.click()

        await this.addToCart.waitForClickable({timeout:5000})
        await this.addToCart.click()
        
        await this.cartbutton.click()
    }

    async changeViewport(){
        await this.viewport.click()
        await this.viewport2.click()

    }
}

export default new ProductPage()
