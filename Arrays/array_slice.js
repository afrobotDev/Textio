function splitLogs(logs, slug) {
  let index = -1;

  for (const [i, log] of logs.entries()) {
    if (log.includes(slug)) {
      index = i;
      break;
    }
  }

  if (index === -1) {
    return { before: [], after: [], i: -1 };
  }

  const slugLog = {
    before: logs.slice(0, index),
    after: logs.slice(index + 1),
    i: index,
  };
  return slugLog;
}


export { splitLogs };

