/* 
Codigo de validação de formulario de login
*/
function Validar(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('subject').value;
    if(!email || !password){
     alert("Campos de preenchimento obrigatorio.favor preencher");
    }
    else{
     alert("campos preenchidos com sucesso")
    }
 
 
 }