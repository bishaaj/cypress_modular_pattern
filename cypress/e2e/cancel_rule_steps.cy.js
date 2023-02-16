import { CancelRule } from "../page/cancel_rule_page";
import { PreRateDeclinePage } from "../page/pre_rate_decline_page";
const cancelRule = new CancelRule()
const preRateDeclinePage = new PreRateDeclinePage()

it('Verify that Cancel rule button is selctable', () => {
    cancelRule.verify_that_rules_engine_title_is_display()
    cancelRule.login_into_ui_tenant_from_developers_login()
    cancelRule.click_on_add_rule_button_to_create_new_rule()
    cancelRule.click_on_cancel_rule_button()
})

it('Verify that you are able to Cancel rule before creating it', () => {
    cancelRule.verify_that_rules_engine_title_is_display()
    cancelRule.login_into_ui_tenant_from_developers_login()
    cancelRule.click_on_add_rule_button_to_create_new_rule()
    preRateDeclinePage.select_ukMotors_from_question_set_dropdown()
    preRateDeclinePage.select_pre_rate_decline_from_rule_type_dropdown()
    preRateDeclinePage.set_pre_rate_decline_rule_name()
    preRateDeclinePage.set_pre_rate_decline_reason()
    preRateDeclinePage.set_email_rule_condition_from_conditional_builder_Field1()
    preRateDeclinePage.set_rule_condition_from_conditional_builder_Field2()
    preRateDeclinePage.set_pre_rate_decline_rule_condition_answer()
    cancelRule.click_on_cancel_rule_button()
})