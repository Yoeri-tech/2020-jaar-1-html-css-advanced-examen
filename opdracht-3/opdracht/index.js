/* Negeren */
function randomScore(min, max) {
  return Math.random() * (max - min) + min;
}

const cursisten = [
  { id: 0, naam: "Yoeri" },
  { id: 1, naam: "Marvi Hendriks" },
  { id: 2, naam: "Simone :P" },
  { id: 3, naam: "Domenico" },
  { id: 4, naam: "Marco " },
  { id: 5, naam: "Michelle" },
  { id: 6, naam: "Romy" },
  { id: 9, naam: "Ian" },
  { id: 10, naam: "Angelique" },
  { id: 11, naam: "Arne" },
];

function voegScoresToeAanCursisten() {
  cursisten.forEach(
    (cursist) => (cursist.score = Math.round(randomScore(50, 100)))
  );
}
/* Tot hier negeren */

function cursistenToevoegen() {
  voegScoresToeAanCursisten();
  const cardsEl = document.querySelector(".cards");
  cardsEl.innerHTML = "AAP";
  

  cursisten.forEach((cursist) => {
    const cardsEl=document.createElement("div");
    cardsEl.textContent="AAP";
    cardsEl.classList.add("cards");
    cardsEl.appendChild(cusisten.naam)
    cardsEl.appendChild(cursisten.score);
    cardsEl.style.width="250px"
    cardsEl.setAttribute("progress-bar");
    // Zorg dat er voor elke cursist een element wordt aangemaakt.
    // Enkel hier moet code toegevoegd worden.
  });
}
