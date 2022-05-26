const botaoSubmit = document.getElementById("btnEnviar")

function validaCampos(){

    
    const campos = document.querySelectorAll("input[type='text'],input[type='email'],input[type='date']")
    
    for(let x = 0; x < campos.length ; x++ ){
        if(campos[x].value == ''){
            alert('O CAMPO : ' + campos[x].name + ' não foi preenchido!')
            return
        }
    }

    for(let x = 0; x < campos.length ; x++ ){
        if(campos[x].value != ''){
            alert('O cadastro foi realizado com sucesso!')
            return
        }
    }
    
    
    document.querySelector(".cadastro").submit()
}


botaoSubmit.addEventListener("click", validaCampos)
