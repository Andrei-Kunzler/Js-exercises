const arr = ['canto','bateria','guitarra']
let value = 'canto'
/*
console.log('arr',arr)

//includes e indexOf
const getIndexOfValue = function(value,arr){
    return arr.includes(value) ? arr.indexOf(value) : null
}

console.log('encontrando o index>>>',getIndexOfValue(value,arr))

//shift seleciona o primeiro elemento do array + DELETE apaga
delete arr.shift()      
console.log('shift+del',arr)

// pop seleciona o ultimo elemento do array + DELETE apaga
delete arr.pop()       
console.log('pop+del',arr)

//unshift add um elemento no primeiro indice (desloca todos os elementos que já estavam no array)
arr.unshift('cajon')   
console.log('unshift',arr)

//push add um elemento no final do array
arr.push('abralas')    
console.log('push',arr)

console.log('length',arr.length)
*/

//CONCAT 
console.log(JSON.stringify(arr.concat(['gato','pato'],['arvore','pasto'])))
//The concat() method does not change the existing arrays. It always returns a new array.
//The concat() method can take any number of array arguments:
console.log(JSON.stringify(arr.concat('gato')))
//The concat() method can also take strings as arguments: