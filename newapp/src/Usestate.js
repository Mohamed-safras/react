import React,{useState} from 'react'
import './Usestate.css';

function Usestate() {
    const [count, setcount] = useState(0)
    function decrese(){
        setcount(count=>count+1)
    }
    return (
        <div className="count">
            <div>
                <h1 className="p">The count is {count}</h1>
            </div>
            <div className="button">
                <button className="btn" onClick={decrese}>+</button>
                <button className="btn" onClick={()=>{setcount(count-1)}}>-</button>
            </div>
        </div>
    )
}

export default Usestate

