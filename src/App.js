import { useState } from "react";
import Flashcards from "./components/Flashcards";
import MainPage from "./components/MainPage";
import EndingScreen from "./components/EndingScreen";

export default function App() {
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

    let [incorrectAnswers, setIncorrectAnswers] = useState(0);
    let [page, setPage] = useState('show');
    let [ending, setEnding] = useState('hidden');
    let [successPage, setSuccessPage] = useState('hidden');
    let [zapGoal, setZapGoal] = useState('');

    const questionsQuantity = quizz.length;

    return (
        <>
            <MainPage page={page} setPage={setPage} ending={ending} zapGoal={zapGoal} setZapGoal={setZapGoal} questionsQuantity={questionsQuantity} />
            <Flashcards page={page} ending={ending} setEnding={setEnding} setSuccessPage={setSuccessPage} zapGoal={zapGoal} quizz={quizz} questionsQuantity={questionsQuantity} incorrectAnswers={incorrectAnswers} setIncorrectAnswers={setIncorrectAnswers} />
            <EndingScreen ending={ending} setEnding={setEnding} successPage={successPage} incorrectAnswers={incorrectAnswers} />
        </>
    );
}

