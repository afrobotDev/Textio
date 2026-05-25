const getCleanMessages = (messages, badWord) => {
  const lowerBadWord = badWord.toLowerCase();
  const cleanMessages = [];
  for (const msg of messages) {
    if (!msg.toLowerCase().includes(lowerBadWord)) {
      cleanMessages.push(msg);
    }
  }
  return cleanMessages;
};


export { getCleanMessages };

