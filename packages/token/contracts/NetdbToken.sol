pragma solidity ^0.5.0;

import "./SafeMath.sol";

contract NetdbToken {
  using SafeMath for uint256;

  bytes32 public name;
  bytes32 public symbol;
  uint8 public decimals;

  uint256 _totalSupply;
  mapping (address => uint256) _balances;
  mapping (address => mapping(address => uint256)) _allowed;
  event Transfer(address indexed from, address indexed to, uint256 tokens);
  event Approval(address indexed owner, address indexed spender, uint256 tokens);

  constructor () public {
    name = "NetdbToken";
    symbol = "NT";
    decimals = 18;
    _totalSupply = 1000000 * 10**uint(decimals);
    _balances[address(msg.sender)] = _totalSupply;
    emit Transfer(address(0x0), address(msg.sender), _totalSupply);
  }

  function totalSupply() public view returns(uint256) {
    return _totalSupply;
  }

  function balanceOf(address owner) public view returns(uint256) {
    return _balances[owner];
  }

  function allowance(address owner, address spender) public view returns(uint256) {
    return _allowed[owner][spender];
  }

  function transfer(address to, uint256 tokens) public returns(bool success) {
    _balances[msg.sender] = _balances[msg.sender].safeSub(tokens);
    _balances[to] = _balances[to].safeAdd(tokens);
    emit Transfer(msg.sender, to, tokens);
    return true;
  }

  function approve(address spender, uint256 tokens) public returns(bool success) {
    _allowed[msg.sender][spender] = tokens;
    emit Approval(msg.sender, spender, tokens);
    return true;
  }

  function transferFrom(address from, address to, uint256 tokens) public returns(bool success) {
    _allowed[from][msg.sender] = _allowed[from][msg.sender].safeSub(tokens);
    _balances[from] = _balances[from].safeSub(tokens);
    _balances[to] = _balances[to].safeSub(tokens);
    return true;
  }
}
