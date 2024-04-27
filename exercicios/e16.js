module.exports = function primo() {
    let i = 0
    let numero = 100

    while (i < 50) {
        let j = 2;
        let resultado = 0;
        while ( j <= numero/2 ){
            if (numero % j == 0){
                resultado++;
                break;
            }
            j++;
        }
        if (resultado == 0){
            console.log(numero);
            i++;
        }
        numero++;
    }
}