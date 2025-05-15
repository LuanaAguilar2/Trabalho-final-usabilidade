//teste 
// Array de objetos de perguntas
// com niveis para diferenciar cada fase 
// o explanation aparece quando clica no botão para ser a curiosidade caso o jogador queira saber  

const quizData = [

    {
        question: "Qual é o sistema operacional mais usado em desktops no mundo?", //Fácil
        answers: [
            { text: "Windows", correct: true },
            { text: "Linux", correct: false },
            { text: "MacOs", correct: false },
            { text: "Android", correct: false }
        ],

        level: 1,
        explanation: "O Windows é o sistema mais popular em desktops por sua ampla adoção em empresas e lares, contando com 1,6 bilhões de usuários"
    },
    {
        question: "O que significa “www” em um endereço da web?", //Fácil
        answers: [
            { text: "Web Without Wires", correct: false },
            { text: "World Wide Web", correct: true },
            { text: "World Web Windows", correct: false },
            { text: "Wireless Wide Web", correct: false }

        ],
        level: 1,
        explanation:"A sigla 'www' se refere a World Wide Web ou, em português, rede de alcance mundial. É a sigla para um sistema interligado de arquivos e informações. Ele estabeleceu uma linguagem padrão para a circulação e organização dos dados na rede mundial virtual."
    },

    {
        question: "Qual desses é um navegador de internet?", //Fácil
        answers: [
            { text: "Windows", correct: false },
            { text: "Android", correct: false },
            { text: "Google Chrome", correct: true },
            { text: "iCloud", correct: false }
        ],
        level: 1,
        explanation:"O Google Chrome é um navegador de internet desenvolvido pela Google. Foi lançado pela primeira vez no dia 2 de setembro de 2008, para o Microsoft Windows, e mais tarde foi portado para Linux, Mac, iOS e Android."
    },

    {
        question: "O que é um 'mouse' ?", //Fácil
        answers: [
            { text: "Programa de edição", correct: false },
            { text: "Tipo de vírus", correct: false },
            { text: "Dispositivo de entrada", correct: true },
            { text: "Protocolo de rede", correct: false }
        ],
        level: 1,
        explanation:"Um mouse é um dispositivo de entrada que controla o cursor na tela do computador, permitindo que o usuário interaja com o sistema operacional e aplicativos"
    },
    {
        question: "Qual empresa desenvolve o sistema Android?", //Fácil
        answers: [
            { text: "Samsung", correct: false },
            { text: "Apple", correct: false },
            { text: "Microsoft", correct: false },
            { text: "Google", correct: true }
        ],
        level: 1,
        explanation:"O sistema operacional Android é desenvolvido e mantido principalmente pela Google, que adquiriu a empresa Android Inc., que o criou inicialmente em 2003. A Open Handset Alliance (OHA), um consórcio de empresas de hardware, software e telecomunicações, também contribui para o desenvolvimento e promoção do Android."
    },

    
    {
        question: "Qual linguagem é usada para estruturar páginas na web?", //medio
        answers: [
            { text: "Python", correct: false },
            { text: "JavaScript", correct: false },
            { text: "CSS", correct: false },
            { text: "HTML", correct: true }
        ],
        level: 2,
        explanation:"HTML, sigla para HyperText Markup Language, é a linguagem de marcação fundamental para criar páginas web. Ela define a estrutura e o conteúdo de um documento web, indicando ao navegador como apresentar informações como texto, imagens, links e outros elementos."
    },

    {
        question: "Qual protocolo é usado para transferir páginas da web?", //medio
        answers: [
            { text: "HTTP", correct: true },
            { text: "FTP", correct: false },
            { text: "SMTP", correct: false },
            { text: "IP", correct: false }
        ],
        level: 2,
        explanation:"HTTP, sigla para Hypertext Transfer Protocol, é um protocolo de comunicação utilizado para transferir informações na internet. É a base da comunicação entre um navegador web e um servidor web, permitindo a exibição de páginas web."
    },

    {
        question: "Qual banco de dados é relacional?", //medio
        answers: [
            { text: "MongoDB", correct: false },
            { text: "Redis", correct: false },
            { text: "MySQL", correct: true },
            { text: "Firebase", correct: false }
        ],
        level: 2,
        explanation:"Sim, MySQL é um sistema de gerenciamento de banco de dados relacional (RDBMS), que significa que ele organiza e armazena dados em tabelas com linhas e colunas, e permite definir relações entre essas tabelas. É um software de código aberto, o que significa que pode ser usado e modificado livremente."
    },


    {
        question: "O que significa 'open source'?", //medio
        answers: [
            { text: "Código aberto", correct: true },
            { text: "Software pago", correct: false },
            { text: "Aplicativo da Apple", correct: false },
            { text: "Rede fechada", correct: false }
        ],
        level: 2,
        explanation:"'Open source', que em português significa 'código aberto', refere-se a um modelo de desenvolvimento de software onde o código-fonte é disponibilizado publicamente para consulta, modificação e redistribuição. Isso permite que qualquer pessoa possa usar, examinar, alterar e redistribuir o software como quiser, geralmente sem custo."
    },
    {
        question: "Qual dessas linguagens é usada para estilos em páginas web?", //medio
        answers: [
            { text: "PHP", correct: false },
            { text: "CSS", correct: true },
            { text: "SQL", correct: false },
            { text: "Java", correct: false }
        ],
        level: 2,
        explanation:" CSS, que significa Cascading Style Sheets, é uma linguagem utilizada para definir a aparência visual de documentos HTML, como cores, fontes, tamanhos e posicionamento. Permite separar a estrutura da página (HTML) do seu design (CSS), facilitando a criação e manutenção de sites."
    },
    {
        question: "O que significa a sigla API?", //dificil 
        answers: [
            { text: "Advanced Program Internet", correct: false },
            { text: "Access Point Information", correct: false },
            { text: "Advanced Program Internet", correct: false },
            { text: "Application Programming Interface", correct: true }
        ],
        level: 3,
        explanation:"API significa 'Application Programming Interface', que traduzido para o português é 'Interface de Programação de Aplicações'. É um conjunto de regras e protocolos que permitem que diferentes softwares interajam entre si, compartilhando dados e funcionalidades."
    },

    {
        question: "Qual estrutura de dados funciona com o princípio LIFO?",//dificil
        answers: [
            { text: "Fila (Queue)", correct: false },
            { text: "Lista encadeada", correct: false },
            { text: "Pilha (Stack)", correct: true },
            { text: "Árvore binária", correct: false }
        ],
        level: 3,
        explanation:"A estrutura de dados que funciona com o princípio LIFO (Last-In, First-Out) é a pilha (stack). Em uma pilha, o último elemento inserido é o primeiro a ser removido."
    },
    {
        question: "Em JavaScript, qual é o tipo retornado por typeof null?", //dificil
        answers: [
            { text: "Object", correct: true },
            { text: "Undefined", correct: false },
            { text: "Null", correct: false },
            { text: "Boolean", correct: false }
        ],
        level: 3,
        explanation:"Em JavaScript, o operador typeof aplicado a null retorna a string 'object'. Este comportamento é um bug conhecido na linguagem, e não significa que null seja um objeto. Ele é, na verdade, um tipo primitivo que representa a ausência de um valor."
    },

    {
        question: "O que é um framework?", //dificil
        answers: [
            { text: "Banco de dados", correct: false },
            { text: "Um tipo de vírus de computador", correct: false },
            { text: "Editor de código", correct: false },
            { text: "Conjunto de ferramentas e bibliotecas para facilitar o desenvolvimento", correct: true }
        ],
        level: 3,
        explanation:"Um framework é uma estrutura predefinida, um conjunto de componentes e ferramentas reutilizáveis que facilitam o desenvolvimento de software ou a gestão de processos. Funciona como uma base ou 'esqueleto' que orienta a criação ou implementação de projetos, economizando tempo e esforço ao reutilizar soluções existentes e padronizando práticas."
    },

    {
        question: "Qual destes não é um sistema de versionamento?", //dificil
        answers: [
            { text: "Apache", correct: true },
            { text: "Git", correct: false },
            { text: "SVN", correct: false },
            { text: "Mercurial", correct: false }
        ],
        level: 3,
        explanation:"O apache refere-se principalmente ao Apache HTTP Server, um software de código aberto que funciona como um servidor web. Ele é crucial para hospedar e entregar conteúdo da web, permitindo que os usuários vejam sites em seus navegadores. Em outras palavras, o Apache é o que permite que um website seja acessível e exibido na internet. "
    },

];


