import React from "react";
import '../styles/Contador.css'

function Contador(props){
    return(
        <div className="Contador">
            {props.numclics}
        </div>
    )
}
export default Contador;