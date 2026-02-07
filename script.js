const music = document.getElementById("bgMusic");

function giveRose() {
  const name = document.getElementById("nameInput").value;
  if (!name) return alert("Please enter a name 🌹");

  music.play();
  showStep(2);

  setTimeout(() => {
    document.getElementById("finalName").innerText = name;
    showStep(3);
  }, 2500);
}

function yesClicked() {
  showStep(4);
}

function showStep(step) {
  document.querySelectorAll(".step").forEach(s => s.classList.remove("active"));
  document.getElementById("step" + step).classList.add("active");
}

function moveNo() {
  const btn = document.querySelector(".no");
  btn.style.transform =
    `translate(${Math.random()*120 - 60}px, ${Math.random()*80 - 40}px)`;
}

function restart() {
  location.reload();
}

/* 🌹 Falling petals */
function createPetal() {
  const petal = document.createElement("span");
  petal.innerHTML = "🌸";
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = 4 + Math.random() * 4 + "s";
  document.querySelector(".petals").appendChild(petal);

  setTimeout(() => petal.remove(), 8000);
}

setInterval(createPetal, 300);
