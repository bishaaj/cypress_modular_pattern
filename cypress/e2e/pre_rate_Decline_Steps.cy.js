import {PreRateDeclinePage} from "../page/pre_rate_decline_page"

const preRateDeclinePage = new PreRateDeclinePage()


it('Create Pre-Rate Decline rules with Email condition', () => {
    preRateDeclinePage.verify_that_rules_engine_title_is_display()
    preRateDeclinePage.login_into_ui_tenant_from_developers_login()
    preRateDeclinePage.click_on_add_rule_button_to_create_new_rule()
    preRateDeclinePage.select_ukMotors_from_question_set_dropdown()
    preRateDeclinePage.select_pre_rate_decline_from_rule_type_dropdown()
    preRateDeclinePage.set_pre_rate_decline_rule_name()
    preRateDeclinePage.set_pre_rate_decline_reason()
    preRateDeclinePage.set_email_rule_condition_from_conditional_builder_Field1()
    preRateDeclinePage.set_rule_condition_from_conditional_builder_Field2()
    preRateDeclinePage.set_pre_rate_decline_rule_condition_answer()
    preRateDeclinePage.click_on_save_rule_button()

})

// it('Create Pre-Rate Decline rules with Address Line 1 condition', () => {
//     preRateDeclinePage.verify_that_rules_engine_title_is_display()
//     preRateDeclinePage.login_into_ui_tenant_from_developers_login()
//     preRateDeclinePage.click_on_add_rule_button_to_create_new_rule()
//     preRateDeclinePage.select_ukMotors_from_question_set_dropdown()
//     preRateDeclinePage.select_pre_rate_decline_from_rule_type_dropdown()
//     preRateDeclinePage.set_pre_rate_decline_rule_name()
//     preRateDeclinePage.set_pre_rate_decline_reason()
//     preRateDeclinePage.set_address_line_1_rule_condition_from_conditional_builder_Field1()
//     preRateDeclinePage.set_rule_condition_from_conditional_builder_Field2()
//     preRateDeclinePage.set_pre_rate_decline_rule_condition_answer_for_address()
//     preRateDeclinePage.click_on_save_rule_button()

// })