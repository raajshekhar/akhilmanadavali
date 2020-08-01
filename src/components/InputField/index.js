import React from 'react';
import PropTypes from 'prop-types';
import InputValidationField from '../InputValidation/InputValidation';

function InputFields(props) {
  const {
    formikprops: {
      values,
      touched,
      errors,
      handleChange,
      setFieldTouched,
      handleBlur
    },
    onchangeHandler = () => {},
    field,
  } = props;

  const inputFieldonChangeHandler = (e) => {
    handleChange(e);
    setFieldTouched(field.id, true);
    onchangeHandler({id: field.id, val: e.target.value});
  }

  return (
    <div className='input-fields-div'>
      <InputValidationField
        {...field}
        id={field.id}
        value={values[field.id]}
        onChange={inputFieldonChangeHandler}
        labelImp={field.requiredErrorMessage}
        className={(errors[field.id] && touched[field.id]) ? 'text-input error': 'text-input'}
        placement='bottom'
        touched={touched[field.id]}
        errorMsg={errors[field.id]}
        onBlur={handleBlur}
      />
    </div>
  );
}

InputFields.propTypes = {
  field: PropTypes.object.isRequired,
  formikprops: PropTypes.object.isRequired,
  onchangeHandler: PropTypes.func
};

export default React.memo(InputFields);