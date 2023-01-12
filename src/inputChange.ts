/**
* @param {string} emailInput - User Input Email
* @param {string} passwordInput - User Input Password
* @param {string} nicknameInput - User Input NickName
* @returns 이메일, 비밀번호, 닉네임

*/
export let emailInput: any;
export let passwordInput: any;
export let nicknameInput: any;


if (typeof document !== 'object'){
    console.log('Document is Not Defined');
} else {
    emailInput = document.getElementById('email') as HTMLInputElement;
    passwordInput = document.getElementById('password') as HTMLInputElement;
    nicknameInput = document.getElementById('nickname') as HTMLInputElement;
}



/*
emailInput = document.getElementById('email') as HTMLInputElement;
passwordInput = document.getElementById('password') as HTMLInputElement;
nicknameInput = document.getElementById('nickname') as HTMLInputElement;
*/

/** Print What USER Inputed - emailInput, nicknameInput */
const PrintTest = () => {
    document.getElementById("varPrint").innerHTML = emailInput + nicknameInput;
}