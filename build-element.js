const fs = require("fs-extra");
const concat = require("concat");
(async function build() {
  const files = [
    "./dist/shared-web-components/runtime.js",
    "./dist/shared-web-components/polyfills.js",
    "./dist/shared-web-components/scripts.js",
    "./dist/shared-web-components/main.js"
  ];
  await fs.ensureDir("ays");
  await concat(files, "ays/elements.js");
})();