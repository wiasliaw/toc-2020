const { Line } = require('messaging-api-line');

module.exports = [
  Line.createText(
    '歡迎使用 NetdbToken，請先登入 MetaMask 地址跟設定 PIN 碼\n輸入 [/login] - 登入 MetaMask\n輸入 [/tranfer] - 轉帳\n輸入 [/balanceOf] - 查詢自己的 Token'
  ),
];
