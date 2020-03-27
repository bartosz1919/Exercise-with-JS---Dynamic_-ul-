let size = 10;
let orderElement = 1;

const init = () => {
    const btn = document.createElement("Button");
    btn.innerText = "Dodaj";
    document.body.appendChild(btn);
    const list = document.createElement("ul");
    document.body.appendChild(list);

    btn.addEventListener(`click`, createLiElements);

}

const createLiElements = () => {
    // tutaj kod
}

init()