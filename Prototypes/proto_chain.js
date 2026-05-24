const user = {
  name: "Default User",
  type: "user",
};

const adminUser = Object.create(user);
adminUser.type = "admin";

function isAdmin(object) {
  return Object.getPrototypeOf(object) === adminUser;
}


export { user, adminUser, isAdmin };

