/**
* @param {string} emailInput - User Input Email
* @param {string} passwordInput - User Input Password
* @param {string} nicknameInput - User Input NickName
* @returns 이메일, 비밀번호, 닉네임

*/
let emailInput;
let passwordInput;
let nicknameInput;

if (typeof document !== 'undefined') {
    emailInput = document.getElementById('email');
    passwordInput = document.getElementById('password');
    nicknameInput = document.getElementById('nickname');
} else {
    console.log('Document is not Defined');
}


/** Print What USER Inputed - emailInput, nicknameInput */
const PrintTest = () => {
    document.getElementById("varPrint").innerHTML = emailInput + nicknameInput;
}