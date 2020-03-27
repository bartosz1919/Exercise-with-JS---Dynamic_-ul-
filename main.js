let size = 10;
let orderElement = 1;

const init = () => {
    const btn = document.createElement("Button");
    const btnReset = document.createElement("Button");
    btn.innerText = "Dodaj";
    btnReset.innerText = "Reset";
    document.body.appendChild(btn);
    document.body.appendChild(btnReset);
    const list = document.createElement("ul");
    document.body.appendChild(list);

    btn.addEventListener(`click`, createLiElements);
    btnReset.addEventListener('click', resetValue);

}

const createLiElements = () => {
    console.log(`dupa`);

    for (let i = 0; i < 10; i++) {
        const li = document.createElement(`li`);
        li.innerText = "Element nr" + orderElement;
        const ul = document.querySelector(`ul`);
        ul.appendChild(li);
        orderElement++;
        li.style.fontSize = `${size++}px`;

    }

}


const resetValue = () => {
    const ul = document.querySelector('ul').innerText = "";
    orderElement = 1;
    size = 10;


}

init()