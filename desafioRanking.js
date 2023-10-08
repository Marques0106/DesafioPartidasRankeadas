function saudacoes(){
    console.log('Saudações guerreiro!\nEstá é sua zona de save, para facilitar o processo.\nQuantas vitórias e derrotas você obteve?')
}

function calculoRanking(vitorias, derrotas){
    total = vitorias - derrotas
    if(total <=10){
        return "O herói tem saldo de "+total+" está no nível Ferro"
    }else if(total >=11 && total <= 20){
        return "O herói tem saldo de "+total+" está no nível Bronze"
    }else if(total >=21 && total <= 50){
        return "O herói tem saldo de "+total+" está no nível Prata"
    }else if(total >=51 && total <= 80){
        return "O herói tem saldo de "+total+" está no nível Ouro"
    }else if(total >=81 && total <= 90){
        return "O herói tem saldo de "+total+" está no nível Diamante"
    }else if(total >=91 && total <= 100){
        return "O herói tem saldo de "+total+" está no nível Lendário"
    }else{
        return "O herói tem saldo de "+total+" está no nível Imortal"
    }
}
let valida = true

while (valida == true){
    saudacoes()
    let qtdVitorias = prompt()
    let qtdDerrotas = prompt()
    console.log(calculoRanking(qtdVitorias, qtdDerrotas))
    var opcao = prompt('Deseja fazer uma nova checagem?\n0.NÃO\n1.SIM')
    
    switch(opcao){
        case "0":
            valida = false
            break;
       case "1":
           valida = true
            break;
        default: console.log('Opção inválida')
        
    }
}    
    