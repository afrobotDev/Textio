const uploadNewMessages = (oldMessages, newMessages) => {
  const newArray = [...oldMessages, ...newMessages]; 
  return newArray
};

export { uploadNewMessages };

