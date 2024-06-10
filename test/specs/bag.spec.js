import {expect, browser, $} from '@wdio/globals'
import bagPage from "../pageobjects/bag.page.js"
import cartPage from '../pageobjects/cart.page.js'
import productPage from '../pageobjects/product.page.js'
import wishlistPage from '../pageobjects/wishlist.page.js'

describe('FITUR PRODUCT DETAIL', function(){

    // ini before
    beforeEach('User must have selected a product', async function(){
        await bagPage.open()                   // Buka web BTV
        await bagPage.selectBagSection()       // Pilih kategori tas
        await bagPage.selectCarnivalIvoryBag() // Pilih tas
    })

    it('getText Product', async function(){
        await productPage.openProduct()
        
        const judulText = await productPage.getProductTitle()
        console.log('### ini produknya ##', judulText)
        await expect(judulText).toBe('The Carnival Bag')
    })

    it('User Change Colour to Mint Colourblock', async function(){
        await productPage.openProduct()
        await productPage.changeColour()
        
        await expect(productPage.themeChangeColourInput).toBeChecked()
    })

    it('User Select Washcare', async function(){
        await productPage.openProduct()
        await productPage.selectWashcare()
        await expect(productPage.detailWashcareInput).toHaveText(
            expect.stringContaining('Spot cleaning with gentle soap'))
    })

    it('User Select Product Measurement', async function(){
        await productPage.openProduct()
        await productPage.selectProductMeasurement()
        await expect(productPage.productMeasurementInput).toHaveText(
            expect.stringContaining('Slight stitching differences can be expected')
        )
    })

    it('User Saved Product', async function(){
        await productPage.openProduct()
        await productPage.saveProduct()
        await expect(productPage.savedButton).toHaveText('Saved')
    })

    it('User Check Saved Product', async function() {
        await productPage.openProduct()
        await wishlistPage.openWishlist()
        await expect(browser).toHaveUrl('https://beyondthevines.co.id/pages/swym-wishlist?')
    })

    it('User Add to Bag', async function(){
        await productPage.openProduct()
        await productPage.addToBag()
        await expect(productPage.popUpAddBag).toHaveText('Your shipping’s on us!')
    })

    it('Go To Cart with 2 Products', async function(){
        await productPage.openProduct()
        await productPage.addToBag()
        await cartPage.goToCartButton.waitForDisplayed({timeout:3000})
        await cartPage.goToCart()
        await expect(browser).toHaveUrl('https://beyondthevines.co.id/cart')
    })

    it('User Changes Pair it With', async function(){
        await productPage.addChangesPairItWith()
        await expect(productPage.cartItemTitle).toHaveText('Twill Logo Cap')
    })

    
    it('User Changes Viewport', async function(){
        await productPage.changeViewport()
        await expect(productPage.viewportInput).toBeDisplayed()

    })
})
