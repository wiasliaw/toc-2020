pragma solidity ^0.5.0;

library SafeMath {
  function safeAdd(
    uint256 a,
    uint256 b
  ) public pure returns (uint256 c) {
    c = a + b;
    require(c>=a, "Overflow");
    return c;
  }
  function safeSub(
    uint256 a,
    uint256 b
  ) public pure returns (uint256 c) {
    c = a - b;
    require(c<=a, "Overflow");
    return c;
  }
}
