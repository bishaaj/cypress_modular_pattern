import { PreAppliedDiscretionaryDiscount } from "../page/pre_applied_discretionary_discount_page";
const preAppliedDiscretionaryDiscountPage = new PreAppliedDiscretionaryDiscount()


it('Create Pre-Applied Discretionary Discount rules with Email condition', () => {
    preAppliedDiscretionaryDiscountPage.verify_that_rules_engine_title_is_display()
    preAppliedDiscretionaryDiscountPage.login_into_ui_tenant_from_developers_login()
    preAppliedDiscretionaryDiscountPage.click_on_add_rule_button_to_create_new_rule()
    preAppliedDiscretionaryDiscountPage.select_ukMotors_from_question_set_dropdown()
    preAppliedDiscretionaryDiscountPage.select_pre_applied_discretionary_discount_from_rule_type_dropdown()
    preAppliedDiscretionaryDiscountPage.set_pre_applied_discretionary_discount_rule_name()
    preAppliedDiscretionaryDiscountPage.set_pre_applied_discretionary_discount_value()
    preAppliedDiscretionaryDiscountPage.set_email_rule_condition_from_conditional_builder_Field1()
    preAppliedDiscretionaryDiscountPage.set_rule_condition_from_conditional_builder_Field2()
    preAppliedDiscretionaryDiscountPage.set_pre_applied_discretionary_discount_rule_condition_answer()
    preAppliedDiscretionaryDiscountPage.click_on_save_rule_button()

})