#!/usr/bin/env node

const spawn = require("child_process").spawn;
const path = require("path");

const args = process.argv.slice(3);
const type = process.argv[2];

if (process.platform === "darwin" && process.arch === "x64") {
  spawn(path.resolve("./mac-x86_64/" + type), args, { stdio: "inherit" });
} else if (process.platform === "linux" && process.arch === "arm") {
  spawn(path.resolve("./linux-arm32/" + type), args, { stdio: "inherit" });
} else if (process.platform === "linux" && process.arch === "x64") {
  spawn(path.resolve("./linux-amd64/" + type), args, { stdio: "inherit" });
} else {
  console.error(
    "The current OS platform & arch are not supported yet: " +
      process.platform +
      " & " +
      process.arch
  );
}
