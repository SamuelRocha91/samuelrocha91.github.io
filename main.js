const about = [
    {
        id: 1,
        title: 'Samuel Rocha',
        src: './images/perfil.png',
        alt: 'foto de perfil de Samuel',
        description: 'Desenvolvedor Web Full-Stack'
    },
    {
        id: 2,
        title: 'Profissional',
        src: './images/tecnology.jpeg',
        alt: 'foto de códigos tela com códigos de programação',
        description: 'Formado em Desenvolvimento Web pela <a href="https://www.betrybe.com/" style="text-decoration: underline;">Trybe</a>, tenho experiência em projetos de front-end e back-end, utilizando diversas tecnologias modernas. Conquistei certificações pela freeCodeCamp, HackerRank e LWSA, o que reforça minha constante busca por aprendizado e aperfeiçoamento.'
    },
    {
        id: 3,
        title: 'Naturalidade',
        src: './images/cityOfSalvador.jpg',
        alt: 'igreja do Bonfim, Salvador',
        description: 'Brasileiro, 33 anos, nascido e criado em Salvador-BA: cidade vibrante, rica em cultura e tradição.'
    },
    {
        id: 4,
        title: 'Perfil',
        src: './images/sunset.jpg',
        alt: 'homem sentado na areia olhando o mar',
        description: 'Tenho como hobbies ler, correr, ir à praia e ver futebol. Gosto das coisas simples, de estar em contato com as pessoas e a natureza'
    },
]

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
    document.getElementById('left').addEventListener('click', () => changeData('sub'));
    document.getElementById('right').addEventListener('click', () => changeData('sum'));
}