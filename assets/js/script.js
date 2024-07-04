document.addEventListener("DOMContentLoaded", () => {
    let articles = document.querySelectorAll(".carrossel main article");
    let count = 0;
    changeCarrossel(count, articles);

    document.querySelector(".next").addEventListener("click", () => {
        if((count + 3) < articles.length){
            count++
        }else{
            count = 0
        }
        changeCarrossel(count, articles);
    })

    document.querySelector(".back").addEventListener("click", () => {
        if((count - 2) < 0){
            count = 0
        }else{
            count--
        }
        changeCarrossel(count, articles);
    })

    document.querySelector("form").addEventListener("submit", (e) => {
        e.preventDefault();

        let p = document.createElement("p");
        p.innerText = "Enviado com sucesso!";
        p.style.marginBottom = "24px";
        document.querySelector("form").prepend(p);
        document.querySelector("form input[type=email]").disabled = true;
        document.querySelector("form input[type=submit]").disabled = true;
        document.querySelector("form input[type=text]").disabled = true;
        document.querySelector("form textarea").disabled = true;

    })
})

function changeCarrossel(contador, articles){
    for (let i = 0; i < articles.length; i++){
        if(i >= contador && i < (contador + 3)){
            articles[i].style.display = "inline-block";
        } else {
            articles[i].style.display = "none";
        }
    }

}