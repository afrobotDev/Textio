const total = (function calculateTotal(numMessages, bytesPerMessage) {
  return numMessages * bytesPerMessage;
})(100, 24);


console.log("Total message cost:", total);

