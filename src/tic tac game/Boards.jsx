import React, { useState } from "react"
import Squares from "./Squares"
const Boards = ()=>{

    const [state , setState] = useState (Array(9).fill(null))
    // console.log("state", state)
    const [IsXTurn, setIsXTurn] = useState(true)

    const checkWinner = ()=>{
        const winnerLogic =[
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let logic of winnerLogic){
            const[a, b, c] = logic
            if( state[a] !== null  && state[a] === state[b] && state[a] === state[c]){
                return state[a]
            }
        }
        return false
    };

    const isWinner = checkWinner();

    const handelClick = (index)=>{
        // console.log("hello", index)
        if(state[index] !== null){
            return;
        }
        const copyState = [...state]
        copyState[index] = IsXTurn ? "x" :"0"
        setState(copyState)
        setIsXTurn (!IsXTurn)

    };

    const handleReset = ()=>{
        setState(Array(9).fill(null))
    }

    return(
        <div className="board-container">
        {isWinner ? (<>{isWinner} won the game <button onClick={handleReset}> Play Again</button></>):<>
        <h4>Player {IsXTurn ? "x" : "o"} Please Move</h4>
            <div className="board-row">
                <Squares onClick={()=> handelClick(0)} value ={state[0]}/>
                <Squares onClick={()=> handelClick(1)} value ={state[1]} />
                <Squares onClick={()=> handelClick(2)} value ={state[2]}/>
            </div>
            <div className="board-row">
                <Squares onClick={()=> handelClick(3)} value ={state[3]}/>
                <Squares onClick={()=> handelClick(4)} value ={state[4]}/>
                <Squares onClick={()=> handelClick(5)} value ={state[5]}/>
            </div>
            <div className="board-row">
                <Squares onClick={()=> handelClick(6)} value ={state[6]}/>
                <Squares onClick={()=> handelClick(7)} value ={state[7]}/>
                <Squares onClick={()=> handelClick(8)} value ={state[8]}/>
            </div>
        </> }
        </div>
    )
}
export default Boards