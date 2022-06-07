import React, {FC, useState} from "react";
import { Game } from "../game/game";

export const GameContext = React.createContext<any>(null)


export const GameProvider: FC<any> = ({children})=>{
    const game = new Game();
    const [currentGame, setCurrentGame] = useState(game);
    const [opponent, setOpponent] = useState(null)
    const [opponentTurn, setOpponentTurn] = useState(!game.isPlayerTurn);

    const store = {currentGame, setCurrentGame, opponent, setOpponent, opponentTurn, setOpponentTurn}

    return <GameContext.Provider value={store}>
        {children}
    </GameContext.Provider>
}