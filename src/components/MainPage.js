import StartButton from "./StartButton";

export default function MainPage({ setQuizz, setQuizzTitle, page, setPage, ending, zapGoal, setZapGoal }) {
    const reactQuizz = [
        { question: "O que é JSX ?", answer: "Uma extensão de linguagem do JavaScript" },
        { question: "O React é __", answer: "uma biblioteca JavaScript para construção de interfaces" },
        { question: "Componentes devem iniciar com __", answer: "letra maiúscula" },
        { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
        { question: "O ReactDOM nos ajuda __", answer: "interagindo com a DOM para colocar componentes React na mesma" },
        { question: "Usamos o npm para __", answer: "gerenciar os pacotes necessários e suas dependências" },
        { question: "Usamos props para __", answer: "passar diferentes informações para componentes" },
        { question: "Usamos estado(state) para __", answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
    ];

    const javascriptQuizz = [
        { question: "Qual o papel do JavaScript na construção de um site?", answer: "Nos permite criar sites mais interativos, reagindo ao comportamento do usuário" },
        { question: "O que é Árvore DOM", answer: "É a árvore de elementos do HTML representada como objetos no JavaScript" },
        { question: "O que são Higher-Order Functions?", answer: "São funções que recebem outras funções como parâmetro" },
        { question: "Qual a melhor maneira de alterar estilos CSS através do JavaScript?", answer: "Adicionando ou removendo classes conforme a necessidade" },
        { question: "O que é um evento no JavaScript?", answer: "Ações ou ocorrências que acontecem nos elementos acarretadas pelo usuário" }
    ];

    let questionsQuantity;

    function goToFlashcards(name) {

        setQuizzTitle(name);

        if (name === 'React') {
            setQuizz([...reactQuizz]);
            questionsQuantity = reactQuizz.length;
        } else if (name === 'Javascript') {
            setQuizz([...javascriptQuizz]);
            questionsQuantity = javascriptQuizz.length;
        }

        if (zapGoal >= 1 && zapGoal % 1 === 0 && zapGoal <= questionsQuantity) {
            setPage('hidden');
        } else {
            alert(`Digite um número inteiro entre 0 e ${questionsQuantity}`);
            setZapGoal('');
        }
    }

    return (
        <div className={`main-page ${page} ${ending === 'hidden' ? '' : 'hidden'}`}>
            <img className="logo" src="assets/logo.png" alt="" />
            <input
                className="zap-goal"
                placeholder="Sua meta de zaps"
                type="text"
                value={zapGoal}
                onInput={e => setZapGoal(e.target.value)}
            />
            <StartButton name="Javascript" goToFlashcards={goToFlashcards} />
            <StartButton name="React" goToFlashcards={goToFlashcards} />
        </div>
    );
}