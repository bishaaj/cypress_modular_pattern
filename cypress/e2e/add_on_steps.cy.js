import { AddOnPage } from "../page/add_on_page";
const addOnPage = new AddOnPage()

it('Create Add-On rules with Email condition', () => {
    addOnPage.verify_that_rules_engine_title_is_display()
    addOnPage.login_into_ui_tenant_from_developers_login()
    addOnPage.click_on_add_rule_button_to_create_new_rule()
    addOnPage.select_ukMotors_from_question_set_dropdown()
    addOnPage.select_add_on_from_rule_type_dropdown()
    addOnPage.set_add_on_rule_name()
    addOnPage.select_add_on_discount_from_dropdown()
    addOnPage.set_email_rule_condition_from_conditional_builder_Field1()
    addOnPage.set_rule_condition_from_conditional_builder_Field2()
    addOnPage.set_add_on_rule_condition_answer()
    addOnPage.click_on_save_rule_button()

})