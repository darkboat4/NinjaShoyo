export function Capitulo(numero_do_cap, qtd_de_pags) {
    
    this.numero_do_cap = numero_do_cap < 100 
        ? numero_do_cap.toString().padStart(2, "0") 
        : numero_do_cap.toString().padStart(3, "0");

    this.qtd_de_pags = qtd_de_pags;

    this.criar_cap = function() {
        let manga = document.querySelector('.manga');

        for (let i = 0; i < this.qtd_de_pags; i++) {
            let img_manga = document.createElement('img');
            img_manga.classList.add("pag");

            // Formatar número da página sempre com 3 dígitos
            let num_pagina = (i + 1).toString().padStart(3, "0");

            // Definir caminho correto da imagem
            img_manga.src = `../../img/HaikyuuCapitulo${this.numero_do_cap}/HaikyuuCapitulo${this.numero_do_cap}_${num_pagina}.jpg`;

            manga.appendChild(img_manga);
        }
    };
}
