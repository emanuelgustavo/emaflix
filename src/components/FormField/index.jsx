import React from 'react';
import PropTypes from 'prop-types';

const FormField = ({ label, type, name, value, onChange }) => {
    return (
        <div>
            <label>
                {label}
                <input
                    type={type}
                    value={value}
                    name={name}
                    onChange={onChange}
                />
            </label>
        </div>
    );
};

export default FormField;

FormField.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};