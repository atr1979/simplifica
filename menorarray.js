let num = [8,1,5,7,2,9]
num.sort()//coloca os numeros da array de forma ordenada
Array.min = function(array){
    return Math.min.apply(Math, array)//serve para encontrar o menor valor de uma array
}
//este codigo serve para somar o valor total da array
function somar(total, numeros){
    return total + numeros
}
console.log(`este array tem ${num.length} numeros.`)
console.log(`o menor numero deste array é ${Array.min(num)}`)
console.log(`a soma deste array é ${num.reduce(somar, 0)}`)