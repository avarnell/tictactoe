import {FC} from "react";
import {MarkStyled, SpotStyled} from "./Spot.styled";
import {ISpot} from "./types/spot";

export const Spot: FC<ISpot> = ({spotValue, action, boardIndex}) => {

    return (<SpotStyled onClick={action} data-board-index={boardIndex}>
        <MarkStyled>{spotValue}</MarkStyled>
    </SpotStyled>);
}