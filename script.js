// script.js — corrigido para remover o blur e iniciar o quiz corretamente
const iniciarbotao = document.querySelector(".iniciar-botao"); // botao para iniciar o quiz, funciona junto com o popup de info, puxa a funcao iniciarQuiz de questions.js. essa funcao so eh chamada quando o usuario clica em continuar no popup de info
const popupinfo = document.querySelector(".popup-info"); // popup de info, mostrado antes de iniciar o quiz
const sairbotao = document.querySelector(".sair-botao"); // botao para sair do popup de info sem iniciar o quiz
const inicio = document.querySelector(".inicio"); // div de fundo do inicio do quiz
const continuarbotao = document.querySelector(".continuar-botao"); // botao para continuar o quiz depois de ler o popup de info
const quizarea = document.querySelector(".quiz-area"); // painel do quiz onde as perguntas sao mostradas, inicialmente oculto, fica visivel quando o quiz inicia esta no style.css
const botaosobre = document.getElementById("botao-sobre"); // botao para abrir popup sobre
const popupSobre = document.querySelector(".popup-sobre"); // executa popup sobre 
const sairbotaosobre = document.querySelector(".sair-sobre-botao"); // botao para sair do popup sobre
const botaocontato = document.getElementById("botao-contato"); // botao para abrir popup contato, assim como os outros
const popupContato = document.querySelector(".popup-contato"); // popup contato, 
const sairbotaocontato = document.querySelector(".sair-contato-botao"); // botao para sair do popup contato

// variavel para nao deixar abrir outros popups enquanto um ja esta aberto, pra evitar polluicao visuais
let isPopupOpen = false;

// abre popup info
iniciarbotao.onclick = ()=>{

    // Se um popup já estiver aberto, impede a abertura do popup-info
    if (isPopupOpen) return;
    popupinfo.classList.add("ativo"); // mostra o popup de info
    isPopupOpen = true; // Define como true ao abrir o popup
}

// fecha popup info
sairbotao.onclick = ()=>{
    popupinfo.classList.remove("ativo"); // fecha o popup de info
    isPopupOpen = false; // Define como false ao fechar
    
}

// botao par continuar o quiz
continuarbotao.onclick = (e)=>{
    if (e && typeof e.preventDefault === 'function') e.preventDefault();

    popupinfo.classList.remove("ativo"); // fecha o popup
    isPopupOpen = false;

    quizarea.classList.add("ativo"); // mostrar o painel do quiz
    inicio.classList.add("ativo"); // // aplicar blurd de fundo (a classe .inicio.ativo ja faz isso no CSS)

    // iniciar o quiz chamando a funcao iniciarQuiz
   if (typeof iniciarQuiz === 'function') {
      iniciarQuiz();
    } else {
      console.warn('iniciarQuiz() não encontrada — verifique se questions.js foi carregado');
    }
  };



//todos popup seguem a mesma logica

// abre popup Sobre
if (botaosobre) {
    botaosobre.onclick = (e) => {
        e.preventDefault();
        if (isPopupOpen) return;
        popupSobre.classList.add("ativo");
        isPopupOpen = true;
    };
}

// fecha popup sobre
if (sairbotaosobre) {
    sairbotaosobre.onclick = () => {
        popupSobre.classList.remove("ativo");
        isPopupOpen = false;
    };
}


// abre popup contato
if (botaocontato) {
    botaocontato.onclick = (e) => {
        e.preventDefault();
        if (isPopupOpen) return;
        popupContato.classList.add("ativo");
        isPopupOpen = true;

    };
}

// fecha popup  contato
if (sairbotaocontato) {
    sairbotaocontato.onclick = () => {
        popupContato.classList.remove("ativo");
        isPopupOpen = false;
    };
}