import LogoMini from "./LogoMini";
import ResetButton from "./ResetButton";

export default function Failure({ ending, successPage }) {
    return (
        <div className={`ending-screen ${ending} ${successPage === 'hidden' ? '' : 'hidden'}`}>
            <LogoMini />
            <div className="ending-message">
                <p>Putz..<img src="assets/sad.png" alt="" /></p>
                <p>Você esqueceu alguns flashcards..<br />Não desanime! Na próxima você consegue!</p>
            </div>
            <ResetButton />
        </div>
    );
}