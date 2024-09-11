import about from "./data/data";

function changeData(operation) {
    const description = document.getElementById('description');
    const title2 = document.getElementById('title');
    const image = document.getElementById('image');
    
    const newId = generateId(operation)

    const newInfo = about[id - 1];
    
    description.innerHTML = newInfo.description;
    title2.innerText = newInfo.title;
    image.src = newInfo.src;
    image.alt = newInfo.alt;
}

function generateId(operation, title) {
    let id = about.find(({titleAbout}) => titleAbout == title.innerText).id;
    if (operation == 'sum') {
        id += 1
    } else {
        id -= 1
    }
    if (id == 0) {
        id = 4
    }
    if (id > 4) {
        id = 1
    }
    return id
}

window.onload = function () {
    document.getElementById('left').addEventListener('click', () => changeData('sub'));
    document.getElementById('right').addEventListener('click', () => changeData('sum'));
}