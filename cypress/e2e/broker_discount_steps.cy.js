import { BrokerDiscountPage } from "../page/broker_discount_page";
const brokerDiscountPage = new BrokerDiscountPage()

it('Create Broker Discount rules with Email condition', () => {
    brokerDiscountPage.verify_that_rules_engine_title_is_display()
    brokerDiscountPage.login_into_ui_tenant_from_developers_login()
    brokerDiscountPage.click_on_add_rule_button_to_create_new_rule()
    brokerDiscountPage.select_ukMotors_from_question_set_dropdown()
    brokerDiscountPage.select_broker_discount_from_rule_type_dropdown()
    brokerDiscountPage.set_broker_discount_rule_name()
    brokerDiscountPage.select_broker_discount_amount_from_dropdown()
    brokerDiscountPage.enter_broker_discount_percentage()
    brokerDiscountPage.set_email_rule_condition_from_conditional_builder_Field1()
    brokerDiscountPage.set_rule_condition_from_conditional_builder_Field2()
    brokerDiscountPage.set_broker_discount_rule_condition_answer()
    brokerDiscountPage.click_on_save_rule_button()


})