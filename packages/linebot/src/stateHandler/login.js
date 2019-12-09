async function FuncLoginStart(context) {
  // get user data
  context.setState({ step: 'Login_a' });
  await context.sendText('enter MetaMask address');
}

async function FuncLogin_a(context) {
  if (context.event.isText) {
    const addr = context.event.text;
    context.setState({ step: 'Login_b', addr: addr });
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

module.exports = {
  FuncLoginStart,
  FuncLogin_a,
  FuncLogin_b,
};
