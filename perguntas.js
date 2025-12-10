// quiz que renderiza dentro de .quiz-area - const quuiz reaproveitado do professor com algumas modificações (adicionando e corrigindo constant de resposta correta, adicionando mais perguntas, mudando pontos por pergunta, )




// banco de perguntas

const quiz = [
  {
    pergunta: "Em que ano o Google foi fundado?",
    alternativas: ["1995", "1996", "1998", "2000", "2001"],
    correta: 3,
    pontos: 10
  },
  {
    pergunta: "Quem são os fundadores do Google?",
    alternativas: ["Bill Gates e Paul Allen", "Larry Page e Sergey Brin", "Steve Jobs e Steve Wozniak", "Mark Zuckerberg e Dustin Moskovitz", "Jeff Bezos e Andy Jassy"],
    correta: 2,
    pontos: 15
  },
  {
    pergunta: "Qual foi o primeiro nome do Google?",
    alternativas: ["GoTo", "WebCrawler", "InfoSeek", "PageRank", "BackRub"],
    correta: 5,
    pontos: 20
  },
  {
    pergunta: "Qual sistema operacional móvel foi criado pelo Google?",
    alternativas: ["iOS", "HarmonyOS", " KaiOS ", "Android", "Symbian"],
    correta: 4,
    pontos: 5
  },
  {
    pergunta: "Qual destes serviços NÃO pertence ao Google?",
    alternativas: ["OneDrive", "Gmail", "Google Docs", "Google Cloud", "Google Drive"],
    correta: 1,
    pontos: 30
  },
  {
    pergunta: "Onde fica a sede do Google (Googleplex)?",
    alternativas: ["Seattle", "Nova York", "Mountain View, Califórnia", "Los Angeles", "JAustin, Texas"],
    correta: 3,
    pontos: 50
  },
  {
    pergunta: "Qual é o nome do navegador desenvolvido pelo Google?",
    alternativas: ["Firefox", "Safari", "Opera", "Chrome", "Edge"],
    correta: 4,
    pontos: 20
  },
  {
    pergunta: "Qual destes produtos do Google é usado para publicidade??",
    alternativas: ["Google Ads", " Google Keep", " Google Earth", " Google Duo", " Google Lens"],
    correta: 1,
    pontos: 35
  },
  {
    pergunta: "Qual linguagem de programação foi criada pelo Google?",
    alternativas: [" Swift", " Rust", "TypeScript", " Kotlin", " Go"],
    correta: 5,
    pontos: 35
  },
{
    pergunta: "O YouTube foi adquirido pelo Google em 2006. Por quanto?",
    alternativas: ["US$ 500 milhões", "US$ 1,65 bilhão", "US$ 1,2 bilhão", "US$ 780 milhões", "US$ 2,1 bilhões"],
    correta: 2,
    pontos: 30
  },
  
];



// fundos, o url é o diretorio da pasta onde fica as imagens // const reaproveitado do professor com modificações (nao via pra website, so no pc local)
const fundos = [
  "url('imagens/backgroundQUESTION1.jpg')",
  "url('imagens/backgroundQUESTION2.jpg')",
  "url('imagens/backgroundQUESTION3.jpg')",
  "url('imagens/backgroundQUESTION4.jpg')",
  "url('imagens/backgroundQUESTION5.jpg')",
  "url('imagens/backgroundQUESTION6.jpg')", 
  "url('imagens/backgroundQUESTION7.jpg')",
  "url('imagens/backgroundQUESTION8.jpg')",
  "url('imagens/backgroundQUESTION9.jpg')",
  "url('imagens/backgroundQUESTION10.jpg')"
];

