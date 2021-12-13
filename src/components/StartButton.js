export default function StartButton({ name, goToFlashcards }) {
    return (
        <div className="start-button" data-identifier="start-zap-recall" onClick={() => goToFlashcards(name)}>
            Praticar {name}
            <img src="assets/next.png" alt="" />
        </div>
    );
}