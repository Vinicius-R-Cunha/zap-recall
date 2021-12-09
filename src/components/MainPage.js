export default function MainPage({ page, setPage, ending }) {
    return (
        <div className={`main-page ${page} ${ending === 'hidden' ? '' : 'hidden'}`}>
            <img className="logo" src="assets/logo.png" alt="" />
            <div className="start-button" data-identifier="start-zap-recall" onClick={() => setPage('hidden')}>
                Praticar React
                <img src="assets/next.png" alt="" />
            </div>
        </div>
    );
}