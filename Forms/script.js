function ex_01(){

    var text = document.getElementById("comentarios").value;

    var resto = 150- text.length;
    document.getElementById("info").innerText= `Restam ${resto} caracteres.`;

}

// function ex_02(){
//     var number = document.getElementById("volume").value;
//     document.getElementById("info").innerText= number;
// }

function enviar() {
    var senha1 = document.getElementById("senha").value;
    var senha2 = document.getElementById("c_senha").value;
    var nome1 = document.getElementById("first_name").value;
    var nome2 = document.getElementById("last_name").value;
    var comment =document.getElementById("comentarios").value;

    if (senha1 == senha2){
        document.getElementById("result").innerText = `Nome completo: ${nome1} ${nome2} 
        Comentário: ${comment}`;
    }
    else{
        document.getElementById("result").innerText= `As senhas estão diferentes`;
    }

}