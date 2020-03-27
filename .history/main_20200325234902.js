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
    console.log(`dupa`);

    for (let i = 0; i < 10; i++) {
        const li = document.createElement(`li`);
        li.innerText = "Element nr" + orderElement;
        const ul = document.querySelector(`ul`);
        ul.appendChild(li);
        orderElement++;

    }

}

init()