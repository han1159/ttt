import React ,{useState} from 'react';
import './TicTacToe.css';

const TicTacToe = () => {
    const [board,setBoard] = useState(Array(9).fill(null));
    const [currentPlayer,setCurrentPlayer] = useState("X");
    const [winner,SetWinner] = useState(null);

    const handleClick = (index) => {
        if (winner || board[index]) return;

        const newBoard = [...board];
        newBoard[index] = currentPlayer
        setBoard(newBoard);
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
        checkWinner(newBoard)
    };

    const checkWinner = (board) => {
        const winLines = [        
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
    ];

    for (let i = 0 ; i< winLines.length;i++){
        const [a,b,c] = winLines[i]
        if (board[a] && board[a] === board[b] && board[a] === board[c]){
            SetWinner(board[a]);
            return;
        }
    }
    if (board.every(square => square!== null)){
        SetWinner('Draw');  
    }
    };

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setCurrentPlayer('X');
        SetWinner(null);
    };

    const renderSquare = (index) => {
        return (
            <button className='square' onClick={() => handleClick(index)}>{board[index]}</button>
        );
    }; 
    
    return(
        <div className='tic-tac-toe'>
            <h1>TIC-TAC-TOE</h1>
            <div className='board'>
                {board.map((square,index) => (
                    <div key={index} className='square-container'>{renderSquare(index)}</div>
                ))}
            </div>
            <div className='status'>
                {winner ? (winner === 'Draw' ? (<p>Draw</p>):(<p>{`Player ${winner} wins!`}</p>)):(<p>{`Current Player: ${currentPlayer}`}</p>)}
                <button onClick={resetGame}>Reset</button>
            </div>
        </div>
    );
};

export default TicTacToe;