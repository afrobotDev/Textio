document.getElementById("joinButton").addEventListener("click", () => {
  document.getElementById("mainHeading").textContent = "Welcome to the Club!";
  const paragraphs = document.getElementsByTagName("p");
  for (const p of paragraphs) {
    p.style.color = "red";
  }
});

