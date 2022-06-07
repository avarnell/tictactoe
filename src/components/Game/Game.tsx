import React, {FC, useContext, useEffect, useState} from "react";
import {GameStyled} from "./Game.styled";
import {GameBoard} from "../GameBoard/GameBoard";
import {NewGameForm} from "../NewGameForm/NewGameForm";
import {GameContext} from "../../context/GameContext";
import {GameOver} from "../GameOver/GameOver";

export const Game: FC = () => {
    const gameContext = useContext(GameContext);
    const opponent = gameContext.opponent;
    const emptyKey = "-";
    const [board, setBoard] = useState(gameContext.currentGame.board)

    const opponentMove = ()=>{
        const move = opponent.getOpponentMove(gameContext.currentGame.board)
        gameContext.currentGame.markComputer(move);
        setBoard([...gameContext.currentGame.board])
    }

    const handleMove = (event:any) => {
        const indexClicked = event.target.dataset.boardIndex;
        if(gameContext.currentGame.isPlayerTurn && board[indexClicked] === emptyKey){
            gameContext.currentGame.markPlayer(indexClicked);
            gameContext.setCurrentGame(gameContext.currentGame);
            setBoard([...gameContext.currentGame.board])
            if(!gameContext.currentGame.isOver){
               opponentMove()
            }
        }
    }

    return(<GameStyled>
        {gameContext.currentGame.isPlaying ? <GameBoard board={board} handleMove={handleMove}/> : <NewGameForm />}
        {gameContext.currentGame.isOver && <GameOver win={gameContext.currentGame.isWin}/> }
    </GameStyled>);
}