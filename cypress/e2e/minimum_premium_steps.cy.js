import { MinimumPremiumPage } from "../page/minimum_Premium_Page";

const minimumPremiumPage = new MinimumPremiumPage()

it('Create Minimum Premium rules with Email condition', () => {
    minimumPremiumPage.verify_that_rules_engine_title_is_display()
    minimumPremiumPage.login_into_ui_tenant_from_developers_login()
    minimumPremiumPage.click_on_add_rule_button_to_create_new_rule()
    minimumPremiumPage.select_ukMotors_from_question_set_dropdown()
    minimumPremiumPage.select_minimum_premium_from_rule_type_dropdown()
    minimumPremiumPage.set_minimum_premium_rule_name()
    minimumPremiumPage.set_minimum_premium_value()
    minimumPremiumPage.set_email_rule_condition_from_conditional_builder_Field1()
    minimumPremiumPage.set_rule_condition_from_conditional_builder_Field2()
    minimumPremiumPage.set_pre_rate_decline_rule_condition_answer()
    minimumPremiumPage.click_on_save_rule_button()
})

// it('Create Minimum Premium rules with Address Line 1 condition', () => {
//     minimumPremiumPage.verify_that_rules_engine_title_is_display()
//     minimumPremiumPage.login_into_ui_tenant_from_developers_login()
//     minimumPremiumPage.click_on_add_rule_button_to_create_new_rule()
//     minimumPremiumPage.select_ukMotors_from_question_set_dropdown()
//     minimumPremiumPage.select_minimum_premium_from_rule_type_dropdown()
//     minimumPremiumPage.set_minimum_premium_rule_name()
//     minimumPremiumPage.set_minimum_premium_value()
//     minimumPremiumPage.set_address_line_1_rule_condition_from_conditional_builder_Field1()
//     minimumPremiumPage.set_rule_condition_from_conditional_builder_Field2()
//     minimumPremiumPage.set_pre_rate_decline_rule_condition_answer_for_address()
//     minimumPremiumPage.click_on_save_rule_button()
// })