document.addEventListener('DOMContentLoaded', function() {
    
    let tooltip = document.getElementById('tooltip');
    if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.id = 'tooltip';
        document.body.appendChild(tooltip);
    }

    let currentQuestionIndex = 0;
    let currentPhase = 1;
    let incorrectAnswers = 0;
    const maxIncorrectAnswers = 1;
    const questionsPerPhase = 8;

    function loadQuestion() {
        const quizContainer = document.getElementById('quiz');
        if (!quizContainer) {
            console.error('Elemento quiz não encontrado');
            return;
        }

        quizContainer.innerHTML = "";

        let signalClass = "";
        let signalTooltip = "";

        if (currentPhase === 1) {
            signalClass = "green";
            signalTooltip = 'Questões de nível fácil';
        } else if (currentPhase === 2) {
            signalClass = "orange";
            signalTooltip = 'Questões de nível médio';
        } else if (currentPhase === 3) {
            signalClass = "red";
            signalTooltip = 'Questões de nível difícil';
        }

        const signal = document.createElement('div');
        signal.className = signalClass;
        signal.setAttribute("data-tooltip", signalTooltip);
        quizContainer.appendChild(signal);

        addTooltipEvents(signalClass);

        const currentQuestion = quizData[currentQuestionIndex];
        const questionElement = document.createElement('p');
        questionElement.id = "idQuestion";

        const buttonsContainer = document.createElement('div');
        buttonsContainer.id = "idButtonsContainer";

        questionElement.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
        quizContainer.appendChild(questionElement);

        for (let i = 0; i < currentQuestion.answers.length; i++) {
            const answerData = currentQuestion.answers[i];
            const answerButton = document.createElement('button');
            answerButton.textContent = answerData.text;
            answerButton.className = "answer";
            answerButton.onclick = () => checkAnswer(answerData.correct, i);
            buttonsContainer.appendChild(answerButton);
        }

        quizContainer.appendChild(buttonsContainer);
    }
    function checkAnswer(isCorrect, index) {
    const buttons = document.getElementsByClassName('answer');

    // Desativa todos os botões após a escolha
    Array.from(buttons).forEach(btn => btn.disabled = true);

    buttons[index].style.backgroundColor = isCorrect ? "green" : "red";

    // Mostra botão "Ver Explicação"
    showCuriosityButton(isCorrect);
}
function showPhaseCompletionMessage() {
        const quizContainer = document.getElementById('quiz');
        if (!quizContainer) return;

        const messages = {
            1: `Parabéns jogador(a) ${nome}! Você passou pela primeira fase! Se prepare para a próxima fase.`,
            2: `Você passou pela segunda fase jogador(a) ${nome}! Está quase chegando lá.`,
            3: `Você é um conhecedor nato de tecnologia ${nome}! Parabéns você completou todas as fases`
        };

        quizContainer.innerHTML = `<p>${messages[currentPhase] || 'Fase concluída!'}</p>`;
        currentPhase++;
        incorrectAnswers = 0;

        if (currentPhase <= 3) {
            setTimeout(() => loadQuestion(), 3000);
        }
    }

    function addTooltipEvents(circleClass) {
        const circle = document.querySelector(`.${circleClass}`);
        if (!circle) return;

        circle.addEventListener('mouseenter', (event) => {
            const tooltipText = event.target.getAttribute('data-tooltip');
            tooltip.innerText = tooltipText;
            tooltip.style.display = 'block';
            const rect = event.target.getBoundingClientRect();
            tooltip.style.left = `${rect.left}px`;
            tooltip.style.top = `${rect.bottom + 5}px`;
        });

        circle.addEventListener('mouseleave', () => {
            tooltip.style.display = 'none';
        });
    }
    
function showCuriosityButton(isCorrect) {
    const quizContainer = document.getElementById('quiz');
    const curiosityBtn = document.createElement('button');
    curiosityBtn.textContent = "Ver Explicação";
    curiosityBtn.id = "curiosityButton";
    quizContainer.appendChild(curiosityBtn);

    curiosityBtn.onclick = () => {
        const currentQuestion = quizData[currentQuestionIndex];
        const explanation = document.createElement('p');
        explanation.textContent = `💡 ${currentQuestion.explanation}`;
        explanation.className = "explanation";
        quizContainer.appendChild(explanation);

        curiosityBtn.disabled = true;

        // Mostra botão "Próxima Pergunta"
        const nextBtn = document.createElement('button');
        nextBtn.textContent = "Próxima Pergunta";
        nextBtn.id = "nextButton";
        nextBtn.style.marginTop = "10px";
        quizContainer.appendChild(nextBtn);

        nextBtn.onclick = () => {
            if (!isCorrect) {
                incorrectAnswers++;
                if (incorrectAnswers >= maxIncorrectAnswers) {
                    currentPhase = 1;
                    currentQuestionIndex = 0;
                    incorrectAnswers = 0;
                    loadQuestion();
                    alert(`Que pena ${nome}, você errou a pergunta. Tente novamente!`);
                    return;
                }
            }

            currentQuestionIndex++;
            if (currentQuestionIndex % questionsPerPhase === 0) {
                showPhaseCompletionMessage();
            } else {
                loadQuestion();
            }
        };
    };
}



    loadQuestion();
});
