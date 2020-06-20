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
      handleBlur,
      onChangeUpdateAccordion
    },
    field,
  } = props;

  const onChangeHandler = (e) => {
    handleChange(e);
    setFieldTouched(field.id, true);
  }

  return (
    <div className='input-fields-div'>
      <InputValidationField
        {...field}
        id={field.id}
        value={values[field.id]}
        onChange={onChangeHandler}
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
  formikprops: PropTypes.object.isRequired
};

export default React.memo(InputFields);