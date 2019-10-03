/* CONFIGURAÇÕES DO APLICATIVO */

// Consigurações da conexão com o Google Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBCuA5AwDYA_RHV-vIE046IxSeuVQ2_Epw",
    authDomain: "ijr-teste-de-app.firebaseapp.com",
    databaseURL: "https://ijr-teste-de-app.firebaseio.com",
    projectId: "ijr-teste-de-app",
    storageBucket: "",
    messagingSenderId: "798455223080",
    appId: "1:798455223080:web:f3e01d1403e78e4689b61d"
};

// Nome da 'key' que armasena as configurações locais
var localStorageKeyName = 'config';

// Configuração inicial do App
var initialConfig = {
    tema : 'light' // Tema inicial (light | dark)
}