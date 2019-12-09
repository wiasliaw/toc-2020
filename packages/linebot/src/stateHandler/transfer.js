// trnasfer
async function FuncTransferStart(context) {
  // get user data
  context.setState({ step: 'Transfer_a' });
  await context.sendText('Enter address which you sent to');
}

async function FuncTransfer_a(context) {
  if (context.event.isText) {
    const addr = context.event.text;
    context.setState({ step: 'Transfer_b', to: addr });
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

module.exports = {
  FuncTransferStart,
  FuncTransfer_a,
  FuncTransfer_b,
};
