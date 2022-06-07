import {FC} from "react";
import {IGameOver} from "./types/gameOver";
import {StyledGameOver} from "./GameOver.styled";

export const GameOver: FC<IGameOver> =({win})=>{
    return(
    <StyledGameOver> YOU {win ? "WIN" : "LOSE" }

    </StyledGameOver>);
}