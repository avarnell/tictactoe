export interface ISpot {
    spotValue :string;
    boardIndex: number;
    action:(event: any) => void;
}