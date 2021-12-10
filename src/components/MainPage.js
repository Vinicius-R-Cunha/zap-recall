export default function MainPage({ page, setPage, ending, zapGoal, setZapGoal, questionsQuantity }) {

    function goToFlashcards() {
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
            <input className="zap-goal" placeholder="Sua meta de zaps" type="text" value={zapGoal} onInput={e => setZapGoal(e.target.value)} />
            <div className="start-button" data-identifier="start-zap-recall" onClick={goToFlashcards}>
                Praticar React
                <img src="assets/next.png" alt="" />
            </div>
        </div>
    );
}