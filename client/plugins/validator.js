import { extend } from "vee-validate"
import * as rules from 'vee-validate/dist/rules'
import { messages } from 'vee-validate/dist/locale/en.json'

Object.keys(rules).forEach(ruleName => {
  extend(ruleName, {
    ...rules[ruleName],
    message: messages[ruleName]
  })
})