class products{
getProductsTitle(){
    return cy.get('h4.card-title')
}
addToCartButton(){
    return cy.get('button.btn.btn-info')
}

clickOnCheckOutButton(){
    return cy.get('[class= "nav-link btn btn-primary"]')
}


}

export default products