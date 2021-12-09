import { useState } from 'react';
import EvaluationButtons from './EvaluationButtons';

export default function Flashcard({ setEnding, setSuccessPage }) {
    // const quizz = [
    //     { question: "O que é JSX ?", answer: "Uma extensão de linguagem do JavaScript" },
    //     { question: "O React é __", answer: "uma biblioteca JavaScript para construção de interfaces" },
    //     { question: "Componentes devem iniciar com __", answer: "letra maiúscula" },
    //     { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
    //     { question: "O ReactDOM nos ajuda __", answer: "interagindo com a DOM para colocar componentes React na mesma" },
    //     { question: "Usamos o npm para __", answer: "gerenciar os pacotes necessários e suas dependências" },
    //     { question: "Usamos props para __", answer: "passar diferentes informações para componentes" },
    //     { question: "Usamos estado(state) para __", answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
    // ];
    const quizz = [
        { question: "O que é JSX ?", answer: "Uma extensão de linguagem do JavaScript" },
        { question: "O React é __", answer: "uma biblioteca JavaScript para construção de interfaces" }
    ]

    let [currentCard, setCurrentCard] = useState(0);
    let [incorrectAnswers, setIncorrectAnswers] = useState(0);

    let [border, setBorder] = useState('');
    let [front, setFront] = useState('show');
    let [showButtons, setShowButtons] = useState('hidden');

    function turnCard() {
        setFront('hidden');
        setShowButtons('show');
    }

    function changeCard() {
        if (currentCard < quizz.length - 1) {
            setBorder('');
            setFront('show');
            setCurrentCard(currentCard + 1);
        } else if (incorrectAnswers === 0) {
            setEnding('show');
            setSuccessPage('');
        } else {
            setEnding('show');
        }
    }

    return (
        <div className={`card ${border}`} data-identifier="flashcard">
            <p className="card-number" data-identifier="counter">{`${currentCard + 1}/${quizz.length}`}</p>
            <div className={`question ${front}`}>
                <p>{quizz[currentCard].question}</p>
                <img src="assets/turn.png" alt="" data-identifier="arrow" onClick={() => turnCard()} />
            </div>

            <div className={`answer ${front === 'show' ? 'hidden' : 'show'}`}>
                <p>{quizz[currentCard].question}</p>
                <p className="answer-text">{quizz[currentCard].answer}</p>
                <EvaluationButtons showButtons={showButtons} setShowButtons={setShowButtons} setBorder={setBorder} incorrectAnswers={incorrectAnswers} setIncorrectAnswers={setIncorrectAnswers} />
                <img className={`${showButtons === 'show' ? 'hidden' : 'show'}`} src="assets/turn.png" alt="" data-identifier="arrow" onClick={() => changeCard()} />
            </div>
        </div>
    );
}