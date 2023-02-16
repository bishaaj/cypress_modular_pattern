import { FeePage } from "../page/fee_page";
const feePage = new FeePage()

it('Create Fee rules with Email condition', () => {
    feePage.verify_that_rules_engine_title_is_display()
    feePage.login_into_ui_tenant_from_developers_login()
    feePage.click_on_add_rule_button_to_create_new_rule()
    feePage.select_ukMotors_from_question_set_dropdown()
    feePage.select_fee_from_rule_type_dropdown()
    feePage.set_fee_rule_name()
    feePage.select_fee_amount_from_dropdown()
    feePage.set_email_rule_condition_from_conditional_builder_Field1()
    feePage.set_rule_condition_from_conditional_builder_Field2()
    feePage.set_fee_rule_condition_answer()
    feePage.click_on_save_rule_button()
    
})