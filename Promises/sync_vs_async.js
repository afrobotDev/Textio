const textioSetupCompleteWait = 400;
const errorHandlingWait = 300;
const messageRoutingWait = 200;
const smsProviderWait = 100;


setTimeout(
  () => console.log("Textio setup complete!"),
  textioSetupCompleteWait,
);

setTimeout(
  () => console.log("Setting up error handling and retries..."),
  errorHandlingWait,
);

setTimeout(
  () => console.log("Configuring message routing..."),
  messageRoutingWait,
);

setTimeout(
  () => console.log("Connecting to SMS providers..."),
  smsProviderWait,
);

console.log("Starting Textio service initialization...");

await sleep(2500);
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

