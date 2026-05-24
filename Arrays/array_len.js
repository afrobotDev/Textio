const getMostRecentUser = (usernames) => {
  if (usernames.length > 0) {
    return usernames[usernames.length - 1];
  }
  return null;
};


export { getMostRecentUser };

