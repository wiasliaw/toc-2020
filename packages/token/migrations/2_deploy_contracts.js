const SafeMath = artifacts.require("SafeMath");
const NetdbToken = artifacts.require("NetdbToken");

module.exports = function(deployer) {
  deployer.deploy(SafeMath);
  deployer.link(SafeMath, NetdbToken);
  deployer.deploy(NetdbToken);
};
