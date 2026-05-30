function updateMessageStatus(messageId, currentStatus, isDelivered) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (currentStatus === "Sending" && isDelivered === true) {
        resolve(`Textio Message ${messageId} has been delivered successfully.`);
      } else if (currentStatus === "Sending" && isDelivered === false) {
        reject(`Textio Message ${messageId} is still sending and cannot be marked as delivered.`);
      } else if (currentStatus !== "Sending") {
        resolve(`Textio Message ${messageId} status updated to ${currentStatus}.`);
      } else {
        reject(`Unknown status: ${currentStatus}`);
      }
    }, 500);
  });
}
 
export { updateMessageStatus };
