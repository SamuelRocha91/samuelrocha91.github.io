const about = [
    {
        id: 1,
        title: 'Samuel Rocha',
        src: 'perfil.png',
        alt: 'foto de perfil',
        description: 'Desenvolvedor Web Full-Stack'
    },
    {
        id: 2,
        title: 'Profissional',
        src: 'tecnologia.jpeg',
        alt: 'foto de códigos',
        description: 'Formado em Desenvolvimento Web pela <a href="https://www.betrybe.com/">Trybe</a>, possuo projetos back-end e front-end desenvolvidos nas mais diversas tecnologias. Atualmente integro uma equipe que está desenvolvendo uma startup na área da educação, concebendo desde o seu plano de negócios, pesquisa de tecnologias, até o seu desenvolvimento enquanto código'
    },
    {
        id: 3,
        title: 'Naturalidade',
        src: 'SalvadorBonfim.jpg',
        alt: 'igreja do Bonfim, Salvador',
        description: 'Sou brasileiro, tenho 32 anos, natural da cidade de Salvador-Ba. Salvador é uma cidade tropical, superpovoada, com traços culturais tipicamente africanos, com festas e ritos que permeiam todo o calendário'
    },
    {
        id: 4,
        title: 'Perfil',
        src: 'TecnologiaeEu.jpg',
        alt: 'homem sentado na areia olhando o mar',
        description: 'Sou Cristão, pacifista, disciplinado, pontual e adaptável. Tenho como hobbies ler, correr, ir à praia e ver futebol.'
    },
]

function changeData(operation) {
    const description = document.getElementById('description');
    const title2 = document.getElementById('title');
    const image = document.getElementById('image');
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
    console.log(id)
    const newInfo = about[id - 1];
    description.innerHTML = newInfo.description;
    title2.innerText = newInfo.title;
    image.src = newInfo.src;
    image.alt = newInfo.alt;
}

window.onload = function () {
    document.getElementById('left').addEventListener('click', () => changeData('sub'));
    document.getElementById('right').addEventListener('click', () => changeData('sum'));
}