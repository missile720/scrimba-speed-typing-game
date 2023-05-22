import React from "react"
import gameLogic from "./hooks/useGameLogic"

function App() {
  const {textBoxRef, gameState, updateText, text, timer, startGame, wordCount} = gameLogic();

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
