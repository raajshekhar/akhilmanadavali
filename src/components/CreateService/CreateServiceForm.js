import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Row, Container } from 'reactstrap';
import InputField from '../InputField';
import { createInitialValuesObject, yupValidationObject, createService } from './JS/functions';
import fieldsJson from './JS/input-fields.json'

class CreateServiceForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const initialValues = { ...createInitialValuesObject(fieldsJson.fields)};
    return (
      <Container className="mt-3">
        <Formik
        initialValues={initialValues}
        enableReinitialize
        validationSchema={Yup.object().shape(yupValidationObject(Yup, fieldsJson.fields))}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
        }}
      >
        {(props) => {
          props.submitHandler = async e => {
            props.validateForm();
            console.clear()
            console.log(props.isValid, props.values)
            if (!props.isValid) return false;
            createService(props.values)
          };

          return (
            <form
            className='product-recipient-address-form'
            onSubmit={props.handleSubmit}
            noValidate
            autoComplete='on'
          >
            <Row className='required-order-fields'>
              {fieldsJson.fields.map(field => {
                return (
                  <div key={field.name + field.labelName} className={`${field.colLength} pb-3`}>
                    <InputField field={field} formikprops={props} />
                  </div>
                )
              })}
              </Row>
            <div className="service-btn">
              <button
                className="mt-4 mb-3 btn btn-primary btn-lg save-and-continue-submit"
                type='submit'
                onClick={props.submitHandler}
              >
                  Continue
              </button>
            </div>
          </form>
          );
        }}
      </Formik>
      </Container>
    );
  }
}

export default CreateServiceForm;