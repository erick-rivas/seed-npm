exports.build = function (input, platform, output) {
  const exec = require("child_process").execSync;
  let dir = __dirname.replace(/ /g, "\\ ");
  let command = `${dir}/bin/seed ${input ? "-i " + input : ""} ${platform ? "-p " + platform : ""} ${output ? "-o " + output : ""} `
  try {
    return exec(command).toString();
  } catch (error) {
    return error.message;
  }
}

exports.export = function (input, modulee, output) {
  const exec = require("child_process").execSync;
  let dir = __dirname.replace(/ /g, "\\ ");
  let command = `${dir}/bin/seed export ${input ? "-i " + input : ""} ${modulee ? "-m " + modulee : ""} ${output ? "-o " + output : ""} `
  try {
    return exec(command).toString();
  } catch (error) {
    return error.message;
  }
}