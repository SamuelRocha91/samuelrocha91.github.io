

const translations = {
    en: "lang/en.json",
    es: "lang/es.json",
    ru: "lang/ru.json",
    pt: "lang/pt.json",
    ch: "lang/ch.json"
};

function changeLanguage(language) {
    fetch(translations[language])
        .then(response => response.json())
        .then(data => {
            document.querySelectorAll('[data-translate]').forEach(el => {
                const key = el.getAttribute('data-translate');
                el.innerHTML= data[key] || key;
            });
        });
}


function changeData(operation) {
    const description = document.getElementById('description');
    const title2 = document.getElementById('title');
    const image = document.getElementById('image');
    
    const newId = generateId(operation, title2)

    const newInfo = about[newId - 1];
    
    description.innerHTML = newInfo.description;
    title2.innerText = newInfo.title;
    image.src = newInfo.src;
    image.alt = newInfo.alt;
}

function generateId(operation, title2) {
    let id = about.find(({title}) => title == title2.innerText).id;
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
    changeLanguage('pt'); 
    document.getElementById('left').addEventListener('click', () => changeData('sub'));
    document.getElementById('right').addEventListener('click', () => changeData('sum'));
}