'use strict';

var secretKey = document.getElementById('secretKeyInput');
var decryptedTextArea = document.getElementById('decryptedTextArea');
var encrtptedTextArea = document.getElementById('encryptedTextArea');
var encryptBtn = document.getElementById('encryptBtn');
var encrytpDecryptLabel = document.getElementById('encrytpDecryptLabel');
var copyBtn = document.getElementById('copyBtn');


encryptBtn.addEventListener("click", generateEncryption);
decryptBtn.addEventListener("click", decryptencryption);
copyBtn.addEventListener("click", copyText);


function generateEncryption() {
    encrytpDecryptLabel.innerHTML = 'Encrypted Text';
    console.log(secretKey.value, decryptedTextArea.value)
    var encryptedtext = encrypt(decryptedTextArea.value, secretKey.value,);
    encrtptedTextArea.value = new String(encryptedtext);
}

function decryptencryption() {
    encrytpDecryptLabel.innerHTML = 'Decrypted Text';
    console.log(secretKey.value, decryptedTextArea.value)
    var decryptedtext = decrypt(decryptedTextArea.value, secretKey.value,);
    encrtptedTextArea.value = new String(decryptedtext);
}

function encrypt(message = '', key = '') {
    var message = CryptoJS.AES.encrypt(message, key);
    return message.toString();
}

function decrypt(message = '', key = '') {
    var code = CryptoJS.AES.decrypt(message, key);
    var decryptedMessage = code.toString(CryptoJS.enc.Utf8);

    return decryptedMessage;
}

function copyText() {
    var copyTextarea = document.getElementById('encryptedTextArea');
    
    copyTextarea.select();

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);
    } catch (err) {
        console.log('Oops, unable to copy');
    }
    alert("copied");
}
