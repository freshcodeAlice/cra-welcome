import React from 'react';
import './UserCard.css';

const UserCard = (props) => {

    const cN = props.isSelected ? "selected" : "";

    const btnHandler = () => {
        const {selectCallback, id} = props;
        selectCallback(id);
    }

    return (
        <div className={cN} onClick={btnHandler}>
            {props.firstName} {props.lastName}
        </div>
    );
}

export default UserCard;
