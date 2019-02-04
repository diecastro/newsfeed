
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// The purpose of this file is to prevent our tests from resulting in a console log.
// We're doing this because logs to the console in tests is indicative of issues in your source/test code and adds noise
// to test output making it harder to develop tests and look at error output that actually matters.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const disallowedConsoleMethods = [
  'log',
  'info',
  'error',
  'trace',
  'debug',
  'warn',
];

/**
 * This is an array of regexes that matches console logs that are difficult to avoid
 * @type {Array}
 */
const unavoidableLogs = [
  /^\[SECURITY\] node-uuid: crypto not usable, falling back to insecure Math.random\(\)$/,
  /^Warning: React.createElement: type should not be null, undefined, boolean, or number. It should be a string \(for DOM elements\) or a ReactClass \(for composite components\).$/,
];

disallowedConsoleMethods.forEach(hijackMethod);

function hijackMethod(method) {
  const original = console[method];
  console[method] = function hijackedMethod(...args) {
    if (isUnavoidable(...args)) {
      return
    }
    original(...args)
  }
}

function isUnavoidable(...args) {
  return args.some(arg => {
    return unavoidableLogs.some(unavoidableLog => unavoidableLog.test(arg))
  })
}
