import React, {FC, useContext, useState} from "react";
import {NewGameFormStyled} from "./NewGameForm.styled";
import {GameContext} from "../../context/GameContext";
import {Opponent} from "../../opponent/opponent";

export const NewGameForm: FC = () => {
    const gameContext = useContext(GameContext);
    const [hardMode, setHardMode] = useState(false);

    const handleChangeHardMode = ()=>{
        setHardMode(!hardMode)
    }

    const startGame = (event:any)=>{
        event.preventDefault();
        const opponent = new Opponent(hardMode);
        gameContext.setOpponent(opponent);

        const currentGame = gameContext.currentGame;
        currentGame.isPlaying = true;
        gameContext.setCurrentGame(currentGame)
    }

    return(
            <NewGameFormStyled>
                <span>hardMode?</span>
                <input type="checkbox" checked={hardMode} onChange={handleChangeHardMode}/>
                <div>
                    <button onClick={startGame}>Lets get started</button>
                </div>
            </NewGameFormStyled>
    )
}