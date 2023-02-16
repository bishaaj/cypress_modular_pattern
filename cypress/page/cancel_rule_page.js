import { commons } from "../utils/commons";

export class CancelRule {

    verify_that_rules_engine_title_is_display() {
        commons.tenant_title()
    }

    login_into_ui_tenant_from_developers_login() {
        commons.tenant_login()
    }

    click_on_add_rule_button_to_create_new_rule() {
        commons.add_rule_btn()
    }

    click_on_cancel_rule_button() {
        commons.cancel_rule()
    }


}