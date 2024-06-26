function SemNulosNegativos (vetor){
    let vetorb = vetor.filter(item => item > 0);
    return vetorb; 
}

console.log(SemNulosNegativos([1, 2, -1, 3, 6, 0, -10, 9]));