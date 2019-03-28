import React from 'react';

const OptionButtons = (props) => {
    const showRandomOption = () => {
        let index = Math.floor(Math.random() * props.options.length);
        let message = `What you really should do is '${props.options[index]}'!`;
        alert(message);
    }

    const isBtnAvailable = () => {
        if (props.options.length === 0) return true;
        else return false;
    }

    return (
        <div>
            <button onClick={showRandomOption} disabled={isBtnAvailable()}>Tell me an option</button>
            <button onClick={props.removeAllOptions}>Remove all options</button>
        </div>
    );
}

export default OptionButtons;
