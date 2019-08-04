import React from 'react';

const Checkbox = ({ label, name, value, onChangeHandler }) => {
    return (
        <React.Fragment>
            <input type="checkbox" name={name} id={name} value={value} onChange={onChangeHandler} />
            <label htmlFor={name}>{label}</label>
        </React.Fragment>
    );
}

export default Checkbox;
