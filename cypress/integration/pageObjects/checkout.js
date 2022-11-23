class checkout{
clickOnCheckOutButtonOnCheckoutPage(){
    return cy.contains('Checkout')
}

selectCountry(){
    return cy.get('.suggestions > ul > li > a')
}

typeInCountry(){
    return cy.get('#country')
}

selectCheckBoxforAgree(){
    return cy.get('#checkbox2')
}

clickOnPurchase(){
    return cy.get('input[type="submit"]')
}

getAlert(){
    return cy.get('.alert')
}

totalamount(){
    return cy.get('tr td:nth-child(4) strong')
}
}


export default checkout