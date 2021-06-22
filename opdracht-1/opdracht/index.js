function voegEventHandlerToeAanKnop() {
  const buttonEl = document.querySelector("#knop-2");
  // Voeg een event listener toe aan het 'click' event.
  // Als geklikt wordt, moet de functie "itemToevoegen" aangeroepen worden.
}
voegEventHandlerToeAanKnop();

function itemToevoegen() {
  const lijst = document.querySelector("#lijst");
  const itemInputWaarde = document.querySelector("#item-input").value;

  if (itemInputWaarde) {
    const nieuwLiEl = document.createElement("li");
    nieuwLiEl.textContent = itemInputWaarde;
    // Niet vergeten: nieuwLiEl moet ook een Bootstrap class toegekend krijgen

    lijst.appendChild(nieuwLiEl);
  }
}
