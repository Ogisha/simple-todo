import React from 'react';

const Options = (props) => {
    return (
        <div>
            <ul>
            {
                props.options.map((option, i) => {
                    return <li key={i}>{option}</li>;
                })
            }
            </ul>
        </div>
    );
}

export default Options;