document.addEventListener("DOMContentLoaded", () => {
    const main = document.querySelector("body main");

    /* Menu Hamburguer */
    document.querySelector("header span").addEventListener("click", () => {
        document.querySelector("header").classList.toggle("menu-hamburguer");
        document.querySelector("header ul").classList.toggle("display")
    });

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

    /* Fetch Sobre */
    document.querySelector(".sobre").addEventListener("click", () => carregar("../components/sobre.html", main));
    document.querySelectorAll("footer div.fmenu ul li a")[0].addEventListener("click", () => carregar("../components/sobre.html", main));

    /* Fetch Contato */
     document.querySelector(".contato").addEventListener("click", () => carregar("../components/contato.html", main));
     document.querySelectorAll("footer div.fmenu ul li a")[1].addEventListener("click", () => carregar("../components/contato.html", main));

    /* Página Inicio */
    document.querySelector("main article.newsletter form").addEventListener("submit", (event) => {
        event.preventDefault();
        if(document.querySelector("main article.newsletter form input").value.trim() == ""){
            document.querySelector("main article.newsletter span").innerHTML = '<p>Preencha um e-mail valido.</p>';
            document.querySelector("main article.newsletter form input").value = ''
        } else {
            document.querySelector("main article.newsletter span").innerHTML = '<p>E-mail cadastrado com sucesso!</p>';
            document.querySelector("main article.newsletter form input").value = ''
        }
    })

    /* Página Contato */
    console.log(document.querySelector(".pcontato"))

})

async function carregar (component, main){
    fetch(component)
        .then((response) => {
            return response.text();
        })
        .then(html => {
            let parse = new DOMParser();
            let doc = parse.parseFromString(html, "text/html").querySelector("body").innerHTML;
            main.innerHTML = doc;
        })
}