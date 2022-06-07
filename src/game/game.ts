export class Game{
    isOver: boolean;
    isWin: boolean;
    isPlaying: boolean;
    isPlayerTurn: boolean;
    board:string[] = new Array(9).fill('-');


    public constructor(){
        this.isOver = false;
        this.isWin = false;
        this.isPlaying = false;
        this.isPlayerTurn = true;
    }

    public markPlayer(coordinate:number){
        const symbol = "X"
        this.board[coordinate] = symbol;
        this.checkWin(symbol)

        this.isPlayerTurn = false;
    }

    public markComputer(coordinate:number){
        if(coordinate){
            const symbol ="O";
            this.board[coordinate] = symbol;

            this.isPlayerTurn = true;
            this.checkWin(symbol)
        }else{
            this.isOver = true;
        }
    }

    private checkWin(symbol:string){
        let win = this.checkHorizontalWin(symbol);

        if(!win){
            win = this.checkVertWin(symbol);
        }

        if(!win){
            win = this.checkDiagWin(symbol)
        }

        if(win){
            this.isOver = true;
            if(symbol === 'X'){
                this.isWin = true;
            }
        }
    }
    private checkHorizontalWin(symbol:string){
        let isWin = false;
        if(this.board[0] === symbol){
            if(this.board[1] === symbol && this.board[2] === symbol){
                isWin = true;
            }
        }else if(this.board[3] === symbol){
            if(this.board[4] === symbol && this.board[5] === symbol){
                isWin = true;
            }

        }else if(this.board[6]=== symbol){
            if(this.board[7] === symbol && this.board[8] === symbol){
                isWin = true;
            }
        }

        return isWin;
    }

    private checkVertWin(symbol:string){
        let isWin = false;
        if(this.board[0] === symbol){
            if(this.board[3] === symbol && this.board[6] === symbol){
                isWin = true;
            }
        }else if(this.board[1] === symbol){
            if(this.board[4] === symbol && this.board[7] === symbol){
                isWin = true;
            }

        }else if(this.board[2]=== symbol){
            if(this.board[5] === symbol && this.board[8] === symbol){
                isWin = true;
            }
        }

        return isWin;
    }

    private checkDiagWin(symbol:string){
        let isWin = false;
        if(this.board[0] === symbol){
            if(this.board[4] === symbol && this.board[8] === symbol){
                isWin = true;
            }
        }else if(this.board[2] === symbol){
            if(this.board[4] === symbol && this.board[6] === symbol){
                isWin = true;
            }

        }
        return isWin;
    }
}
