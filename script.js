//Não precisa definir o parametro, cria uma variavel e concatena com o parametro
function insert(nume){
    var number = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = number + nume
}
//chama o id e retorna uma string vazia
function deletar(){
    document.getElementById('result').innerHTML = "";
}

function back(){
    var resultado = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = resultado.substring(0, resultado.length - 1)
}

function calcular(){
    var calcular = document.getElementById('result').innerHTML;
    if(calcular){
        document.getElementById('result').innerHTML = eval(calcular)
    }
}