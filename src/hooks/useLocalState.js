import { useState } from "react";

function useLocalState() {
    const initialStorage = localStorage.getItem("todoStorage");
    const initialState = initialStorage ? JSON.parse(initialStorage) : [];

    const [state, setState] = useState(initialState);

    function setLocalState(newState) {
        localStorage.setItem("todoStorage", JSON.stringify(newState));
        setState(newState);
    }

    return [state, setLocalState];
}

export default useLocalState;
