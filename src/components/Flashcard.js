import { useState } from 'react';
import EvaluationButtons from './EvaluationButtons';

export default function Flashcard({ setEnding, setSuccessPage, zapGoal, quizz, incorrectAnswers, setIncorrectAnswers }) {

    let [currentCard, setCurrentCard] = useState(0);
    let [zapQuantity, setZapQuantity] = useState(0);
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
        } else if (zapQuantity >= zapGoal) {
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
                <EvaluationButtons showButtons={showButtons} setShowButtons={setShowButtons} setBorder={setBorder} incorrectAnswers={incorrectAnswers} setIncorrectAnswers={setIncorrectAnswers} zapQuantity={zapQuantity} setZapQuantity={setZapQuantity} />
                <img className={`${showButtons === 'show' ? 'hidden' : 'show'}`} src="assets/turn.png" alt="" data-identifier="arrow" onClick={() => changeCard()} />
            </div>
        </div>
    );
}