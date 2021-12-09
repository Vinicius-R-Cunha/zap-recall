import { useState } from "react";
import Flashcard from "./Flashcard";
import LogoMini from "./LogoMini";

export default function MainPage() {
    //let [page, setPage] = useState('show');
    const page = 'hidden'; {/*DELETE*/ }

    return (
        <>
            <div className={`main-page ${page}`}>
                <img className="logo" src="assets/logo.png" />
                {/* <div className="start-button" onClick={() => setPage('hidden')}> */}
                <div className="start-button"> {/*DELETE*/}
                    Praticar React
                    <img src="assets/next.png" />
                </div>
            </div>

            <div className={`flashcards ${page === 'show' ? 'hidden' : 'show'}`}>
                <LogoMini />
                <Flashcard />
            </div>
        </>
    );
}