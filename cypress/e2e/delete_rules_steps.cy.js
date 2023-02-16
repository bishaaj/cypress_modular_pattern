import { DeleteRulePage } from "../page/delete_rules_pages";
const deleteRulePage = new DeleteRulePage()

it('Verify that user can delete an existing rule from UI tenants', () => {
    deleteRulePage.verify_that_rules_engine_title_is_display()
    deleteRulePage.login_into_ui_tenant_from_developers_login()
    deleteRulePage.click_on_one_of_the_rule_from_the_rule_table()
})