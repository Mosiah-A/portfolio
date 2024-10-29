
projectjson = {
    "linkBio": {
        "nome": "Link na Bio",
        "descrição": "Uma Pagina de link na bio para ser usada em um perfio do Instagram",
        "imagempath": "images/pojetos-thumbmail/linkBio.png",
        "Tecnologias": ["HTML", "CSS"]
    }
}

const projectImgs = document.querySelectorAll(".linkBio");
const closeModalBtn = document.getElementById("closeModal");
const modal = document.getElementById("projectModal");
const content = document.getElementById("content");

projectImgs.forEach(linkbio => {
    linkbio.addEventListener('click', () => {
        const element = projectjson["linkBio"];
        content.innerHTML = `
            <button id="closeModal">Fechar</button>
            <h3>${element["nome"]}</h3>
            <p>${element["descrição"]}</p>
            <img src="${element["imagempath"]}" alt="${element["nome"]} " width="450">
        `;
        modal.showModal();

        // Adiciona listener ao botão "Fechar" dentro do modal
        document.getElementById("closeModal").addEventListener('click', () => {
            modal.close();
        });
    });
});
