const getCleanMessages = (messages, badWord) => {
  const lowerBadWord = badWord.toLowerCase();
  return messages.filter(msg => !msg.toLowerCase().includes(lowerBadWord));
};


export { getCleanMessages };

