// Obtendo uma referência ao elemento article
const articleElement = document.querySelector('.main-card');

// Usando fetch para obter os dados do arquivo JSON
fetch('/dados.json')
    .then(response => response.json())
    .then(dados => {
        // Iterando sobre o array de dados e preenchendo os elementos dentro do article
        dados.forEach(dado => {
            // Criando elementos para cada propriedade do dado
            const imgElement = document.createElement('img');
            const indiceElement = document.createElement('span');
            const tituloElement = document.createElement('h2');
            const paragrafoElement = document.createElement('p');

            // Preenchendo os elementos com os valores do dado
            imgElement.src = dado.imagem;
            indiceElement.textContent = dado.indice;
            tituloElement.textContent = dado.titulo;
            paragrafoElement.textContent = dado.paragrafo;

            // Adicionando os elementos ao article
            articleElement.appendChild(imgElement);
            articleElement.appendChild(indiceElement);
            articleElement.appendChild(tituloElement);
            articleElement.appendChild(paragrafoElement);

            // Adicionando a parte visual dos cards com DOM

            // article:
            articleElement.style.display = 'flex'
            articleElement.style.alignItems = 'center'
            // image:
            imgElement.style.height = '242px';
            imgElement.style.width = 'inherit';

            // span:
            indiceElement.style.color = '#F4323F';
            indiceElement.style.fontFamily = "'Work Sans', Sans Serif";
            indiceElement.style.fontWeight = '700'
            indiceElement.style.fontSize = '70%'
            indiceElement.style.letterSpacing = '.05em'
            indiceElement.style.textTransform = 'Uppercase'
            indiceElement.style.width = '300px'

            // h2:
            tituloElement.style.color = '#2D3748'
            tituloElement.style.width = '300px'

            // parágrafo
            paragrafoElement.style.color = '#1A202C'
            paragrafoElement.style.fontFamily = "'Work Sans', Sans Serif"
            paragrafoElement.style.fontStyle = 'normal'
            paragrafoElement.style.fontWeight = '400'
            paragrafoElement.style.fontSize = '17px'
            paragrafoElement.style.lineHeight = '1.6'
            paragrafoElement.style.width = '300px'
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
