#! /usr/bin/env node
const exec = require("child_process").execSync;
const idx = require("./index.js");
const [, , ...args] = process.argv
const command = `${idx.getBin()} ${args.join(" ")}`
console.log(exec(command).toString())