const os = require('os');
const path = require('path');

exports.getBin = function getBin(){
  const dir = __dirname.replace(/ /g, "\\ ");
  const platform = os.platform();
  switch(platform){
    case "linux": return path.join(dir, "bin", "seed-linux")
    case "win32": return path.join(dir, "bin", "seed-windows.exe")
  }
  return path.join(dir, "bin", "seed-linux")
}

exports.build = function (input, platform, output) {
  const exec = require("child_process").execSync;
  const command = `${getBin()} ${input ? "-i " + input : ""} ${platform ? "-p " + platform : ""} ${output ? "-o " + output : ""} `
  try {
    return exec(command).toString();
  } catch (error) {
    return error.message;
  }
}

exports.extend = function (input, modulee, output) {
  const exec = require("child_process").execSync;
  const command = `${getBin()} extend ${input ? "-i " + input : ""} ${modulee ? "-m " + modulee : ""} ${output ? "-o " + output : ""} `
  try {
    return exec(command).toString();
  } catch (error) {
    return error.message;
  }
}