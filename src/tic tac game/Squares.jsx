import React from "react";

const Squares = (props) =>{
    return(
        <div
        onClick={props.onClick}
        className="square">
            <h5>{props.value}</h5>
        </div>
    )
}
export default Squares