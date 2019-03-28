import React from 'react';

const AddOption = (props) => {
    return (
        <div>
            <form onSubmit={props.addAnOption}>
                <input type="text" name="option" />
                <button type="submit">Add an option</button>
            </form>
        </div>
    );
}

export default AddOption;
