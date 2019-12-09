const { router, text, route } = require('bottender/router');
const template = require('./template');
const {
  FuncLoginStart,
  FuncLogin_a,
  FuncLogin_b,
  FuncTransferStart,
  FuncTransfer_a,
  FuncTransfer_b,
  FuncBalanceOf,
} = require('./stateHandler');

async function FuncFilter(context) {
  if (context.event.isText) {
    // text event
    const { step } = context.state;
    if (step === 'Login_a') {
      await FuncLogin_a(context);
    } else if (step === 'Login_b') {
      await FuncLogin_b(context);
    } else if (step === 'Transfer_a') {
      await FuncTransfer_a(context);
    } else if (step === 'Transfer_b') {
      await FuncTransfer_b(context);
    } else {
      context.resetState();
      await context.reply(template.errorEvent);
    }
  } else if (context.event.isFollow) {
    // follow event
    await context.reply(template.followEvent);
  } else {
    // default event
    await context.reply(template.defaultEvent);
  }
}

module.exports = async function App() {
  return router([
    text(/^\/login/i, FuncLoginStart),
    text(/^\/transfer/i, FuncTransferStart),
    text(/^\/balanceOf/i, FuncBalanceOf),
    route('*', FuncFilter),
  ]);
};
