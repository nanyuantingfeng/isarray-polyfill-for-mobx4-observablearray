/***************************************************
 * Created by nanyuantingfeng on 2020/8/5 19:01. *
 ***************************************************/
if (!Array.isArray) {
  Array.isArray = (arg: any): arg is any[] => Object.prototype.toString.call(arg) === "[object Array]";
}

const __isArray = Array.isArray;
const __MAX_SAFE_INTEGER = 9007199254740991;
const __isLength = (value: any) => typeof value === "number" && value > -1 && value % 1 == 0 && value <= __MAX_SAFE_INTEGER;
const __isFunction = (arg: any) => typeof arg === "function";
const __isNotNull = (arg: any) => arg !== null && arg !== undefined;

Array.isArray = function (arg: any): arg is any[] {
  if (__isArray(arg)) return true;
  if (arg === null || arg === undefined) return false;

  if (
    __isLength(arg.length) &&
    __isNotNull(arg.$mobx) &&
    __isFunction(arg.toJS) &&
    __isFunction(arg.slice) &&
    __isFunction(arg.push) &&
    __isFunction(arg.pop) &&
    __isFunction(arg.join) &&
    __isFunction(arg.toJSON) &&
    __isFunction(arg.intercept) &&
    __isFunction(arg.observe)
  ) {
    return __isArray(arg.slice());
  }

  return false;
};
