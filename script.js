function select(type, nextPage) {
  let score = JSON.parse(localStorage.getItem("score")) || {};
  score[type] = (score[type] || 0) + 1;
  localStorage.setItem("score", JSON.stringify(score));
  window.location.href = nextPage;
}

function showResult() {
  let score = JSON.parse(localStorage.getItem("score"));
  let result = Object.entries(score).sort((a,b) => b[1]-a[1])[0][0];
  window.location.href = `results/${result}.html`;
}