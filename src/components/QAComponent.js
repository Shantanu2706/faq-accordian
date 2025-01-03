import React, { useState } from 'react'
import iconMinus from "../images/icon-minus.svg"
import iconPlus from "../images/icon-plus.svg"

const QAComponent = ({ question, answer }) => {
    const [isShown, setIsShown] = useState(false)

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            setIsShown(!isShown);
        }
    };

    return (
        <div className='qa-component'>
            <div className='question-section'>
                <div
                    className='question'
                    onClick={() => setIsShown(!isShown)}
                    tabIndex={0}
                    onKeyDown={handleKeyDown}
                >
                    {question}
                </div>
                <img src={isShown ? iconMinus : iconPlus} alt="logo" className="icon-minus-plus" onClick={() => setIsShown(!isShown)} />
            </div>
            {
                isShown &&
                <div className='answer'>
                    {answer}
                </div>
            }

        </div>
    )
}

export default QAComponent