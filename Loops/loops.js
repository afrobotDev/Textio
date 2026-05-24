function bulkSendCost(numMessages) {
  let cost = 0;
  let addFee = 0.00;

  for(let i = 0; i < numMessages; i++) {
    cost += 1.00 + addFee;
    addFee = addFee + 0.01;
  }
  return cost;
}



export { bulkSendCost };


//for numMessages = 10, at i = 0, cost = 1.00, addFee = 0.01
//                      at i = 1, cost = 2.01, addFee = 0.02
//                      at i = 2, cost = 3.03, addFee = 0.03
//                      at i = 3, cost = 4.06, addFee = 0.04
//                      at i = 4, cost = 5.10, addFee = 0.05
//                      at i = 5, cost = 6.15, addFee = 0.06
//                      at i = 6, cost = 7.21, addFee = 0.07
//                      at i = 7, cost = 8.28, addFee = 0.08
//                      at i = 8, cost = 9.36, addFee = 0.09
//                      at i = 9, cost = 10.45, addFee = 0.10
