function addToPhonebook(phoneNumber, name, phoneBook) {
  const phoneBookCopy = new Map(phoneBook);
  phoneBookCopy.set(phoneNumber, name);
  return phoneBookCopy; 
}

export { addToPhonebook };

