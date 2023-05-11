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
function entrar(){
    window.location.replace("http://127.0.0.1:5500/index.html");
}