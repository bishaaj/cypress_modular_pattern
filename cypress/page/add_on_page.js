import { commons } from "../utils/commons";

export class AddOnPage {

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

    select_add_on_from_rule_type_dropdown() {
        commons.select_add_on_rule_type()
    }

    set_add_on_rule_name() {
        commons.add_on_rule_name()
    }

    select_add_on_discount_from_dropdown() {
        commons.add_on_discount()
    }

    set_email_rule_condition_from_conditional_builder_Field1() {
        commons.add_rule_conditionField1()
    }

    set_rule_condition_from_conditional_builder_Field2() {
        commons.add_rule_conditionField2()
    }

    set_add_on_rule_condition_answer() {
        commons.add_rule_condition_answer_for_email()
    }

    click_on_save_rule_button() {
        commons.save_rule()
    }





}