// o sort ordena um array numericamente.
const fruits = ['banana','pera','laranja','manga']
console.log('ordenar string >>>',fruits.sort())

/*
    revertendo um array  - o methodo reverse() reverte os elementos do array
    Você pode usalo para organizar um array em ordem decrescente
*/
console.log('ordenar string reverse >>>',fruits.reverse())

/*
    por padrão, o sort(), organiza valores string. (funciona bem com palavras)
    contudo, se numeros são organizados como string, "25" é maior que "100" por que "2" é maior que "1".
    por isso o metodo sort vai produzir resultados incorretos ao organizar números

    Você pode corrigir isso fornecendo uma função de comparação: 
*/
const points = [40,100,1,5,25,10]
console.log('ordenar numbers >>>',points.sort(function(a,b){return a - b}))

/*
    use o mesmo caminho para organizar um array de forma decrescente.
*/
console.log('ordenar numbers reverse >>>',points.sort((a,b)=>{return b-a}))

/*
    A FUNÇÂO DE COMPARAÇÂO

    A finalidade da função de comparação é definir uma ordem de classificação alternativa.
    A função de comparação deve retornar um valor negativo, zero ou positivo, dependendo dos argumentos: 
    function(a, b){return a - b}

    Quando a função sort() compara dois valores, ela envia os valores para a função de comparação e classifica os valores de acordo com o valor retornado (negativo, zero, positivo).

    Se o resultado for negativo, a é ordenado antes de b.
    Se o resultado for positivo, b é ordenado antes de a.
    Se o resultado for 0, nenhuma alteração será feita com a ordem de classificação dos dois valores. 

    Exemplo:

    A função compare compara todos os valores na matriz, dois valores por vez (a, b).
    Ao comparar 40 e 100, o método sort() chama a função compare(40, 100).
    A função calcula 40 - 100 (a - b) e, como o resultado é negativo (-60), a função de classificação classificará 40 como um valor menor que 100.
    Você pode usar este snippet de código para experimentar a classificação numérica e alfabética: 
*/