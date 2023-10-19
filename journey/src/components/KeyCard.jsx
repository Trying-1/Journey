import React from 'react';

function KeyCard(props) {
    return (
        <div className="key-value-card">
            <div className="key">{props.keys}</div>
            <div className="value">{props.value}</div>
        </div>

    )
}



export default KeyCard;
