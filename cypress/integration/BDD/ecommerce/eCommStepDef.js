import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import homePage from '../../../support/pageObjects/homePage'
import products from '../../../support/pageObjects/products'
import checkout from '../../../support/pageObjects/checkout'
const HomePage = new homePage()
const Products = new products()
const Checkout = new checkout()

Given('I open ECommerce Page', function(){
 cy.visit(Cypress.env('url')+ "/angularpractice/")
}
)
When('I add items to Cart', function() {
    HomePage.getShopTab().click()
    var Array1 = this.data.productName
    Array1.forEach(function(element){
cy.selectProduct(element)
    })

    var sum =0
Products.clickOnCheckOutButton().click()
})

And ('Validate the total prices', function() {
    
    var sum=0
    cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {


const amount=$el.text()
        var res= amount.split(" ")
       res= res[1].trim()
       sum= Number(sum)+Number(res)
       
       }).then(function()
       {
           cy.log(sum)
       })
       cy.get('h3 strong').then(function(element)
       {
           const amount=element.text()
           var res= amount.split(" ")
          var total= res[1].trim()
          expect(Number(total)).to.equal(sum)
       
       }) 
    })

Then ('select the country submit and verify Thankyou',function() {
Checkout.clickOnCheckOutButtonOnCheckoutPage().click()
    Checkout.typeInCountry().type('India')
    Checkout.selectCountry().click()
    Checkout.selectCheckBoxforAgree().click({force: true})
    Checkout.clickOnPurchase().click()

  
    Checkout.getAlert().then(function(element){
        const amount = element.text()
       expect(amount.includes("Success")).to.be.true
})
})

When ('I fill the form details', function (){
    HomePage.getEditBox().type(this.data.name)
    HomePage.getGender().select(this.data.gender)
})

Then ('validate the forms behaviour', function(){
    HomePage.getTwoWayDataBinding().should('have.value', this.data.name)
    HomePage.getEditBox().should('have.attr', 'minlength', '2')
    HomePage.getEnterpreneaurRadioButton().should('be.disabled')
})
    And ('select the Shop Page', function(){
    HomePage.getShopTab().click()
    })