import React from 'react';

const InputField = ({ label, star, type, name, value, minLength, title, onChangeHandler }) => {
    return (
        <React.Fragment>
            <label htmlFor={name}>{label}<span className="required-span"> {star}</span></label>
            <input
                type={type}
                name={name}
                id={name}
                value={value}
                minLength={minLength}
                title={title}
                onChange={onChangeHandler}
            />
        </React.Fragment>
    );
}

export default InputField;
