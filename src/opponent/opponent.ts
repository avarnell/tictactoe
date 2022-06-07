export class Opponent{
    private readonly hardMode: boolean;

    public constructor(hardMode: boolean) {
        this.hardMode = hardMode;
    }

    public getOpponentMove(gameBoard:string[]){
        if(this.hardMode){
            return this.findBestMove(gameBoard);
        }else{
            return this.findAnyMove(gameBoard)
        }
    }

    private findAnyMove(gameBoard:string[]){
        const allMoves = gameBoard.reduce((moves:number[], spot:string, index:number)=>{
            if(spot === "-"){
                moves.push(index);
            }
            return moves;
        },[]);

        return allMoves[Math.floor(Math.random()*allMoves.length)]
    }

    private findBestMove(gameBoard:string[]){

    }

}

