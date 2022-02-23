import React, { Component } from 'react';

function Toggler (props) {

        return (
            <button onClick={props.callbackParent}> Click to change theme </button>
        );
}

export default Toggler;
