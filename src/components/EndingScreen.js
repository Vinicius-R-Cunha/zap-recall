import LogoMini from './LogoMini'
import ResetButton from './ResetButton';

export default function EndingScreen({ ending, successPage, incorrectAnswers }) {

    const completionArray = [
        { text1: "PARABÉNS!", text2: "Você não esqueceu de nenhum flashcard!", text3: "", image: "assets/party.png" },
        { text1: "Putz..", text2: `Você esqueceu ${incorrectAnswers} flashcards..`, text3: "Não desanime! Na próxima você consegue!", image: "assets/sad.png" }
    ]

    return (
        <div className={`ending-screen ${ending}`}>
            <LogoMini />
            <div className="ending-message">
                <p>{successPage === 'hidden' ? completionArray[1].text1 : completionArray[0].text1}
                    <img src={successPage === 'hidden' ? completionArray[1].image : completionArray[0].image} alt="" />
                </p>
                <p>{successPage === 'hidden' ? completionArray[1].text2 : completionArray[0].text2}</p>
                <p>{successPage === 'hidden' ? completionArray[1].text3 : completionArray[0].text3}</p>
            </div>
            <ResetButton />
        </div>
    );
}