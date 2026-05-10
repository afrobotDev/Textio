function createContact(phoneNumber, name = "Anonymous", avatar = "default.jpg") {
  if(!phoneNumber) {
  return "Invalid phone number"
  } else {
  let new_string = `/public/pictures/${avatar}`
  return `Contact saved! Name: ${name}, Phone number: ${phoneNumber}, Avatar: ${new_string}`
  }
}


export { createContact };

