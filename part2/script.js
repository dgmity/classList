function changeBackground() {
    const text = document.getElementById("tekst");
    text.classList.toggle("background");
}

function changeSize() {
    const text = document.getElementById("tekst");
    text.classList.toggle("text-size");
}

function changeStyle() {
    const text = document.getElementById("tekst");
    text.classList.toggle("font-style");
}

function changeDecoration() {
    const text = document.getElementById("tekst");
    text.classList.toggle("font-decoration");
}

function removeStyle() {
    const text = document.getElementById("tekst");
    text.classList.remove("background", "font-style", "text-size", "font-decoration");
}