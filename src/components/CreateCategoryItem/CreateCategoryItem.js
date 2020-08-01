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
import { getCategoriesListAction } from '../../containers/ShoppingPage/action';
import { getAllServiceCategories } from '../../containers/ShoppingPage/reducer';
import { createInitialValuesObject, yupValidationObject, createCategoryItem } from './JS/functions';
import fieldsJson from './JS/input-fields.json'

class CreateCategoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMainService: 0
    }
  }

  componentDidMount(){
    this.props.getServicesAction();
  }

  categoryServiceOnchange = (data) => {
    if(data.id === 'select_category_service') {
      this.props.getCategoriesListAction({select_category_service: Number(data.val)});
      this.setState({selectedMainService: Number(data.val)})
    }
  }

  render() {

    const fields = [...fieldsJson.fields];
    const { categoryServiceItems, getAllServiceCategories } = this.props;
    const { selectedMainService } = this.state;

    if(categoryServiceItems) fields.find(data => data.type === 'select' && (data.options = this.props.categoryServiceItems));

    if(selectedMainService && getAllServiceCategories && Object.keys(getAllServiceCategories).length) {
      fields.find(data => data.id === 'select_category' && (data.options = getAllServiceCategories[selectedMainService] || []));
    }
    
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
            if (!props.isValid) return false;
            createCategoryItem(props.values)
          };

          return (
            <form
            className='product-recipient-address-form'
            onSubmit={props.handleSubmit}
            noValidate
            autoComplete='on'
          >
            <Row className='required-order-fields'>
              {fields.map(field => {
                return (
                  <div key={field.name + field.labelName} className={`${field.colLength} pb-3`}>
                    <InputField field={field} formikprops={props} onchangeHandler={this.categoryServiceOnchange} />
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
  getServicesAction: getServicesAction,
  getCategoriesListAction: getCategoriesListAction
}, dispatch);

const mapStateToProps = (state) => ({
  categoryServiceItems: getHomePageServices(state),
  getAllServiceCategories: getAllServiceCategories(state)
})

CreateCategoryItem.propTypes = {
  getServicesAction: PropTypes.func.isRequired,
  getCategoriesListAction: PropTypes.func.isRequired,
  categoryServiceItems: PropTypes.array.isRequired
};

export default  connect(mapStateToProps,mapActionToProps)(CreateCategoryItem);