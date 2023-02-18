import React from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';

import Input from './Input';
import Select from './Select';
import Textarea from './Textarea';
import DatePicker from './DatePicker';
import InputDebounced from './InputDebounced';
import OtpInput from './OtpInput';

const propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  tip: PropTypes.string,
  error: PropTypes.string,
  errorMsg: PropTypes.string,
  name: PropTypes.string,
  floating: PropTypes.bool
};

const defaultProps = {
  className: undefined,
  label: undefined,
  tip: undefined,
  error: undefined,
  errorMsg: undefined,
  name: undefined,
  floating: false
};

const generateField = FormComponent => {
  const FieldComponent = ({
    className,
    label,
    tip,
    error,
    errorMsg,
    name,
    floating,
    ...otherProps
  }) => {
    const fieldId = uniqueId('form-field-');

    let classes = 'from-field';
    classes += floating ? ' floating-label-group' : '';
    // classes += isActive ? ' active' : ''
    if (otherProps.value && otherProps.value !== '') {
      classes += ' active';
    }
    classes += className ? ` ${className}` : '';
    classes += FormComponent == OtpInput ? ' verification-code-box-input' : '';
    classes += error || errorMsg ? ' input-error' : '';

    return (
      <div className={classes}>
        {label && !floating && <label htmlFor={fieldId}>{label}</label>}
        <FormComponent
          id={fieldId}
          // invalid={!!error}
          name={name}
          {...otherProps}
        />
        {label && floating && (
          <label className="floating-label" htmlFor={fieldId}>
            {label}
          </label>
        )}
        {tip && <div className="input-tip p-2">{tip}</div>}
        {error && <span className="errors-msg p-2">{error}</span>}
        {errorMsg && <span className="errors-msg p-2">{errorMsg}</span>}
      </div>
    );
  };

  FieldComponent.propTypes = propTypes;
  FieldComponent.defaultProps = defaultProps;

  return FieldComponent;
};

export default {
  Input: generateField(Input),
  Select: generateField(Select),
  Textarea: generateField(Textarea),
  DatePicker: generateField(DatePicker),
  InputDebounced: generateField(InputDebounced),
  OtpInput: generateField(OtpInput)
};
