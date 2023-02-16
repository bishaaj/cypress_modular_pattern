import { InstalmenPlanPage } from "../page/instalment_plan_page";
const instalmentPlanPage = new InstalmenPlanPage()

it('Create Instalment Plan rules with Email condition', () => {
    instalmentPlanPage.verify_that_rules_engine_title_is_display()
    instalmentPlanPage.login_into_ui_tenant_from_developers_login()
    instalmentPlanPage.click_on_add_rule_button_to_create_new_rule()
    instalmentPlanPage.select_ukMotors_from_question_set_dropdown()
    instalmentPlanPage.select_instalment_plan_from_rule_type_dropdown()
    instalmentPlanPage.set_instalment_plan_rule_name()
    instalmentPlanPage.select_instalment_plan_amount_from_dropdown()
    instalmentPlanPage.set_email_rule_condition_from_conditional_builder_Field1()
    instalmentPlanPage.set_rule_condition_from_conditional_builder_Field2()
    instalmentPlanPage.set_instalment_plan_rule_condition_answer()
    instalmentPlanPage.click_on_save_rule_button()

})    