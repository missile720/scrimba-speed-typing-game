import {useState, useRef, useEffect} from "react"

function useGameLogic() {
    const STARTING_TIME = 5
  
    const [text, setText] = useState("");
    const [timer, setTimer] = useState(STARTING_TIME);
    const [wordCount, setWordCount] = useState(0);
    const [gameState, setGameState] = useState(false);
    const textBoxRef = useRef(null);

    function updateText(event){
    setText(event.target.value);
    }

    function countWords(text){
    const wordsArr = text.split(" ");
    return wordsArr.filter(word => word !== "").length;
    }

    function startGame(){
    setGameState(true);
    setTimer(STARTING_TIME);
    setWordCount(0);
    setText("");
    textBoxRef.current.disabled = false
    textBoxRef.current.focus()
    }

    function endGame(){
    setGameState(false);
    setWordCount(countWords(text));
    }

    useEffect(() => {
    if(timer > 0 && gameState) {
        setTimeout(() => {
            setTimer(time => time - 1);
        }, 1000)
    }
    else if(timer === 0){
        endGame();
    }
    }, [timer, gameState]);

    return {textBoxRef, gameState, updateText, text, timer, startGame, wordCount};
}

export default useGameLogic