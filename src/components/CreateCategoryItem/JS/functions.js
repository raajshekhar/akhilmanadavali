import axios from 'axios';
import config from '../../../config';

export function createInitialValuesObject(fields){
    if(!fields.length) return {};
    const finalInitialValuesObject = fields.reduce((finalObject, currentObject) => ({...finalObject, [currentObject.id]: currentObject.value}), {});
    return finalInitialValuesObject;
}

export function yupValidationObject(Yup, fields){
    if(!fields.length) return {};

    const fieldsValidationArray = fields.reduce((finalObject, currentObject) => ([...finalObject, {name: `${currentObject.id}`, required: currentObject.requiredErrorMessage, regex: currentObject.yupValidationRegex  }]), [])

    const validation = [...fieldsValidationArray].flat().reduce((finalObj, current) => {
     const { name, required, regex = '' } = current;
     let field = '';

     if(regex || required.length) {
        field = {[name]: Yup.string().trim().required(`${required}`)};
     } else {
        field = {[name]: Yup.string().trim()};
     }

     return { ...finalObj, ...field };
    },{});
    return validation;
}

export async function createCategoryItem(formData){
    const image = 'https://static.turbosquid.com/Preview/2015/05/12__07_31_21/ElectricLightBulb02.jpg025e935c-c9c2-4b34-9d25-ed56edab7550Original.jpg';
    const data = {
        name: formData.category_item_name,
        time: formData.category_item_time,
        amount: Number(formData.category_item_amount),
        count_available: Number(formData.category_item_count),
        category_item_service: Number(formData.select_category),
        catergory_service: Number(formData.select_category_service),
        image_path: formData.category_image || image,
        description: formData.category_item_description,
        status: formData.category_item_status
    }
    
    const requestObj = {
        method: 'post',
        url: config.API_URL + config.API_CREATE_CATEGORY_ITEM,
        data,
        config: {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
      };
    try {
        const requestPromise = await axios(requestObj);
        console.log('requestPromise::: ',requestPromise);
    } catch (error) {
        console.log('error::: ',error);
    }
}