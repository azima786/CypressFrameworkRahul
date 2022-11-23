class homePage
{
getEditBox(){
    return cy.get('.form-group input[name="name"]')
}
getTwoWayDataBinding(){
    return cy.get('.ng-pristine:nth-child(1)')
}
getGender(){
    return cy.get('select')
}

getEnterpreneaurRadioButton(){
    return cy.get('#inlineRadio3')
}
getShopTab(){
    return cy.get('.nav-item:nth-child(2)')
}
}

export default homePage