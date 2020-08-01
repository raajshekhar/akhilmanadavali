import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Row, Container } from 'reactstrap';
import InputField from '../InputField';
import { getHomePageServices } from '../../containers/ImportantView/reducer';
import { getServicesAction } from '../../containers/ImportantView/action';
import { createInitialValuesObject, yupValidationObject, createCategory } from './JS/functions';
import fieldsJson from './JS/input-fields.json'

class CreateCategoryService extends React.Component {

  componentDidMount(){
    this.props.getServicesAction();
  }

  render() {

    const fields = [...fieldsJson.fields];

    if(this.props.categoryServiceItems) fields.find(data => data.type === 'select' && (data.options = this.props.categoryServiceItems));

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
            const { category_name } = props.values;
            props.values.path = category_name.replace(/[^a-zA-Z0-9]/g, '');
            props.validateForm();
            if (!props.isValid) return false;
            createCategory(props.values);
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

const mapActionToProps = dispatch => bindActionCreators({
  getServicesAction: getServicesAction
}, dispatch);

const mapStateToProps = (state) => ({
  categoryServiceItems: getHomePageServices(state)
})

CreateCategoryService.propTypes = {
  getServicesAction: PropTypes.func.isRequired,
  categoryServiceItems: PropTypes.array.isRequired
};

export default connect(mapStateToProps,mapActionToProps)(CreateCategoryService);