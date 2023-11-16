// Obtendo uma referência ao elemento article
const mainCard = document.querySelector('.main-card');
// Usando fetch para obter os dados do arquivo JSON
fetch('/dados.json')
    .then(response => response.json())
    .then(dados => {
        // Iterando sobre o array de dados e preenchendo os elementos dentro do article
        dados.forEach(dado => {
            // Criando elementos para cada propriedade do dado
            const articleElement = document.createElement('article');
            const imgElement = document.createElement('img');
            const ContentWdtElement = document.createElement('div')
            const indiceElement = document.createElement('span');
            const tituloElement = document.createElement('h2');
            const paragrafoElement = document.createElement('p');
            const contentSeeElement = document.createElement('div');
            const spanSeeElement = document.createElement('span');
            const imgSeeElement = document.createElement('img');
            const sectionElement = document.querySelector('.section-main');


            articleElement.className = 'main-card';
            imgElement.className = 'card-image';
            ContentWdtElement.className = 'content-wdt'
            indiceElement.className = 'card-indice';
            tituloElement.className = 'card-titulo';
            paragrafoElement.className = 'card-paragrafo';
            contentSeeElement.className = 'content-seemore';
            spanSeeElement.className = 'card-seemore';
            imgSeeElement.className = 'card-seemoreImage';

            imgElement.src = dado.imagem;
            indiceElement.textContent = dado.indice;
            tituloElement.textContent = dado.titulo;
            paragrafoElement.textContent = dado.paragrafo;


            sectionElement.appendChild(articleElement);
            articleElement.appendChild(imgElement);
            articleElement.appendChild(ContentWdtElement);
            ContentWdtElement.appendChild(indiceElement);
            ContentWdtElement.appendChild(tituloElement);
            ContentWdtElement.appendChild(paragrafoElement);
            ContentWdtElement.appendChild(contentSeeElement);
            contentSeeElement.appendChild(spanSeeElement);
            contentSeeElement.appendChild(imgSeeElement);


            imgSeeElement.src = '/svg/setaDireita.svg';
            spanSeeElement.innerText = 'Leia mais';

        });

        // Adicionar sectionElement ao corpo do documento fora do loop
        document.body.appendChild(sectionElement);
    })
    .catch(error => console.error('Erro ao obter dados:', error));

// Abrir e fechar botão hamburguer:
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