// pre carrega imagens de fundo para reduzir chance de delay (mudar as imagens antes de mostrar a pergunta) - função adicional criada dps de problemas com delay na troca de imagens de fundo
(function preCarregarFundos() {
  fundos.forEach(f => {
    const match = f.match(/url\(['"]?(.*?)['"]?\)/);
    if (match && match[1]) {
      const img = new Image();
      img.src = match[1];
    }
  });
})();


// variáveis do quiz - reaproveitado do professor com modificações e adições
let indice = 0;
let pontuacao = 0;
let tempoRestante = 0;
let timerId = null;
let quizComecou = false;
const segundosporpergunta = 20;

// função de iniciar o quiz
function iniciarQuiz() {
  if (quizComecou) return; 
  quizComecou = true;
  indice = 0;
  pontuacao = 0;
  renderPergunta();
}

// função para renderizar a pergunta atual
function renderPergunta() {
  const container = document.querySelector('.quiz-area');
  if (!container) return console.warn('.quiz-area não encontrada');

  // se acabou
  if (indice >= quiz.length) {
    mostrarResultado();
    return;
  }

   // atualiza background do painel do quiz
  const bg = fundos[indice % fundos.length];

  // aplica tudo no .quiz-area
  const quizElemento = document.querySelector('.quiz-area');
if (quizElemento) {
  // aplica background 
  quizElemento.style.background = `${bg}`; // apenas a imagem de fundo
  quizElemento.style.backgroundColor = '#111'; 
  quizElemento.style.backgroundRepeat = 'no-repeat';
  quizElemento.style.backgroundPosition = 'center';
  quizElemento.style.backgroundSize = 'cover';
  console.log('Background aplicado em .quiz-area:', bg); // log so pra ver se ta aplicando :p
} 
else 
  {
    // aplica no body se necessário - parte reaproveitada do professor com modificações
    document.body.style.backgroundImage = bg; 
    document.body.style.backgroundRepeat = 'no-repeat'; // evita repetição
    document.body.style.backgroundPosition = 'center'; // centraliza imagem
    document.body.style.backgroundSize = 'cover'; // imagem cobre a tela toda
    console.log('Background aplicado em body (fallback):', bg);
  }

// renderiza pergunta e alternativas
 const q = quiz[indice]; // semelhante ao do professor, porem com inner pois estava tendo problemas adicionando os botoes das alternativas
  container.innerHTML = `
    <div class="quiz-inner">
      <div class="quiz-topo">
        <div class="quiz-timer">Tempo: <span id="time-left">${segundosporpergunta}</span>s</div>
      </div>
      <div class="quiz-pergunta">${q.pergunta}</div>
      <div class="quiz-opcao" id="quiz-opcao"></div>
    </div>
  `;

// adiciona alternativas
const optionsDiv = container.querySelector('#quiz-opcao'); // div onde as alternativas vao, funciona junto com o innerHTML acima 
  q.alternativas.forEach((alt, i) => {
    const botao = document.createElement('button');
    botao.type = 'button';
    botao.className = 'quiz-opcao-botao';
    botao.textContent = alt;
    botao.onclick = () => selecionarResposta(i, botao);
    optionsDiv.appendChild(botao);
  });
// inicia timer
  iniciarTimer();
}

// função do timer

function iniciarTimer() {
  clearInterval(timerId); // limpa timer anterior
  tempoRestante = segundosporpergunta;

  const container = document.querySelector('.quiz-area');// painel do quiz, essa funcao so eh chamada quando o quiz ja iniciou. funciona junto com a funcao renderPergunta
  const el = document.getElementById('time-left'); // tempo restante eh mostrado
  if (el) el.textContent = tempoRestante; // atualiza display
  else console.warn('#time-left não encontrado em .quiz-area');
  // inicia contagem
  timerId = setInterval(() => {
    tempoRestante--;
    if (el) el.textContent = tempoRestante;
    if (tempoRestante <= 0) {
      clearInterval(timerId); // para timer
      indice++;   // avança para próxima pergunta automaticamente
      renderPergunta();
    }
  }, 1000);
}

// função ao selecionar resposta

function selecionarResposta(i, botao) {
  clearInterval(timerId);
  const q = quiz[indice];


  // o js usa index 0, ex 2 na resposta *correta* corresponde a terceira alternativa, causando erro na reposta certa. pra evitar colocar as repostas comecando de 0, ou seja, a primeira opcao inves de 1 seria 0. (estava usando sem essa correcao e tava dando erro :p)
  const correctIndex = (typeof q.correta === 'number' && q.correta > 0 && q.correta <= q.alternativas.length)
    ? q.correta - 1
    : q.correta;

  // desabilita botões para evitar double click (qualquer clique depois do primeiro é ignorado)
  const allbotaos = document.querySelectorAll('.quiz-opcao-botao');
  allbotaos.forEach(b => b.disabled = true);

  // verifica a resposta com o correctindex ajustado para nao pular a resposta certa
  if (i === correctIndex) {
    pontuacao += q.pontos;
    botao.classList.add('correct');
  } else {
    botao.classList.add('wrong');
    // mostra resposta correta
    const correctbotao = Array.from(allbotaos)[correctIndex];
    if (correctbotao) 
      correctbotao.classList.add('correct');
  }

  // avança dps de um pequeno delay (tempo pra mostrar o resultado/feedback em ms)
  setTimeout(() => {
    indice++; 
    // avança para próxima pergunta
    renderPergunta();
  }, 800);
}

//funcao pra mostrar o resultado

function mostrarResultado() {
  const container = document.querySelector('.quiz-area'); // painel do quiz
  if (!container) return;

// mostra pontuação final
  container.innerHTML = `
    <div class="quiz-inner">
      <h2 class="quiz-resultado-titulo">Fim do Quiz</h2>
      <p class="quiz-resultado-texto">Total: <strong>${pontuacao} pontos</strong></p>
      <p class="quiz-resultado-texto">Você respondeu ${quiz.length} perguntas.</p>
      <div class="quiz-resultado-acoes" style="margin-top:16px;">
        <button id="reiniciar-quiz" class="botao-reiniciar">Jogar Novamente</button>
        <button id="voltar-inicio" class="botao-voltar">Voltar ao Início</button>
      </div>
    </div> 
  `; 

  // botao reiniciar quiz
  document.getElementById('reiniciar-quiz').onclick = () => {
    quizComecou = false;
    iniciarQuiz();
  };

  // voltar para a tela inicial (fecha o painel do quiz)
  const voltarBtn = document.getElementById('voltar-inicio');
  if (voltarBtn) {
    voltarBtn.onclick = () => {
      const quizArea = document.querySelector('.quiz-area');
      if (quizArea) {
        quizArea.classList.remove('ativo'); // fecha painel
        quizArea.innerHTML = ''; // limpa conteúdo do painel
      }
      quizComecou = false;
      const inicioEl = document.querySelector('.inicio');
      if (inicioEl) inicioEl.classList.remove('ativo');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  }
}