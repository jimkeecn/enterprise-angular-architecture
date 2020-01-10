const fs = require("fs-extra");
const fsbasic = require("fs");
const concat = require("concat");
const AWS = require("aws-sdk");

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
  const path = "./dist/element/elements.js";
  await fsbasic.access(path, fsbasic.F_OK, err => {
    if (err) {
      console.log(err);
      return;
    }

    // Enter copied or downloaded access ID and secret key here
    const ID = "AKIA5XE4A2";
    const SECRET = "HEFQeFElvMsgzzBeiOUSFWq3HegGWj3I781fmvf+";
    const BUCKET_NAME = "unime-static-file";
    if (!ID && SECRET) {
      console.error("AWS credential is not setup properly.");
    }
    // The name of the bucket that you have created

    const s3 = new AWS.S3({
      accessKeyId: ID,
      secretAccessKey: SECRET
    });

    if (s3) {
      const fileContent = fs.readFileSync(path);
      if (!fileContent) {
        console.error("File is not accessable...");
        return;
      }
      const params = {
        Bucket: BUCKET_NAME,
        Key: "elements.js", // File name you want to save as in S3
        Body: fileContent
      };
      console.log("start uploading the file");
      // Uploading files to the bucket
      s3.upload(params, function(err, data) {
        if (err) {
          throw err;
        }
        console.log(`File uploaded successfully. ${data.Location}`);
      });
    } else {
      console.error("AWS is not launched");
    }
  });
})();
