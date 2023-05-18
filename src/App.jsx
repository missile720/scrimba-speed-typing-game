import React from "react"

function App() {
  const STARTING_TIME = 5
  
  const [text, setText] = React.useState("");
  const [timer, setTimer] = React.useState(STARTING_TIME);
  const [wordCount, setWordCount] = React.useState(0);
  const [gameState, setGameState] = React.useState(false);
  const textBoxRef = React.useRef(null);

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

  React.useEffect(() => {
    if(timer > 0 && gameState) {
        setTimeout(() => {
          setTimer(time => time - 1);
        }, 1000)
    }
    else if(timer === 0){
      endGame();
    }
  }, [timer, gameState])

  return (
    <>
      <h1>Speed Typing Game</h1>
      <textarea ref={textBoxRef} disabled={!gameState} name="" id="" cols="30" rows="10" onChange={updateText} value={text}/>
      <h4>Time Remaining: {timer}</h4>
      <button onClick={startGame} disabled={gameState}>Start Game</button>
      <h1>Word Count: {wordCount}</h1>
    </>
  )
}

export default App
