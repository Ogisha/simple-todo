import React from 'react';

const Options = (props) => (
    <div>
        <ul>
        {
            props.options.map((option, i) => {
                return (
                    <li key={i}>{option}
                        <button onClick={(e) => props.handleDeleteOption(e.target.parentElement.innerHTML)}>X</button>
                    </li>
                );
            })
        }
        </ul>
    </div>
);

export default Options;

