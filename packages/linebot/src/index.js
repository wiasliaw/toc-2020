const { router, text } = require('bottender/router');

// login
async function FuncLoginStart(context) {
  // get user data
  context.setState({ step: 'Login_a'});
  await context.sendText('enter MetaMask address');
}

async function FuncLogin_a(context) {
  if (context.event.isText) {
    const addr = context.event.text;
    context.setState({ step: 'Login_b', addr: addr});
    await context.sendText('Setup your PIN code(6 of numbers)');
    return;
  }
  context.resetState();
  await context.sendText('Invalid Input, try again');
}

async function FuncLogin_b(context) {
  if (context.event.isText) {
    const data = {
      id: context.session.id,
      addr: context.state.addr,
      pin: context.event.text,
    };

    // insert db
    console.log(data);

    context.resetState();
    await context.sendText('Done');
    return;
  }
  context.resetState();
  await context.sendText('Invalid Input, try again');
}

// trnasfer
async function FuncTransferStart(context) {
  // get user data
  context.setState({step: 'Transfer_a'});
  await context.sendText('Enter address which you sent to');
}

async function FuncTransfer_a(context) {
  if (context.event.isText) {
    const addr = context.event.text;
    context.setState({ step: 'Transfer_b', to: addr});
    await context.sendText('Enter how much token you send');
    return;
  }
  context.resetState();
  await context.sendText('Invalid Input, try again');
}

async function FuncTransfer_b(context) {
  if (context.event.isText) {
    const tokens = context.event.text;

    // send transaction
    console.log(tokens);

    context.resetState();
    await context.sendText('Done');
    return;
  }
  context.resetState();
  await context.sendText('Invalid Input, try again');
}

// balanceOf
async function FuncBalanceOf(context) {

}

async function FuncDefault(context) {
  await context.sendText(`
    歡迎使用 NetdbToken，請先登入 MetaMask 地址跟設定 PIN 碼\n
    輸入 [/login] - 登入 MetaMask
    輸入 [/tranfer] - 轉帳
    輸入 [/balanceOf] - 查詢自己的 Token
  `);
}

async function FuncFilter(context) {
  const { step } = context.state;
  if (step==='Login_a') {
    await FuncLogin_a(context);
  } else if (step==='Login_b') {
    await FuncLogin_b(context);
  } else if (step==='Transfer_a') {
    await FuncTransfer_a(context);
  } else if (step==='Transfer_b') {
    await FuncTransfer_b(context);
  } else {
    await FuncDefault(context);
  }
}

module.exports = async function App() {
  return router([
    text(/^\/login/i, FuncLoginStart),
    text(/^\/transfer/i, FuncTransfer),
    text(/^\/balanceOf/i, FuncBalanceOf),
    text('*', FuncFilter),
  ]);
};
