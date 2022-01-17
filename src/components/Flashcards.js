import Flashcard from "./Flashcard";
import LogoMini from "./LogoMini";

export default function Flashcards({ page, ending, setEnding, setSuccessPage, zapGoal, quizz, incorrectAnswers, setIncorrectAnswers }) {
    return (
        <div className={`flashcards ${page === 'show' ? 'hidden' : 'show'} ${ending === 'hidden' ? '' : 'hidden'}`}>
            <LogoMini />
            <Flashcard setEnding={setEnding} setSuccessPage={setSuccessPage} zapGoal={zapGoal} quizz={quizz} incorrectAnswers={incorrectAnswers} setIncorrectAnswers={setIncorrectAnswers} />
        </div>
    );
}