const promise = updateMessageStatus("M123", "Sending", true);
const message = await promise;

console.log(message);

function updateMessageStatus(messageId, currentStatus, isDelivered) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (currentStatus === "Sending") {
        if (isDelivered) {
          resolve(
            `Textio Message ${messageId} has been delivered successfully.`,
          );
        } else {
          reject(
            `Textio Message ${messageId} is still sending and cannot be marked as delivered.`,
          );
        }
      } else {
        resolve (
          `Textio Message ${messageId} status updated to ${currentStatus}.`,
        );
      }
    }, 1000)
  });
}
