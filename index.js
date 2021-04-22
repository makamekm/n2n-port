#!/usr/bin/env node

const spawn = require("child_process").spawn;
const path = require("path");

const args = process.argv.slice(3);
const type = process.argv[2];

if (process.platform === "darwin") {
  spawn(path.resolve("./mac-x86_64/" + type), args, { stdio: "inherit" });
} else {
  console.error(
    "The current OS platform is not supported yet: " + process.platform
  );
}
