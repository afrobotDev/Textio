function createMessage(phoneNumber, message) {
  const msgObject = {
    phoneNumber,
    message,
    messageLength: message.length,
  };

  return msgObject;
}

export { createMessage };
