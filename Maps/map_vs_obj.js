function fixUserMap(brokenMap) {
  const fixedUserMap = new Map();
  for(const [key, value] of brokenMap) {
    const new_key = `${key.fname} ${key.lname}`;
    fixedUserMap.set(new_key, value);
  }
  return fixedUserMap;
}

export { fixUserMap };
