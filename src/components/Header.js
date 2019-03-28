import React from 'react';

const Header = (props) => {
    return (
        <div>
            <h3>{props.name}</h3>
            <p>{props.desc}</p>
        </div>
    );
}

Header.defaultProps = {
    name: "React boilerplate name",
    desc: "N/A"
}

export default Header;
