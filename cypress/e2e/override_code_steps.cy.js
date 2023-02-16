import { OverrideCodePage } from "../page/override_code_page";
const overrideCodePage = new OverrideCodePage()

it('Create Override Code rules with Email condition', () => {
    overrideCodePage.verify_that_rules_engine_title_is_display()
    overrideCodePage.login_into_ui_tenant_from_developers_login()
    overrideCodePage.click_on_add_rule_button_to_create_new_rule()
    overrideCodePage.select_ukMotors_from_question_set_dropdown()
    overrideCodePage.select_override_code_from_rule_type_dropdown()
    overrideCodePage.set_override_code_rule_name()
    overrideCodePage.set_override_code_value()
    overrideCodePage.set_email_rule_condition_from_conditional_builder_Field1()
    overrideCodePage.set_rule_condition_from_conditional_builder_Field2()
    overrideCodePage.set_override_code_rule_condition_answer()
    overrideCodePage.click_on_save_rule_button()

})