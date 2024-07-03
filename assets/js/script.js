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