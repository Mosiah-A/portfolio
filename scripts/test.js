const projectImages = document.querySelectorAll('img');
const projectModal = document.getElementById('projectModal');
const closeModalBtn = document.getElementById('closeModal');

projectImages.forEach((img) => {
    img.addEventListener('click', () => {
        projectModal.showModal();
    });
});

closeModalBtn.addEventListener('click', () => {
    projectModal.close();
});
