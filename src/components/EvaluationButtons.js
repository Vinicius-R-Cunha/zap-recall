export default function EvaluationButtons({ showButtons, setShowButtons, setBorder, incorrectAnswers, setIncorrectAnswers }) {

    function conclude(button) {
        if (button === '1') {
            setBorder('black-border');
        } else if (button === '2') {
            setIncorrectAnswers(incorrectAnswers + 1);
            setBorder('red-border');
        } else if (button === '3') {
            setBorder('green-border');
        } else if (button === '4') {
            setBorder('yellow-border');
        }

        setShowButtons('hidden');
    }

    return (
        <div className={`evaluation-buttons ${showButtons}`} >
            <div className="button-1" onClick={() => conclude('1')}><span>Aprendi agora</span></div>
            <div className="button-2" onClick={() => conclude('2')}><span>Não lembrei</span></div>
            <div className="button-3" onClick={() => conclude('3')}><span>Lembrei com esforço</span></div>
            <div className="button-4" onClick={() => conclude('4')}><span>Zap!</span></div>
        </div>
    );
}