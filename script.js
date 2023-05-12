function trocar(cor){
    document.body.style.background = cor
}


const data = new Date()

const dia = String(data.getDate()).padStart(2,0)

const mes = String(data.getMonth()).padStart(2,0)

const ano = data.getFullYear()

const dataAtual = `${dia}/${mes}/${ano}`

function mensagemEnviada(){
    alert("Mensagem enviada!")
    window.open("index.html")
}
function validateFields(){
   const emailValid = isEmailValid;
   const passwordValid = isPasswordValid;
   document.getElementById("entrar").disabled = !emailValid || !passwordValid;
}
function isEmailValid(){
    const email=document.getElementById("emailForm").value;
    if (!email){
        return false;
    } return validateEmail(email);
}
function isPasswordValid(){
    const password = getElementById("passwordForm").value;
    if (!password){
        return false;
    } return true;
}
function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

function acertou(){
    alert("Parabéns! Resposta correta.")
}

function errou(){
    alert("Errou!")
}

function invalida(){
    alert("Resposta inválida. Atente-se a maneira de responder.")
}

function responder1(){
    r = prompt("Responda com s/n:")
    if (r == "n"){
        acertou();
        alert("O vinho ideal varia de acordo com o alimento que o acompanha, sendo independente de temperatura ou clima.")
    } else if (r == "s") {
        errou();
    } else {
        invalida();
    }
}

function responder2(){
    r = prompt("Deitada/De pé:")
    if (r == "Deitada"){
        acertou();
        alert("Com o vinho deitado, o liquido não permite a rolha secar. Esse ato evita a entrada e oxigênio e, por consequência, a diminuição na qualidade do vinho.")
    } else if (r == "De pé") {
        errou();
    } else {
        invalida();
    }
}

function responder3(){
    r = prompt("Responda com s/n:")
    if (r == "s"){
        errou();
    } else if (r == "n") {
        acertou();
        alert("A combinação de uvas aumenta a complexidade do  saber, e sim, existe chance do sabor não ser agradável, porém, com as combinações corretas, pode-se alcançar sabores deliciosos que nenhuma uva sozinha conseguiria. ")
    } else {
        invalida();
    }
}

