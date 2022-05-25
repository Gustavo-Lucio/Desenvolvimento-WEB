function at_01(){
    var num1 = Number( window.prompt("Informe o valor número: "));
    

    if(num1 % 2 == 0)  {
        document.getElementById("result").innerHTML = "O número é divisível por 2";
    }

    if(num1 % 7 == 0)  {
        document.getElementById("result").innerHTML = "O número é divisível por 7";
    }  
 
    if(num1 %2 != 0 && num1 %7 != 0)  {
        document.getElementById("result").innerHTML = "O número não é divisível por 2 e 7";    
    }
    
    if(num1 %2 == 0 && num1 %7 == 0)  {
        document.getElementById("result").innerHTML = "O número é divisível por 2 e 7";    
    }
    
}

function at_02(){
    var num_at_02 = Number (window.prompt("Informe um valor entre 1 e 7: ")); 
   
    switch(num_at_02){
        case 1 :
            document.getElementById("result").innerHTML = "Número digitado refere-se a Domingo!";
        break;
       
        case 2 :
            document.getElementById("result").innerHTML = "Número digitado refere-se a Segunda-Feira!";
        break;

        case 3 :
            document.getElementById("result").innerHTML = "Número digitado refere-se a Terça-Feira!";
        break;

        case 4 :
            document.getElementById("result").innerHTML = "Número digitado refere-se a Quarta-Feira!";
        break;

        case 5 :
            document.getElementById("result").innerHTML = "Número digitado refere-se a Quinta-Feira!";
        break;

        case 6 :
            document.getElementById("result").innerHTML = "Número digitado refere-se a Sexta-Feira!";
        break;
        
        case 7 :
            document.getElementById("result").innerHTML = "Número digitado refere-se a Sábado!";
        break;
        default  :
            document.getElementById("result").innerHTML = "Número digitado inválido!";
    
    }

}
    function at_03(){
        var num_at_03 = Number (window.prompt("Informe um valor para multiplicar: ")); 

        var x1 = num_at_03*1;
        var x2 = num_at_03*2;
        var x3 = num_at_03*3;
        var x4 = num_at_03*4;
        var x5 = num_at_03*5;
        var x6 = num_at_03*6;
        var x7 = num_at_03*7;
        var x8 = num_at_03*8;
        var x9 = num_at_03*9;
        var x10 = num_at_03*10;

        document.getElementById("result").innerHTML = "Tabuada: " +num_at_03+" x 1 = " +x1+ ", "
                                                                 +num_at_03+" x 2 = " +x2+ ", "
                                                                 +num_at_03+" x 3 = " +x3+ ", "
                                                                 +num_at_03+" x 4 = " +x4+ ", "
                                                                 +num_at_03+" x 5 = " +x5+ ", "
                                                                 +num_at_03+" x 6 = " +x6+ ", "
                                                                 +num_at_03+" x 7 = " +x7+ ", "
                                                                 +num_at_03+" x 8 = " +x8+ ", "
                                                                 +num_at_03+" x 9 = " +x9+ ", "
                                                                 +num_at_03+" x 10 = " +x10+ ".";    
    
}

function at_04(){
    var num_at_04 = Number (window.prompt("Informe a quantidade de copias: ")); 

    if(num_at_04 <= 100){
        var resultless100 = num_at_04*0.25;
        document.getElementById("result").innerHTML = `O valor a ser pago será de R$ ${resultless100.toFixed(2)} com o valor por copia de R$ 0.25.`;
    }
    else{
        var resultmore100 = num_at_04*0.20;
        
        document.getElementById("result").innerHTML = `O valor a ser pago será de R$ ${resultmore100.toFixed(2)} com o valor por copia de R$ 0.20.`;
    }

}

function at_05(){
    var salario = Number (window.prompt("Informe seu Salário: R$"));
    var financiamento = Number (window.prompt("Informe o valor do financiamento: "));

    var result_fin = financiamento/5;

    if (result_fin <= salario){
        document.getElementById("result").innerHTML = `Financiamento Concedido. Obrigado por nos Consultar`;
    }
    else{
        document.getElementById("result").innerHTML = `Financiamento Negado. Obrigado por nos Consultar`;  
    }

}