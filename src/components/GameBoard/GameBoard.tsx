import React, {FC, useContext, useState} from "react";
import {Spot} from "../Spot/Spot";
import {GameBoardStyled} from "./GameBoard.styled";
import {IGameBoard} from "./types/gameBoard";

export const GameBoard: FC<IGameBoard> = ({handleMove, board}) => {

    return (<GameBoardStyled>
        {board.map((spotValue:string, i:number)=>{
            return <Spot action={handleMove} spotValue={spotValue}  key={`spot_${i}`} boardIndex={i} />
        })}
    </GameBoardStyled>);
}