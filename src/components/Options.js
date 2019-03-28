import React from 'react';

const Options = (props) => {
    const showOption = (e) => {
        let value = e.target.parentElement.innerHTML;
        let helperArray = value.split('<button>');
        let optionToRemove = helperArray[0];
        props.deleteAnOption(optionToRemove);
    }

    return (
        <div>
            <ul>
            {
                props.options.map((option, i) => {
                    return (
                        <li 
                            key={i}>{option}<button onClick={(e) => showOption(e)}> X </button></li>);
                })
            }
            </ul>
        </div>
    );
}

export default Options;
