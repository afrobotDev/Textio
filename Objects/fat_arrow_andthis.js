const campaign = {
  name: "Welcome Campaign",
  maxMessages: 100,
  sentMessages: 30,
  sendMessage()   {
    this.sentMessages++;
  },
};


export { campaign };
