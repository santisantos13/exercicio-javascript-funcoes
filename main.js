const prompt = require ("prompt-sync")()

function boasVindas(){
    console.log("Bem vindo ao Sistema Escolar!")
}

function mostrarCurso(){
    console.log("Curso: Desenvolvimento de Sistema\nInstituição: Escola de Tecnologia")
}

function saldarAluno(nome){
    console.log("Olá " + nome + "! Seja bem vindo!")
}

function mostrarAluno(nome, curso){
    console.log("Aluno: ", nome)
    console.log("Curso:", curso )

}

boasVindas()
mostrarCurso()
saldarAluno("Juarez")
mostrarAluno("Juarez", "TI")
console.log("---------------------------------------------")

function calcularMedia(nota1, nota2){
    nota1 = Number(prompt("Digite um número: "))
    nota2 = Number(prompt("Digite um número: "))
    media = (nota1 + nota2) / 2
    console.log("Média do Auno : " + media)
    
}
calcularMedia()
console.log("---------------------------------------------")

function adicionarPontos(notaOriginal, pontoExtras){
    notaOriginal = Number(prompt("Qual a nota original?: "))
    pontoExtras =  Number(prompt("Quantos pontos quer adicionar?: "))
    notaAtualizada = notaOriginal + pontoExtras
    console.log("Nota atualizada : " +  notaAtualizada)
}
adicionarPontos()
console.log("---------------------------------------------")


function verificarAprovacao(media){
    media = Number(prompt("Nota média do aluno: "))
    if(media >= 60){
        console.log("Aluno aprovado!")
    }else{
        console.log("Aluno reprovado!")
    }
}
verificarAprovacao()
console.log("---------------------------------------------")

function classificarAluno(nota){
    nota = Number(prompt("Digite a nota do aluno: "))
    if(nota >= 90){
        console.log("Classificação: Excelente")
    }else if(nota >= 70){
        console.log("Classificação: Bom")
    }else if(nota >= 60){
        console.log("Classificação: Regular")
    }else{
        console.log("Classificação: Insuficiente")
    }
}
classificarAluno()
console.log("---------------------------------------------")

function calcularMensalidade(valor){
    const desconto = 0.10
    const precoFinal = valor - (valor * desconto)
    return precoFinal
}   
let valorFinal = calcularMensalidade(500)
console.log("Valor com desconto: "+ valorFinal)
console.log("---------------------------------------------")

function avaliarAluno(nome, nota1, nota2){
    nome = prompt("Digite o nome do aluno: ")
    nota1 = Number(prompt("Digite a nota do aluno: "))
    nota2 = Number(prompt("Digite a 2º nota do aluno: "))
    media =( nota1 + nota2) / 2
    
    if(media >= 60){
        situacao = "Aprovado"
    }else{
        situacao = "Reprovado"
    }

    console.log("Aluno : " + nome)
    console.log("Média : " + media)
    console.log("Situaçao : " + situacao)
}

avaliarAluno()