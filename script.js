let scores = {
  moisture: 0,
  memory: 0,
  flow: 0,
  spoor: 0
};

function addScore(type) {
  scores[type]++;
  const current = document.querySelector(".question:not([hidden])");
  current.hidden = true;
  const next = current.nextElementSibling;
  if (next && next.classList.contains("question")) {
    next.hidden = false;
  } else {
    document.getElementById("getResult").style.display = "block";
  }
}

function getResult() {
  const max = Math.max(...Object.values(scores));
  const result = Object.keys(scores).find(key => scores[key] === max);
  window.location.href = `results/${result}.html`;
}