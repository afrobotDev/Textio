class Sender {
  constructor(recipient) {
    this.recipient = recipient;
  }

  formatMessage(message) {
    return `To: ${this.recipient}, Message: ${message}`;
  }
}


class SMSSender extends Sender {
  constructor(recipient) {
    super(recipient);
  }

  formatMessage(message) {
    return `${super.formatMessage(message)} [SMS]`;
  }
}


class EmailSender extends Sender {
  constructor(recipient) {
    super(recipient);
  }

  formatMessage(message) {
    return `${super.formatMessage(message)} [Email]`;
  }
}


export { Sender, SMSSender, EmailSender };

