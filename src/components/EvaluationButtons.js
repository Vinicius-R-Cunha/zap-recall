export default function EvaluationButtons({ showButtons, setShowButtons, setBorder }) {

    function conclude(button) {
        if (button === '1') {
            setBorder('black-border');
        } else if (button === '2') {
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
            <div className="button-1" onClick={() => conclude('1')}>Aprendi<br />agora</div>
            <div className="button-2" onClick={() => conclude('2')}>Não<br />lembrei</div>
            <div className="button-3" onClick={() => conclude('3')}>Lembrei<br />com<br />esforço</div>
            <div className="button-4" onClick={() => conclude('4')}>Zap!</div>
        </div>
    );
}