/// <reference types = "Cypress" />
import homePage from './pageObjects/homePage'
import products from './pageObjects/products'
import checkout from './pageObjects/checkout'

describe("My Test", function(){

    
    before(function(){
cy.fixture('example').then(function(data) {
this.data=data
})
    })


    it('test', function(){
        const HomePage = new homePage()
        const Products = new products()
        const Checkout = new checkout()
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        HomePage.getEditBox().type(this.data.name)
        HomePage.getGender().select(this.data.gender)
        HomePage.getTwoWayDataBinding().should('have.value', this.data.name)
        HomePage.getEditBox().should('have.attr', 'minlength', '2')
       HomePage.getEnterpreneaurRadioButton().should('be.disabled')
        //You can use cy.pause or debug after method to pause and test
        HomePage.getShopTab().click()
    var Array1 = this.data.productName
    Array1.forEach(function(element){
cy.selectProduct(element)
    })

    var sum =0
Products.clickOnCheckOutButton().click()
Checkout.totalamount().each(($el, index)=>{
const actualText = $el.text()
var result = actualText.split(" ")
result = result[1].trim()
sum+=Number(result)

}).then(function(){
    cy.log(sum)
})

cy.get('tr td:nth-child(5) strong').then(function(element){
const totalAmount = element.text()
var amount = totalAmount.split(" ")[1].trim()
amount =Number(amount)
expect(sum).to.equal(amount)
})
    Checkout.clickOnCheckOutButtonOnCheckoutPage().click()
    //to apply wait on specific object
    //Cypress.config('defaultTimeout',8000)
    Checkout.typeInCountry().type('India')
    Checkout.selectCountry().click()
    Checkout.selectCheckBoxforAgree().click({force: true})
    Checkout.clickOnPurchase().click()

  
    Checkout.getAlert().then(function(element){
        const amount = element.text()
       expect(amount.includes("Success")).to.be.true

        }
    )})
})