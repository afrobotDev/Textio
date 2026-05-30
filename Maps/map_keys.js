function  createUserMap(users) {
  const map = new Map();
  for(const obj of users) {
    const fullName = `${obj.fname} ${obj.lname}`;
    map.set(fullName, obj);
  }
  return map;
}


export { createUserMap }; 
