let matriz = [
    [1, -2, 3, -9, -17, 7, 54, -99],
    [-3, 32, 3, 9, -17, -7, -54, -99],
    [5, 423, 3, -9, 17, 7, 54, -99],
    [6, 35, 3, 9, 17, 7, 54, 99],
    [-23, 55, 3, 9, 17, 7, -54, -99],
    [-12, -76, -3, -9, -17, -7, -54, -99]
]

let C = Array()
matriz.forEach(linha => {
    let lNeg = 0
    linha.forEach(item => {
        if(item < 0){
            lNeg++
        }
    })
    C.push(lNeg);
})

console.log(C);