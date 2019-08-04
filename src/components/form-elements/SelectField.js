import React from 'react';

const SelectField = ({ name, defaultValue, title, options, onChangeHandler }) => {
    return (
        <select name={name} id={name} defaultValue={defaultValue} title={title} onChange={onChangeHandler}>
            <option disabled value={null}>{defaultValue}</option>
            {options.map((item) => <option value={item} key={item}>{item}</option>)}
        </select>
    );
}

export default SelectField;
