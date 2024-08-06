document.addEventListener("DOMContentLoaded", () => {

    /* Menu Hamburguer */
    document.querySelector("header span").addEventListener("click", () => {
        document.querySelector("header").classList.toggle("menu-hamburguer")
    })

    /* Rolagem */
    const conteudo = document.querySelector("article.carrossel div.c-conteudo");
    const prev = document.querySelector("article.carrossel div.c-container .prev");
    const next = document.querySelector("article.carrossel div.c-container .next");

    prev.addEventListener("click", () => {
        conteudo.scrollLeft -= 300; 
    })

    next.addEventListener("click", () => {
        conteudo.scrollLeft += 300; 
    })
})