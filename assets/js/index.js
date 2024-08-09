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
    document.querySelector(".sobre").addEventListener("click", () => carregar("https://raw.githubusercontent.com/victorpasson/-praTi-M1/atividade4/components/sobre.html", main));
    document.querySelectorAll("footer div.fmenu ul li a")[0].addEventListener("click", () => carregar("https://raw.githubusercontent.com/victorpasson/-praTi-M1/atividade4/components/sobre.html", main));

    /* Fetch Contato */
     document.querySelector(".contato").addEventListener("click", async () => {
        await carregar("https://raw.githubusercontent.com/victorpasson/-praTi-M1/atividade4/components/contato.html", main)
    });
     document.querySelectorAll("footer div.fmenu ul li a")[1].addEventListener("click", () => carregar("https://raw.githubusercontent.com/victorpasson/-praTi-M1/atividade4/components/contato.html", main));

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
        .then(() => processContato())
}

const processContato = () => {
    const mensagem = document.querySelector("div.pcontato form span");

    const CMain = document.querySelector("body div.container main div.envio");

    document.querySelector('div.pcontato form').addEventListener('submit', (event) => {
        event.preventDefault();

        const nome = document.querySelector("div.pcontato form input[name='name']");
        const email = document.querySelector("div.pcontato form input[name='email']");
        const assunto = document.querySelector("div.pcontato form input[name='assunto']");
        const mensagemt = document.querySelector("div.pcontato form textarea");

        if(nome.value.trim() == "" || email.value.trim() == "" || assunto.value.trim() == "" || mensagemt.value.trim() == "") {
            mensagem.innerHTML = "Todos os campos devem ser preenchidos."
            return 0;
        }

        const juntos = {
            nome: nome.value,
            email: email.value,
            assunto: assunto.value,
            mensagem: mensagemt.value
        }


        let arrayL = JSON.parse(window.localStorage.getItem("contato"));

        if(arrayL) {
            arrayL.push(juntos);
            window.localStorage.setItem("contato", JSON.stringify(arrayL))
        } else {
            window.localStorage.setItem("contato", JSON.stringify([juntos]))
        }

        nome.value = "";
        email.value = "";
        assunto.value = "";
        mensagemt.value = "";

        LoadComments();

    })

    if(JSON.parse(window.localStorage.getItem("contato")).length == 0){
        CMain.innerHTML = "Sem envios..."
    } else {
        LoadComments();
    }
}

const LoadComments = () => {
    const CMain = document.querySelector("body div.container main div.envio");

    const Cdiv = document.createElement("div");
    Cdiv.classList.add("CommentClass");

    const CArray = JSON.parse(window.localStorage.getItem('contato'));

    CArray.forEach((item, index) => {
        const CItem = document.createElement("div");
        CItem.classList.add("CommentItem");
        CItem.setAttribute("data-index", index)

        let titulo = document.createElement("h3");
        titulo.innerText = item.assunto;

        let autor = document.createElement("p");
        autor.classList.add("autor");
        autor.innerText = item.nome;

        let mensagem = document.createElement("p");
        mensagem.classList.add("mensagem");
        mensagem.innerText = item.mensagem;

        let exclude = document.createElement("p");
        exclude.classList.add("exclude");
        exclude.classList.add("material-symbols-outlined");
        exclude.innerText = "close"
        exclude.addEventListener("click", () => removerItem(index));

        CItem.appendChild(titulo);
        CItem.appendChild(autor);
        CItem.appendChild(mensagem);
        CItem.appendChild(exclude);

        Cdiv.appendChild(CItem);
    })

    CMain.innerHTML = "";
    CMain.appendChild(Cdiv);
}

const removerItem = (indexf) => {
    const CArray = JSON.parse(window.localStorage.getItem('contato'));

    const CMain = document.querySelector("body div.container main div.envio");

    const NArray = CArray.filter((item, index) => index != indexf);

    window.localStorage.setItem("contato", JSON.stringify(NArray));

    if(JSON.parse(window.localStorage.getItem("contato")).length == 0){
        CMain.innerHTML = "Sem envios..."
    } else {
        LoadComments();
    }

}