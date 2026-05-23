class Contact {
  constructor(name, phoneNumber) {
    this.name = name;
    this.phoneNumber = phoneNumber;
  }

  set phoneNumber(value) {
    if (typeof value !== "string" || value.length !== 10) {
      throw new Error("Invalid phone number.");
    }
    this._phoneNumber = value;
  }

  get phoneNumber() {
    return `(${this._phoneNumber.slice(0,3)}) ${this._phoneNumber.slice(3,6)}-${this._phoneNumber.slice(6,10)}`;
  }
}

export { Contact };

