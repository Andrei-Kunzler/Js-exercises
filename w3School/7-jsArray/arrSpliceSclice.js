//Usando Splice para adicionar itens em um array:

const arr = [1,2,3,4]
arr.splice(0,0,"manga")
console.log(arr)

//O metodo Splice MODIFICA o array original
/*
    The first parameter (2) defines the position where new elements should be added (spliced in).
    The second parameter (0) defines how many elements should be removed.
    The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
    The splice() method returns an array with the deleted items:
 */

// Com a configuração inteligente de parâmetros, você pode usar splice() para remover elementos sem deixar "buracos" no array:

const fruits = ['pera','banana','kiwi','amora']
fruits.splice(0,1)
console.log(fruits)

/*
    The first parameter (0) defines the position where new elements should be added (spliced in).
    The second parameter (1) defines how many elements should be removed.
    The rest of the parameters are omitted. No new elements will be added.
*/

//SLICE  - O método slice() divide um pedaço de um array em um novo array.
const fruits2 = ['pera','banana','kiwi','amora']
const arrSlice = fruits2.slice(0,2)
console.log('novoArray slice do index 0 ao 2 >>', arrSlice)
/*
    Note
    The slice() method creates a new array.
    The slice() method does not remove any elements from the source array.
*/

//o slice o primeiro parametro é obrigatório, o segundo se vazio considera o fechamento no final do array
