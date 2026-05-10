function getBillForMonth(costPerSend, messagesSent) {
  return costPerSend * messagesSent;
}

function monthlyBillIncrease(costPerSend, numLastMonth, numThisMonth) {
  let lastMonthBill;
  let thisMonthBill;

  lastMonthBill = getBillForMonth(costPerSend, numLastMonth);
  thisMonthBill = getBillForMonth(costPerSend, numThisMonth);

  return thisMonthBill - lastMonthBill;
}


export { getBillForMonth, monthlyBillIncrease };

