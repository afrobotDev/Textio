const getMostRecentUser = (usernames) => {
  if (usernames) {
    return usernames[usernames.length - 1];
  }
  return null;
};


export { getMostRecentUser };

