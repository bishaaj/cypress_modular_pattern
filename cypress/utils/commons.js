
const {selectors} = require("../utils/selectors")
const {data} = require("../utils/data")

const commons = {

    tenant_title() {
        cy.get(selectors.tenantTitle)
           .contains('Rules Engine')
            .should('have.text', 'Rules Engine')
    },

    tenant_login() {
        cy.get(selectors.tenants)
           .click()
            .type('FBBL016 - FBBL016_DEMO')
             .type('{enter}', 'FBBL016 - FBBL016_DEMO')

        cy.wait(500)     

        cy.get(selectors.logInBtn)
           .click()     
    },

    add_rule_btn() {
        cy.get(selectors.addRuleBtn)
           .should('have.text', 'Rule')
            .click()
    },

    add_policy_line() {
        cy.get(selectors.questionSet)
           .type('Ukmotor')
            .type('{enter}')
    },

    add_rule_conditionField1() {
        cy.get(selectors.conditionalQuestionField1)
           .type('Address line 1')
            .type('{enter}')
    },

    add_rule_conditionField2() {
        cy.xpath(selectors.conditionalQuestionField2)
           .type('Equals')
            .type('{enter}')
    },

    add_rule_condition_answer_for_email() {
        cy.xpath(selectors.ruleConditionalAnswerField)
           .type(data.conditionAnswerEmail)     
    },

    add_rule_condition_answer_for_address() {
        cy.xpath(selectors.ruleConditionalAnswerField)
           .type(data.conditionAnswerAddress)     
    },

    cancel_rule() {
        cy.xpath(selectors.cancelBtn)
           .click({force:true})
    },

    save_rule() {
        cy.get(selectors.saveBtn)
           .click()
     },

    select_rule_from_the_table() {
        cy.get(selectors.rulesTable)
           //.contains('JA Fee Rule')
            .click()
    }, 



// Pre Rate Decline Rule    
    select_pre_rate_rate_rule_type() {
        cy.xpath(selectors.ruleType)
           .type('Pre-Rate Decline')
            .type('{enter}')
    },

    add_pre_rate_decline_rule_name() {
        cy.get(selectors.ruleName)
           .type(data.preRateDeclineRule)
    },

    add_decline_reason() {
        cy.get(selectors.ruleReason) 
           .contains('Decline Reason')
            .type(data.ruleReasonField)
    },

    
// Minimum Premium Rule
    select_minimum_premium_rule_type() {
       cy.xpath(selectors.ruleType)
          .type('Minimum Premium')
           .type('{enter}')
    },

    add_minimum_premium_rule_name() {
        cy.get(selectors.ruleName)
           .type(data.minimumPremiumRule)
    },

    add_minimum_premium_value() {
        cy.xpath(selectors.minimumPremiumValueField)
           .type(data.minimumPremiumValue)
    },

// Maximum discretionary Discount
   select_maximum_discretionary_discount_rule_type() {
       cy.xpath(selectors.ruleType)
          .type('Maximum Discretionary Discount')
           .type('{enter}')
    },

    add_maximum_discretionary_discount_rule_name() {
        cy.get(selectors.ruleName)
           .type(data.maximumDiscretionaryDiscount)
    },

    add_maximum_discretionary_discount_value() {
        cy.xpath(selectors.maximumDiscreDiscountValueField)
           .type(data.maximumDiscretionaryDiscounValue)
    }, 
    
// Pre-Applied Discretionary Discount rules
    select_pre_applied_discretionary_discount_rule_type() {
        cy.xpath(selectors.ruleType)
           .type('Pre Applied Discretionary Discount') 
            .type('{enter}')
    },
    
    add_pre_applied_discretionary_discount_rule_name() {
        cy.get(selectors.ruleName)
           .type(data.preAppliedDiscretionaryDiscount)
    },
    
    add_pre_applied_discretionary_discount_value() {
            cy.xpath(selectors.preAppliedDiscretionaryDiscountValueField)
               .type(data.preAppliedDiscretionaryDiscountValue)
    },
    
// Override_code Rule
    select_override_code_rule_type() {
    cy.xpath(selectors.ruleType)
       .type('Override Code')
        .type('{enter}')
    },

    add_override_code_rule_name() {
        cy.get(selectors.ruleName)
           .type(data.overrideCodeRule)
    },

    add_override_code_value() {
        cy.xpath(selectors.overrideCodeValueField)
           .type(data.overrideCodeRuleValue)
    },

// Add On Rule
    select_add_on_rule_type() {
        cy.xpath(selectors.ruleType)
           .type('Add-on')
            .type('{enter}')
    },

    add_on_rule_name() {
        cy.get(selectors.ruleName)
           .type(data.addOnRule)
    },

    add_on_discount() {
        cy.wait(500)
        cy.xpath(selectors.addOnDiscountField)
           .type(data.addOnDiscount)
           .type('{enter}')
    },

// Fee Rule
    select_fee_rule_type() {
        cy.xpath(selectors.ruleType)
           .type('Fee')
            .type('{enter}')
    },

    fee_rule_name() {
        cy.get(selectors.ruleName)
           .type(data.feeRule)
    },

    fee_amount() {
        cy.wait(500)
        cy.xpath(selectors.feeChargeField)
           .type(data.feeCharge)
           .type('{enter}')
    },

// Broker Discount Rule
    select_broker_discount_rule_type() {
        cy.xpath(selectors.ruleType)
           .type('Broker Discount')
            .type('{enter}')
    },

    broker_discount_rule_name() {
       cy.get(selectors.ruleName)
          .type(data.brokerDiscountRule)
    },

    broker_discount_charges() {
      cy.wait(500)
        cy.xpath(selectors.brokerDiscountChargeField)
           .type(data.brokerDiscountCharge)
            .type('{enter}')
    },   

    broker_discount_percentage_amount() {
        cy.xpath(selectors.brokerDiscountPercentageField)
           .type(data.brokerDiscountPercentageCharge)
            //.type({'enter'})
    },

// Instalment Plan Rule
    select_instalment_plan_rule_type() {
        cy.xpath(selectors.ruleType)
           .type('Instalment Plan')
            .type('{enter}')
    },

    instalment_plan_rule_name() {
        cy.get(selectors.ruleName)
           .type(data.instalmentPlanRule)
    },

    instalment_plan_amount() {
        cy.wait(500)
        cy.xpath(selectors.instalmentPlanChargeField)
           .type(data.instalmentPlanCharge)
           .type('{enter}')
    },

// Rate Reduction Rule
    select_rate_reduction_rule_type() {
        cy.xpath(selectors.ruleType)
           .type('Rate Reduction')
            .type('{enter}')
    },

    rate_reduction_rule_name() {
       cy.get(selectors.ruleName)
          .type(data.rateReductionRule)
    },

    rate_reduction_percentage_amount() {
        cy.xpath(selectors.rateReductionPercentageField)
           .type(data.rateReductionPercentageCharge)
            //.type({'enter'})
           // cy.wait(1000)
    },

    rate_reduction_override_code() {        
          cy.get(selectors.rateReductionOCField)
              .find('input')
               .type( data.rateReductionOC)
                .type('{enter}')
      }
 
} 
module.exports = {commons}

