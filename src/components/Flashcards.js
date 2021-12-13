import Flashcard from "./Flashcard";
import LogoMini from "./LogoMini";
import QuizzTitle from "./QuizzTitle";

export default function Flashcards({ page, ending, setEnding, setSuccessPage, zapGoal, quizz, quizzTitle, incorrectAnswers, setIncorrectAnswers }) {
    return (
        <div className={`flashcards ${page === 'show' ? 'hidden' : 'show'} ${ending === 'hidden' ? '' : 'hidden'}`}>
            <LogoMini />
            <QuizzTitle quizzTitle={quizzTitle} />
            <Flashcard setEnding={setEnding} setSuccessPage={setSuccessPage} zapGoal={zapGoal} quizz={quizz} incorrectAnswers={incorrectAnswers} setIncorrectAnswers={setIncorrectAnswers} />
        </div>
    );
}