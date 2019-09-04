#! /usr/bin/env node
const exec = require("child_process").execSync;
let dir = __dirname.replace(/ /g, "\\ ");
const [, , ...args] = process.argv
let command = `${dir}/bin/seed ${args.join(" ")}`
console.log(exec(command).toString())