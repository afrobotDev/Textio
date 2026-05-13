const campaign = {
  name: "Welcome Campaign",
  maxMessages: 100,
  sentMessages: 30,
  sendMessages() {
    this.sentMessages++;
  },
};

function sendWelcome(name, callback) {
  callback();
  console.log(`Sending: "Welcome ${name}! We are so glad you are here."`);
}

console.log("Campaign Messages: ", campaign.sentMessages);

sendWelcome("Tyler", campaign.sendMessages.bind(campaign));

console.log("Campaign Messages:", campaign.sentMessages);
