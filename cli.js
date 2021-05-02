#! /usr/bin/env node
const exec = require("child_process").exec;
const idx = require("./index.js");
const [, , ...args] = process.argv
const command = `${idx.getBin()} ${args.join(" ")}`
const child = exec(command)
process.stdin.pipe(child.stdin)

child.stdout.on('data', function (data) {
  process.stdout.write(data.toString());
});
child.stderr.on('data', function (data) {
  console.log(data.toString());
});
child.on('close', function (code) {
  process.exit();
});