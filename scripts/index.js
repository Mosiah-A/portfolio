document.addEventListener('DOMContentLoaded', () => {
    // Get the current year
    const currentYear = new Date().getFullYear();
    // Get the last modified date
    const lastModified = document.lastModified;

    // Output the current year in the first paragraph of the footer
    document.getElementById('currentYear').textContent = `© ${currentYear}`;

    // Output the last modified date in the second paragraph of the footer
    document.getElementById('last-modified').textContent = `Last modified: ${lastModified}`;
});

const darkMode = document.getElementById("darkMode")

darkMode.addEventListener('click', () => {
    const navElements = document.getElementsByClassName('nav');
    const aElement = document.getElementsByClassName
        for (let i = 0; i < navElements.length; i++) {
            if (navElements[i].style.backgroundColor === 'black'){
                navElements[i].style.backgroundColor = '#426B69';
            }
            else{
                navElements[i].style.backgroundColor = 'black';
                navElements[i].style.color = '#B5CA8D'; 
            }
            // Adicionando cor do texto para contraste
        }
    }
)