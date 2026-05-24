function getCleanRank(reviewWords) {
  let count = 0;
  if (reviewWords.includes("dang")) {
    count++;
  }if (reviewWords.includes("shoot")) {
    count++;
  }if (reviewWords.includes("heck")) {
    count++;
  }

  if (count === 1) {
    return "dirty";
  }else if (count >= 2) {
    return "filthy";
  }else {
    return "clean";
  }
}

export { getCleanRank };

