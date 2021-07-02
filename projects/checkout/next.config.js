const withTM = require("next-transpile-modules")([
  "@belezanaweb/components",
  "@belezanaweb/hooks",
  "@belezanaweb/utils",
  "@belezanaweb/store",
  "@belezanaweb/services",
]);

module.exports = withTM({});
