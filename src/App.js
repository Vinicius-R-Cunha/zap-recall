import { useState } from "react";
import Flashcards from "./components/Flashcards";
import MainPage from "./components/MainPage";
import Success from "./components/Success";
import Failure from "./components/Failure";

export default function App() {
    let [page, setPage] = useState('show');
    let [ending, setEnding] = useState('hidden');
    let [successPage, setSuccessPage] = useState('hidden');

    return (
        <>
            <MainPage page={page} setPage={setPage} ending={ending} />
            <Flashcards page={page} ending={ending} setEnding={setEnding} setSuccessPage={setSuccessPage} />
            <Success ending={ending} setEnding={setEnding} successPage={successPage} />
            <Failure ending={ending} setEnding={setEnding} successPage={successPage} />
        </>
    );
}

