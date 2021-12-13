import { useState } from "react";
import Flashcards from "./components/Flashcards";
import MainPage from "./components/MainPage";
import EndingScreen from "./components/EndingScreen";

export default function App() {

    let [quizz, setQuizz] = useState([{ question: "", answer: "" }]);
    let [quizzTitle, setQuizzTitle] = useState('');
    let [incorrectAnswers, setIncorrectAnswers] = useState(0);
    let [zapGoal, setZapGoal] = useState('');
    let [page, setPage] = useState('show');
    let [ending, setEnding] = useState('hidden');
    let [successPage, setSuccessPage] = useState('hidden');

    return (
        <>
            <MainPage page={page} setPage={setPage} ending={ending} zapGoal={zapGoal} setZapGoal={setZapGoal} setQuizz={setQuizz} setQuizzTitle={setQuizzTitle} />
            <Flashcards page={page} ending={ending} setEnding={setEnding} setSuccessPage={setSuccessPage} zapGoal={zapGoal} quizz={quizz} quizzTitle={quizzTitle} incorrectAnswers={incorrectAnswers} setIncorrectAnswers={setIncorrectAnswers} />
            <EndingScreen ending={ending} setEnding={setEnding} successPage={successPage} incorrectAnswers={incorrectAnswers} />
        </>
    );
}

