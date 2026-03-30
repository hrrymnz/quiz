# Quiz Interativo - Projeto Acadêmico

Projeto desenvolvido para a disciplina de **Programação Web Coding**, com o objetivo de criar um quiz interativo sobre uma empresa, utilizando apenas tecnologias front-end nativas: **HTML**, **CSS** e **JavaScript**.

---

## Sobre o projeto

O quiz apresenta perguntas de múltipla escolha com as seguintes funcionalidades:

- **Timer por questão** - o jogador tem um tempo limitado para responder
- **Fundo dinâmico** - o background alterna a cada questão, tornando a experiência mais visual
- **Menu de navegação** - tela inicial antes de iniciar o quiz
- **Pontuação ao final** - exibe o resultado ao término das perguntas

> Projeto simples e de escopo acadêmico, sem dependências externas ou frameworks.

---

## Como executar

1. Baixe e extraia o arquivo `.zip` do projeto
2. Abra a pasta extraída
3. Dê duplo clique no arquivo `index.html`
4. O quiz abrirá automaticamente no navegador padrão

> Não é necessário servidor local, compilação ou instalação de dependências.

---

## Compatibilidade

| Navegador       | Status                    |
|-----------------|---------------------------|
| Google Chrome   | Testado                   |
| Microsoft Edge  | Funcionamento esperado    |
| Firefox         | Funcionamento esperado    |

---

## Estrutura de arquivos

```
projeto/
├── index.html      → Página principal e estrutura do quiz
├── style.css       → Estilos, layout e fundos dinâmicos
├── script.js       → Lógica de navegação, pontuação e timer
└── perguntas.js    → Banco de perguntas, configurações de timer e backgrounds
```

---

## Funcionalidades técnicas

| Recurso          | Descrição                                                        |
|------------------|------------------------------------------------------------------|
| Timer            | Contagem regressiva por questão; encerra automaticamente ao expirar |
| Fundo alternado  | Cada questão exibe um background diferente via troca de classe CSS |
| Menu inicial     | Tela de entrada antes do início do quiz                         |
| Feedback visual  | Indicação de resposta correta/incorreta após cada questão       |

---

## Créditos e reaproveitamento de código

Partes do projeto foram baseadas ou adaptadas de fontes externas:

- **Timer** - lógica reaproveitada e ajustada para o contexto do projeto
- **Estilo das perguntas** - estrutura reaproveitada com modificações visuais
- **Menu inicial** - estrutura parcialmente inspirada no canal [CodeHal](https://www.youtube.com/@CodeHal), com alterações extensas para adequação ao projeto

---

## Contexto acadêmico

Este projeto foi desenvolvido como trabalho avaliativo da disciplina de **Programação Web Coding**. O escopo foi intencionalmente simples, priorizando a aplicação prática de HTML, CSS e JavaScript puros, sem uso de frameworks ou bibliotecas externas.
```
