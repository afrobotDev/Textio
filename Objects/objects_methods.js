const campaign = { 
  getRemainingMessages() {
    return campaign.maxMessages - campaign.sentMessages;
  },
  maxMessages: 100,
  sentMessages: 30,
  name: "Welcome Campaign",
};



export { campaign }
