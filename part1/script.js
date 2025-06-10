function dodajBlur() {
  const obraz = document.getElementById("obrazek");
  obraz.classList.toggle("blur");
}

function usunEfekty() {
  const obraz = document.getElementById("obrazek");
  obraz.classList.remove("blur", "szary");
}

function zamienNaSzary() {
  const obraz = document.getElementById("obrazek");
  obraz.classList.toggle("szary");
}
