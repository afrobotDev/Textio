function getPrimaryAndBackupMessages(messages) {
  const [primary, ...backups] = messages;
  return {primary, backups};
}

export { getPrimaryAndBackupMessages };

