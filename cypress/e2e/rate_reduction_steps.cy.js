import { RateReductionPage } from "../page/rate_reduction_page";
const rateReductionPage = new RateReductionPage()

it('Create Rate Reduction rules with Email condition', () => {
    rateReductionPage.verify_that_rules_engine_title_is_display()
    rateReductionPage.login_into_ui_tenant_from_developers_login()
    rateReductionPage.click_on_add_rule_button_to_create_new_rule()
    rateReductionPage.select_ukMotors_from_question_set_dropdown()
    rateReductionPage.select_rate_reduction_from_rule_type_dropdown()
    rateReductionPage.set_rate_reduction_rule_name()
    rateReductionPage.enter_rate_reduction_percentage_amount()
    rateReductionPage.enter_rate_reduction_override_code()
    rateReductionPage.set_email_rule_condition_from_conditional_builder_Field1()
    rateReductionPage.set_rule_condition_from_conditional_builder_Field2()
    rateReductionPage.set_rate_reduction_rule_condition_answer()
    rateReductionPage.click_on_save_rule_button()



})