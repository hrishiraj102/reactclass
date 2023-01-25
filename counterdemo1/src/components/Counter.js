import React,{ useState } from "react"

export default function Counter(){

    const [count,setCount] = useState(0)
    return(
        <div>
            <header className="App-header">
            <h1> Counter App using react useState</h1>
            <p className="para">Count is:<b>{count}</b> </p>
            <p className="error"></p>
            <div>
                <button className="btn" >Decrement</button>
                <button className="btn" >Increment</button>
            </div>
            </header>
        </div>
    )
}