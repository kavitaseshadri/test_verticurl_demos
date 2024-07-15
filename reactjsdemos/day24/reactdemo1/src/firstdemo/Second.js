import React from 'react'
import './Second.css'

const Second = () => {

    let text = "Event Handling Demo";
    const handleClickFunction = (event) => {
        alert('The button was clicked')
        console.log('The button was clicked');
    }


    return (
        <div>
            <h1>{text}</h1>
            <button onClick={handleClickFunction}>Button1</button>
        </div>
    )
}

export default Second