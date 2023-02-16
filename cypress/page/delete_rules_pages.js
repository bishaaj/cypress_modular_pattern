import { commons } from "../utils/commons";
import { data } from "../utils/data";

export class DeleteRulePage {

    verify_that_rules_engine_title_is_display() {
        commons.tenant_title()
    }

    login_into_ui_tenant_from_developers_login() {
        commons.tenant_login()
    }

    click_on_one_of_the_rule_from_the_rule_table() {
    //    commons.select_rule_from_the_table()

    cy.wait(300)

    //cy.get('[data-test="row"]') //(row)
    cy.get('[class^=DataGrid_module_row]')
  //  .contains('TA_INSTALMENT_PLAN_UKHouse_IAMv1_638112886079943261')
     .eq(3)
    // .children()
    // .first()
    // .next()
    // .next()
    // .next()
   // .should('contain', 'edit')
    .find('[data-test="dropdownToggle"]')
    .click();

    cy.get('[data-test^=action-button-delete]') //(delBtn)    
     .should('have.text', 'Delete')
     .click();
    }
}