function printReports(intro, body, outro) {
  printCostReport(
    function(intro) {
      return intro.length * 2// ?
    },
    intro
  )
  printCostReport(
    function(body) {
      return body.length * 3
    },
    body
  )
  printCostReport(
    function(outro) {
      return outro.length * 4 
    },
    outro 
  )
}


function printCostReport(costCalculator, message) {
  const cost = costCalculator(message);
  console.log(`Message: "${message}" Cost: ${cost} cents`);
}

printReports(
  "Welcome to the Hotel California",
  "Such a lovely place",
  "Plenty of room at the Hotel California",
);

