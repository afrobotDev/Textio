const notification = {
  notify(recipient, message) {
    return `Notification for ${recipient}: ${message}`;
  },
};

const systemNotification = Object.create(notification);

systemNotification.broadcast = function (message) {
  return `Broadcast to all users: ${message}`;
};


export { notification, systemNotification };

