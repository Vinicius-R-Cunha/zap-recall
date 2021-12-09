//import { useState } from "react";
import Flashcard from "./Flashcard";
import LogoMini from "./LogoMini";

export default function MainPage() {
    //let [page, setPage] = useState('show');
    // ${page === 'show' ? 'hidden' : 'show'}
    return (
        <>
            <div className={`main-page hidden`}>
                <img className="logo" src="assets/logo.png" alt="" />
                {/* <div className="start-button" onClick={() => setPage('hidden')}> */}
                <div className="start-button">
                    Praticar React
                    <img src="assets/next.png" alt="" />
                </div>
            </div>

            <div className={`flashcards`}>
                <LogoMini />
                <Flashcard />
            </div>
        </>
    );
}