/* Verificar CPF */

function fMasc(objeto, mascara) {
    obj = objeto
    masc = mascara
    setTimeout("fMascEx()", 1)
}

function fMascEx() {
    obj.value = masc(obj.value)
}

function mCPF(cpf) {
    cpf = cpf.replace(/\D/g, "")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    return cpf
}

function ValidaCPF() {
    var RegraValida = document.getElementById("RegraValida").value;
    var cpfValido = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/;
    if (cpfValido.test(RegraValida) == true) {
        alert("CPF Válido");
    } else {
        alert("CPF Inválido");
    }
}

/* Verificar RG */

function mascara(t, mask) {
    var i = t.value.length;
    var saida = mask.substring(1, 0);
    var texto = mask.substring(i)
    if (texto.substring(0, 1) != saida) {
        t.value += texto.substring(0, 1);
    }
}

function validarrg() {
    var rg = document.getElementById("rgvalido");

    if (rg.value.length == 12) {
        alert("RG Válido!")
    } else {
        alert("RG Inválido!")
    }
}

/* Validação e pesquisa de CEP */

function validarcep () {
    var cep = document.getElementById("cepvalido");

    if (cep.value.length == 9) {
        alert("CEP Válido!")
    } else {
        alert("CEP Inválido!")
    }
}

function getDadosEnderecoCEP(cep) {

    let xhr = new XMLHttpRequest()

    let url = 'https://viacep.com.br/ws/' + cep + '/json/unicode/'

    xhr.open('GET', url, true)

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                let dadosJSONText = xhr.responseText
                let dadosJSONObj = JSON.parse(dadosJSONText)

                document.getElementById('rua').value = dadosJSONObj.logradouro
                document.getElementById('bairro').value = dadosJSONObj.bairro
                document.getElementById('cidade').value = dadosJSONObj.localidade
                document.getElementById('estado').value = dadosJSONObj.uf
            }
        }
    }
    xhr.send();

}

/* Preenchimento obrigatorio */



document.getElementById('enviar').addEventListener('click', function() {
    if (document.querySelectorAll(':invalid').length > 0) {

        alert("É necessário preencher todos os campos.")
    }
})
