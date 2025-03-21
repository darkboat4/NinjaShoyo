function criaManga(num_cap, num_pags){
    
    num_cap = num_cap < 100 
        ? num_cap.toString().padStart(2, "0") 
        : num_cap.toString().padStart(3, "0");

        let manga = document.querySelector('.manga');

        for (let i = 0; i < num_pags; i++) {
            let img_manga = document.createElement('img');
            img_manga.classList.add("pag");

            // Formatar número da página sempre com 3 dígitos
            let num_pagina = (i + 1).toString().padStart(3, "0");

            // Definir caminho correto da imagem
            img_manga.src = `../../img/HaikyuuCapitulo${num_cap}/HaikyuuCapitulo${num_cap}_${num_pagina}.jpg`;

            manga.appendChild(img_manga);

        }
};
const num_pages = [
    /* Capítulo 1 */ 51, /* Páginas */
    /* Capítulo 2 */ 25, /* Páginas */
    /* Capítulo 3 */ 23, /* Páginas */
];
// Função para pegar os parâmetros da URL
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    const num_cap = params.get('cap');  // Número do capítulo

    if (num_cap) {
        criaManga(parseInt(num_cap), num_pages[num_cap - 1]);
    } else {
        console.log("Parâmetros não encontrados!");
    }

}
// Chama a função para pegar os parâmetros da URL e construir as imagens
getQueryParams();


