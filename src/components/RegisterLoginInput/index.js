import { useState } from 'react';
import './reglogin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const RegLoginInput = ({ input, formData, onDataChange }) => {
  const [focus, setFocus] = useState(false);
  const { error, id, label, disablePaste, ...inputProps } = input;
  const value = formData[input.name].value;
  const valid = formData[input.name].valid;

  const displayIcon = value ? (
    valid ? (
      <FontAwesomeIcon icon={faCheck} className='form-icon form-icon-valid' />
    ) : (
      <FontAwesomeIcon icon={faTimes} className='form-icon form-icon-invalid' />
    )
  ) : (
    <></>
  );

  return (
    <div className='form-input'>
      <label htmlFor={id} className='form-label'>
        {label}
        {displayIcon}
      </label>
      <input
        {...inputProps}
        className={`form-control ${value ? (valid ? 'valid-input' : 'invalid-input') : ''}`}
        value={value}
        onChange={onDataChange}
        onBlur={() => setFocus(false)}
        onFocus={() => setFocus(true)}
        onPaste={e => disablePaste && e.preventDefault()}
      />
      {value && !focus && !valid && <span>{error}</span>}
    </div>
  );
};

export default RegLoginInput;
