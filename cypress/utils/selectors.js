
const selectors = {
    tenantTitle: ".Section_module_section__a4d51a09 .Headers_module_title__98d19a23",
    ruleManagement: '[data-test="layout-tab-group-rule-management"]',
    auditHistory: '[data-test="layout-tab-group-audit-history"]',
    referenceData: '[data-test="layout-tab-group-reference-data"]',
    rulesTable: '[data-test="rule-management-section"]', //"./html/body/asi-app/div/div/section/div[2]/section/div[2]/div",
    questionSet: '[data-test="policy-line-definition-dropdown-combobox-selections"]', //'//*[@id="policyLineDefinition"]', //'.Row_module_row__4ff93fa8', 
    ruleType: '//*[@id="ruleType"]',
    ruleName: '#ruleName',
    newRulePage: "[data-test='create-rule-section-title']",               
    addRuleBtn: '[data-test="add-rule-button"]',
    cancelBtn: '//div[contains(text(),"Cancel")]',
    ruleReason: '.Row_module_row__4ff93fa8',
    saveBtn: "[type='submit']",
    tenants: '.ComboboxBase_module_selections__19a6d3f2',
    logInBtn: '[data-test="dev-login-button"]', //'.Row_module_row__4ff93fa8 .Button_module_button__f3e55353',
    conditionalQuestionField1: '.Group-module--gCvYCU7R .ComboboxBase_module_container__19a6d3f2',
    conditionalQuestionField2: '//*[@id="ruleGroup.conditions[0].comparison"]',
    ruleConditionalAnswerField: '//input[@id="ruleGroup.conditions[0].value"]',
    minimumPremiumValueField: '//input[@id="MinimumPremium.MinimumPremium.minimumPremiumAmount__textField"]',
    maximumDiscreDiscountValueField: '//*[@id="MaximumDiscretionaryDiscount.MaximumDiscretionaryDiscount.maximumDiscountPercentage__textField"]',
    preAppliedDiscretionaryDiscountValueField: '//*[@id="PreAppliedDiscretionaryDiscount.PreAppliedDiscretionaryDiscount.discretionaryDiscountPercentage__textField"]',
    overrideCodeValueField: '//*[@id="OverrideCode.overrideCode"]',
    addOnDiscountField: '//*[@id="Addon.addon"]',
    feeChargeField: '//*[@id="Fee.fee"]',
    brokerDiscountChargeField: '//*[@id="BrokerDiscount.brokerDiscount"]',
    brokerDiscountPercentageField: '//*[@id="BrokerDiscount.BrokerDiscount.brokerDiscountPercentage__textField"]',
    instalmentPlanChargeField: '//*[@id="InstalmentPlan.instalmentPlan"]',
    rateReductionPercentageField: '//*[@id="RateReduction.RateReduction.rateReductionPercentage__textField"]',
    rateReductionOCField: '[data-test="override-code-input"]',
    rulesTable: '[data-test="dropdownToggle"]'
    
   







}
module.exports = {selectors}

