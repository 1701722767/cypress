/// <reference types="cypress" />

let user = "test"+Date.now();
let email = "test1"+Date.now()+"@gmail.com";
let password = "12345678";

describe('Scrap site', () => {
  beforeEach(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.window().then((win) => {
      win.sessionStorage.clear()
    });
    cy.visit('https://calzado-galileo.com/')
  })

  it('Register', () => {
    cy.get('.xoo-el-action-sc').click();
    cy.get('.xoo-el-reg-tgr').click();
    cy.get('.xoo_el_reg_username_cont > .xoo-aff-input-group > .xoo-aff-required').clear();
    cy.get('.xoo_el_reg_username_cont > .xoo-aff-input-group > .xoo-aff-required').type(user);
    cy.get('.xoo-aff-cont-email > .xoo-aff-input-group > .xoo-aff-required').clear();
    cy.get('.xoo-aff-cont-email > .xoo-aff-input-group > .xoo-aff-required').type(email);
    cy.get('.xoo_el_reg_fname_cont > .xoo-aff-input-group > .xoo-aff-required').clear();
    cy.get('.xoo_el_reg_fname_cont > .xoo-aff-input-group > .xoo-aff-required').type('pepito');
    cy.get('.xoo_el_reg_lname_cont > .xoo-aff-input-group > .xoo-aff-required').clear();
    cy.get('.xoo_el_reg_lname_cont > .xoo-aff-input-group > .xoo-aff-required').type('perez');
    cy.get('.xoo_el_reg_pass_cont > .xoo-aff-input-group > .xoo-aff-required').clear();
    cy.get('.xoo_el_reg_pass_cont > .xoo-aff-input-group > .xoo-aff-required').type(password);
    cy.get('.xoo_el_reg_pass_again_cont > .xoo-aff-input-group > .xoo-aff-required').clear();
    cy.get('.xoo_el_reg_pass_again_cont > .xoo-aff-input-group > .xoo-aff-required').type(password);
    cy.get('label > .xoo-aff-required').check();
    cy.get('.xoo-el-section.xoo-el-active > .xoo-el-fields > .xoo-el-action-form > .button').click();
    cy.wait(5000);
  })

  it('Buy', () => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.window().then((win) => {
      win.sessionStorage.clear()
    });
    cy.get('.xoo-el-action-sc').click();
    cy.get('.xoo-el-form-container').click();
    cy.get('.xoo-el-username_cont > .xoo-aff-input-group > .xoo-aff-required').click();
    cy.get('.xoo-el-username_cont > .xoo-aff-input-group > .xoo-aff-required').clear();
    cy.get('.xoo-el-username_cont > .xoo-aff-input-group > .xoo-aff-required').type(email);
    cy.get('.xoo-el-password_cont > .xoo-aff-input-group > .xoo-aff-required').type(password);
    cy.get('.xoo-el-section.xoo-el-active > .xoo-el-fields > .xoo-el-action-form > .button').click();
    cy.visit('https://calzado-galileo.com/tienda-oficial/');
    cy.get('.post-13217 > .astra-shop-summary-wrap > .ast-loop-product__link > .woocommerce-loop-product__title').click({timeout:3000});
    cy.wait(3000);
    cy.get('.button-variable-item-37').click({});
    cy.get('.single_add_to_cart_button').click();
    cy.get('.xoo-cp-btn-ch').click();
    cy.get('#billing_first_name').click();
    cy.get('#billing_first_name').clear();
    cy.wait(3000);
    cy.get('#billing_first_name').type('pepito');
    cy.get('#billing_apellidos').clear();
    cy.get('#billing_apellidos').type('perez');
    cy.get('#billing_documento').clear();
    cy.get('#billing_documento').type('123435345');
    cy.get('#billing_phone').clear();
    cy.get('#billing_phone').type('12244353464');
    cy.get('#billing_email').clear();
    cy.get('#billing_email').type('test@gmail.com');
    cy.get('#billing_address_1').clear();
    cy.get('#billing_address_1').type('Cra 4 # 45 - 89');
    cy.wait(3000);
    cy.get('#billing_city').clear();
    cy.get('#billing_city').type('Caldas');
    cy.get('#billing_departamento').clear();
    cy.get('#billing_departamento').type('Bolivia');
    cy.get('#wpmc-next').click();
    cy.wait(3000);
    cy.get('#wpmc-next').click();
    cy.wait(3000);
  })

  it('Filter', () => {
    cy.visit('https://calzado-galileo.com/tienda-oficial/');
    cy.get('.bapf_body > select').select(['46']);
    cy.get('.search-field').type('cuero');
    cy.get('.search-submit').click();
    cy.wait(5000);
  })
})
