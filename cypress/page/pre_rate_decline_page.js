const {selectors} = require("../utils/selectors")
const {commons} = require("../utils/commons")

export class PreRateDeclinePage {

    verify_that_rules_engine_title_is_display() {
        commons.tenant_title()
    }

    login_into_ui_tenant_from_developers_login() {
        commons.tenant_login()
    }

    click_on_add_rule_button_to_create_new_rule() {
        commons.add_rule_btn()
    }

    select_ukMotors_from_question_set_dropdown() {
        commons.add_policy_line()
    }

    select_pre_rate_decline_from_rule_type_dropdown() {
        commons.select_pre_rate_rate_rule_type()
    }

    set_pre_rate_decline_rule_name() {
        commons.add_pre_rate_decline_rule_name()
    }

    set_pre_rate_decline_reason() {
        commons.add_decline_reason()
    }

    set_email_rule_condition_from_conditional_builder_Field1() {
        commons.add_rule_conditionField1()
    }

    set_rule_condition_from_conditional_builder_Field2() {
        commons.add_rule_conditionField2()
    }

    set_pre_rate_decline_rule_condition_answer() {
        commons.add_rule_condition_answer_for_email()
    }

    click_on_save_rule_button() {
        commons.save_rule()
    }

    set_address_line_1_rule_condition_from_conditional_builder_Field1() {
        commons.add_rule_conditionField1()
    }

    set_pre_rate_decline_rule_condition_answer_for_address() {
        commons.add_rule_condition_answer_for_address()
    }




}