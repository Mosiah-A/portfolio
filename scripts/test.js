
const projectjson = {
    "linkBio": {
        "nome": "Link na Bio",
        "descrição": "Uma Pagina de link na bio para ser usada em um perfio do Instagram",
        "imagempath": "images/pojetos-thumbmail/linkBio.png",
        "Tecnologias": ["HTML", "CSS"],
        "link": "https://mosiah-a.github.io/byu/"
    },
    "avengers": {
        "nome": "Pagina de login",
        "descrição": "Uma pagina de Login com o Tema dos Vingadores",
        "imagempath": "images/pojetos-thumbmail/avengers.png",
        "Tecnologias": ["HTML", "CSS"],
        "link": "https://mosiah-a.github.io/portfolio/projetos/login/index.html"
    },
    "veterinaria": {
        "nome": "Pagina Institucional de Veterinaria",
        "descrição": "Uma pagina de uma clinica veterinaria ficticia",
        "imagempath": "images/pojetos-thumbmail/veterinaria.png",
        "Tecnologias": ["HTML", "CSS"],
        "link": "https://mosiah-a.github.io/portfolio/projetos/veterinariaHomePage/"
    },
    "claro": {
        "nome": "Pagina de captura da Claro",
        "descrição": "Uma pagina de captura para direcionar clientes para o whatsapp",
        "imagempath": "images/claro.png",
        "Tecnologias": ["HTML", "CSS", "Javascript", ],
        "link": "https://xn--conexoclaro-d8a.com.br/"
    }
};


const linkBio = document.querySelectorAll(".linkBio");
const avengers = document.querySelectorAll(".avengers");
const veterinaria = document.querySelectorAll(".veterinaria");
const claro = document.querySelectorAll(".claro");
const closeModalBtn = document.getElementById("closeModal");
const modal = document.getElementById("projectModal");
const content = document.getElementById("content");

function createmodal(project) {
    const element = projectjson[project];
    const technologies = element.Tecnologias.map(tech => `<li>${tech}</li>`).join('');
    content.innerHTML = `
        <button id="closeModal">Fechar</button>
        <h3>${element["nome"]}</h3>
        <p>${element["descrição"]}</p>
        <img src="${element["imagempath"]}" alt="${element["nome"]} " width="450" loading="lazy">
        <h4>Tecnologias</h4>
        <ul>
            ${technologies}
        </ul>
        <a href="${element.link}" target="_blank" rel="noopener noreferrer">Acesse o Site</a>
    `;
    modal.showModal();

        // Adiciona listener ao botão "Fechar" dentro do modal
        document.getElementById("closeModal").addEventListener('click', () => {
            modal.close();
        });
}
linkBio.forEach(linkbio => {
    linkbio.addEventListener('click', () => {
       createmodal("linkBio")
        
    });
});

avengers.forEach(Avangers => {
    Avangers.addEventListener('click', () => {
       createmodal("avengers")
        
    });
});
veterinaria.forEach(project => {
    project.addEventListener('click', () => {
       createmodal("veterinaria")
        
    });
});
claro.forEach(project => {
    project.addEventListener('click', () => {
       createmodal("claro")
        
    });
});
