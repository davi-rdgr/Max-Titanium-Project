// Obtendo uma referência ao elemento article
// const articleElement = document.querySelector('.main-card');

// Usando fetch para obter os dados do arquivo JSON
fetch('/dados.json')
    .then(response => response.json())
    .then(dados => {
        // Iterando sobre o array de dados e preenchendo os elementos dentro do article
        dados.forEach(dado => {
            // Criando elementos para cada propriedade do dado
            const articleElement = document.createElement('article')
            const imgElement = document.createElement('img');
            const indiceElement = document.createElement('span');
            const tituloElement = document.createElement('h2');
            const paragrafoElement = document.createElement('p');
            const mainWdtElement = document.createElement('mainWdt');

            articleElement.className = 'main-card';
            imgElement.className = 'card-image'
            indiceElement.className = 'card-indice'
            tituloElement.className = 'card-titulo'
            paragrafoElement.className = 'card-paragrafo'
            mainWdtElement.className = 'mainWdt'

            document.body.appendChild(articleElement);

            imgElement.src = dado.imagem;
            indiceElement.textContent = dado.indice;
            tituloElement.textContent = dado.titulo;
            paragrafoElement.textContent = dado.paragrafo;

            // Adicionando os elementos ao article
            articleElement.appendChild(imgElement);
            articleElement.appendChild(indiceElement);
            articleElement.appendChild(tituloElement);
            articleElement.appendChild(paragrafoElement);
        });
    })
    .catch(error => console.error('Erro ao obter dados:', error));

// abrir e fechar botão hamburguer:
const menuButton = document.querySelector('.header-button');
const menu = document.querySelector('.header-menu');

let menuOpen = false;
menuButton.addEventListener('click', () => {
    if (!menuOpen) {
        menuButton.classList.add('open');
        menu.style.display = 'block';
        menuOpen = true;
    } else {
        menuButton.classList.remove('open');
        menu.style.display = 'none';
        menuOpen = false;
    }
});
