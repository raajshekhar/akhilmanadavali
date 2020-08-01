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
};

export async function createService(formData){
    const image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRjS6Hk9c-FPSZ51CdpnQ2H2ou9WXSHIQLv0Q&usqp=CAU';
    const data = {
        name: formData.service_name,
        description: formData.service_description,
        path: formData.path,
        status: formData.service_status,
        image_path: image
    }
    
    const requestObj = {
        method: 'post',
        url: config.API_URL + config.API_URL_CREATE_SERVICE,
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