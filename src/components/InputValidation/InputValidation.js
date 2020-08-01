import React from 'react';
import PropTypes from 'prop-types';
import {
Label, Input, Popover, PopoverBody
} from 'reactstrap';
import ImageUpload from './Types/FileUpload';
import { customOnKeyPress } from './functions';
import './input-validation.scss';

const InputValidationField = (props) => {
  const {
    type,
    id,
    value,
    onChange,
    onBlur,
    onKeyUp = () => {},
    placeholder,
    className,
    autoComplete = 'off',
    touched = false,
    placement = 'bottom',
    errorMsg = '',
    labelClass = props.type === 'checkbox' ? 'mb-0' : '',
    labelName = '',
    labelImp = false,
    options = [],
    maxLength = '200',
    rows='10',
    cols='10',
    onKeyPress = () => {},
    readOnly=false,
    restrictions = [],
    defaultChecked = false,
    setFieldValue = () => {}
  } = props;
  const passToField = {
    type,
    id,
    value,
    onChange,
    onBlur,
    onKeyUp,
    placeholder,
    className,
    autoComplete,
    touched,
    placement,
    errorMsg,
    labelClass,
    labelName,
    labelImp,
    options,
    maxLength,
    onKeyPress,
    rows,
    cols,
    readOnly,
    restrictions,
    defaultChecked
  };
  let showIcon = null;
  if (touched) {
    if (errorMsg) showIcon = closeIcon;
    else if(value) showIcon = checkIcon;
  }
  if(type === 'file') return ImageUpload({ ...passToField, showIcon, setFieldValue });
  return type !== 'select'
    ? InputField({ ...passToField, showIcon })
    : SelectField({ ...passToField, showIcon });
};


InputValidationField.propTypes = {
  defaultChecked: PropTypes.bool,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  value: PropTypes.PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onKeyUp: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  autoComplete: PropTypes.string,
  touched: PropTypes.bool,
  errorMsg: PropTypes.string,
  placement: PropTypes.string,
  labelClass: PropTypes.string,
  labelName: PropTypes.string,
  labelImp: PropTypes.any,
  showIcon: PropTypes.any,
  maxLength: PropTypes.string,
  };

export default InputValidationField;
const closeIcon = (
  <span className="error-icon">
    <i className="material-icons text-white">close</i>
  </span>
);
const checkIcon = (
  <span className="success-icon">
    <i className="material-icons text-white">check</i>
  </span>
);

const InputField = ({
  type,
  id,
  value,
  onChange,
  onBlur,
  onKeyUp,
  placeholder,
  className,
  autoComplete,
  touched,
  placement,
  errorMsg,
  labelClass,
  labelName,
  labelImp,
  showIcon,
  maxLength,
  onKeyPress,
  rows,
  cols,
  readOnly,
  restrictions,
  defaultChecked
}) => {
  const inputFields = {
    type,
    id,
    value,
    onKeyPress,
    onBlur,
    className,
    onKeyUp,
    placeholder,
    autoComplete,
    maxLength,
    rows,
    cols,
    readOnly,
    defaultChecked
  };
  const popoverData = {
    isOpen: touched && errorMsg.length > 0,
    placement,
    target: id,
    flip: false
  };

  return (
    <div className={`custom-input-validation ${type ==='checkbox' ? 'checkbox' : 'input'}-wrapper`}>
      {(labelName && type!=='checkbox') && (
        <Label htmlFor={id} className={labelClass}>
          {labelName}
          <sup className={`text-danger ${labelImp ? '' : 'd-none'}`}>*</sup>
        </Label>
      )}
      <div className="position-relative">
      {(type==='checkbox') && (
        <Label htmlFor={id} className={`${labelClass} ml-4`}>
          {labelName}
          <sup className={`text-danger ${labelImp ? '' : 'd-none'}`}>*</sup>
        </Label>
      )}
        <Input {...inputFields} onChange={onChange} onKeyPress={(e)=>{customOnKeyPress(e, restrictions, onKeyPress)}}  />
        {showIcon}
        {type==='checkbox' ? <div className="input-checkbox-check" /> : null}
      </div>
      <div>
        {errorMsg && touched && (
          <Popover {...popoverData}>
            <PopoverBody className="errorInfoMessage">{errorMsg}</PopoverBody>
          </Popover>
        )}
      </div>
    </div>
  );
};

InputField.propTypes = {
  defaultChecked: PropTypes.bool,
  restrictions: PropTypes.array,
  readOnly: PropTypes.bool,
  rows: PropTypes.string,
  cols: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onKeyUp: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  autoComplete: PropTypes.string,
  touched: PropTypes.bool,
  errorMsg: PropTypes.string,
  placement: PropTypes.string,
  labelClass: PropTypes.string,
  labelName: PropTypes.string,
  labelImp: PropTypes.string,
  showIcon: PropTypes.any,
  maxLength: PropTypes.string,
  };

const SelectField = ({
  type,
  id,
  value,
  onChange,
  onBlur,
  onKeyUp,
  placeholder,
  className,
  autoComplete,
  touched,
  placement,
  errorMsg,
  labelClass,
  labelName,
  labelImp,
  showIcon,
  options
}) => {
  const inputFields = {
    type,
    id,
    value,
    onChange,
    onBlur,
    className,
    onKeyUp,
    placeholder,
    autoComplete
  };
  const popoverData = {
    isOpen: touched && errorMsg.length > 0,
    placement,
    target: id,
    flip: false
  };
  return (
    <div className="custom-input-validation select-wrapper">
    <div className="position-relative">
      {labelName && (
        <Label htmlFor={id} className={labelClass}>
          {labelName}
          <sup className={`text-danger ${labelImp ? '' : 'd-none'}`}>*</sup>
        </Label>
      )}
      <Input {...inputFields}>
        <option hidden value="">{placeholder}</option>
        {options.map(data => (
            <option key={data.id} data-content={data.name} value={data.id}>
              {data.name}
            </option>
          ))}
      </Input>
      {showIcon}
      {errorMsg && touched && (
        <Popover {...popoverData}>
          <PopoverBody className="errorInfoMessage">{errorMsg}</PopoverBody>
        </Popover>
      )}
    </div>
    </div>
  );
};
SelectField.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onKeyUp: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  autoComplete: PropTypes.string,
  touched: PropTypes.bool,
  errorMsg: PropTypes.string,
  placement: PropTypes.string,
  labelClass: PropTypes.string,
  labelName: PropTypes.string,
  labelImp: PropTypes.string,
  showIcon: PropTypes.any,
  maxLength: PropTypes.string,
  options: PropTypes.array.isRequired
  };