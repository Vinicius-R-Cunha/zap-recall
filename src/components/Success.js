import LogoMini from './LogoMini'
import ResetButton from './ResetButton';

export default function Success({ ending, successPage }) {
    return (
        <div className={`ending-screen ${ending} ${successPage}`}>
            <LogoMini />
            <div className="ending-message">
                <p>PARABÉNS!<img src="assets/party.png" alt="" /></p>
                <p>Você não esqueceu de nenhum flashcard!</p>
            </div>
            <ResetButton />
        </div>
    );
}