class Message {
    static numMsg = 0;
    static lenMsgBody = 0;

    constructor(recipient, sender, body) {
    this.recipient = recipient;
    this.sender = sender;
    this.body = body;
    Message.numMsg++;
    Message.lenMsgBody += this.body.length;
  }

    static getAverageMessageLength() {
        return Math.round((Message.lenMsgBody / Message.numMsg) * 100) / 100;

        }
}


export { Message };

