import {
  PLUS_NUM_REG_EXP,
  PLUS_FLOAT_REG_EXP,
  MOBILE_REG_EXP,
  EMAIL_REG_EXP,
  MOBILE_REG_EXP_NATIONAL
} from './regExp'

function ElementValidFactory(regExp, text) {
  return (rule, value, callback) => {
    if (!regExp.test(value)) {
      return callback(new Error(text))
    }
    return callback()
  }
}

export const intger = ElementValidFactory(PLUS_NUM_REG_EXP, '请输入整数')

export const float = ElementValidFactory(PLUS_FLOAT_REG_EXP, '请输入数字')

export const mobile = ElementValidFactory(MOBILE_REG_EXP, '手机号无效')

export const email = ElementValidFactory(EMAIL_REG_EXP, '邮箱无效')

export const mobliePlus = ElementValidFactory(MOBILE_REG_EXP_NATIONAL, '手机号无效')
