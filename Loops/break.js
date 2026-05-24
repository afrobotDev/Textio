function maxMessagesWithinBudget(budget) {
  let totalCost = 0;
  let cost = 0;
  let count = 0;

  for(let i = 0; ; i++) {
    cost = 1.00 + i * 0.01;
    totalCost += cost;

    if (totalCost > budget) {
      break;
    }
    count++;
  }
  return count;
}



export { maxMessagesWithinBudget };
