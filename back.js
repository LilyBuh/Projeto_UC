
// Dados de quem acesar
let login;
let senha;
let Aviso;
let AvisoVF = false;

function confirmar(){
    login = document.getElementById("loginDigita").value;
    document.getElementById("Nome").innerHTML=login;
    
    senha = document.getElementById("AgenciaDigital").value;
    document.getElementById("Agencia").innerHTML=senha;

    document.getElementById("loginDigita").value = "";
    document.getElementById("AgenciaDigital").value = "";

// Usando Loop

for (let i = 0; i < 1; i++) {
    if(!AvisoVF){
        alert("Bem Vindo de volta " + login);
        AvisoVF = true;
    }
  }
}

// Parte empréstimo 
let msg;
let NumEmprestimo = 0;
let ValorDesejado;
const valores = [1000, 2000, 3000];

function emprestimo(){ 
    msg = prompt("Escolha um dos valores \n 1 - 1000 \n 2 - 2000 \n 3 - 3000 \n 4 - Outro valor");

    if(msg == 1){
NumEmprestimo += valores[0];
}
else if(msg == 2){
    NumEmprestimo += valores[1];
}
else if(msg == 3){
    NumEmprestimo += valores[2];
}
else if(msg == 4){
   ValorDesejado = Number(prompt("Digite o valor Desejado"));
   valores.push(ValorDesejado);
   NumEmprestimo += valores[3];
}
else{
    alert("Número errado. Escolha Novamente.");
}

//Porcentagem e Total a ser pago
let Porcento = 0;
let Juros = 0;
let Total = 0;

if(NumEmprestimo<=2000){
Porcento = 0.05;
}
else if (NumEmprestimo >=3000 && NumEmprestimo<=7000){
    Porcento = 0.1;
}
else if (NumEmprestimo > 7001){
    Porcento = 0.2;
}

Juros = (NumEmprestimo*Porcento);
Total = (NumEmprestimo + Juros);

//Documentação
document.getElementById("valorempresti").innerHTML=NumEmprestimo;
document.getElementById("porcentagem").innerHTML=Porcento + "%";
document.getElementById("totalpagar").innerHTML=Total;
}

//Financiamento 
let ValorFin = 0;
let Porcento2 = 0;
let Juros2 = 0;
let Total2 = 0;

function financiamento(){
ValorFin = Number(prompt("Digite o valor do Financiamento"));


if(ValorFin>= 10000 && ValorFin<=20000){
Porcento2 = 0.05
}
else if(ValorFin>= 20001 && ValorFin<=30000){
Porcento2 = 0.1
}
else if(ValorFin>= 30001){
Porcento2 = 0.2
}
else{
    Porcento2 = 0.100
}


//Juros e Total
Juros2 = (ValorFin * Porcento2);
Total2 = (ValorFin + Juros2);

// Documentação
document.getElementById("valorfinan").innerHTML=ValorFin;
document.getElementById("juros").innerHTML=Juros2;
document.getElementById("totalpagar2").innerHTML=Total2;
}

function itau(){
    alert("Banco T.I é Itau")
}