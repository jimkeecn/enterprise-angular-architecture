const fs = require("fs-extra");
const concat = require("concat");
(async function build() {
  const files = [
    //"./dist/shared-web-components/runtime-es5.js",
    "./dist/shared-web-components/runtime-es2015.js",
    //"./dist/shared-web-components/polyfills-es5.js",
    "./dist/shared-web-components/polyfills-es2015.js",
    //"./dist/shared-web-components/main-es5.js",
    "./dist/shared-web-components/main-es2015.js"
  ];
  await fs.ensureDir("./dist/element/");
  await concat(files, "./dist/element/elements.js");
})();