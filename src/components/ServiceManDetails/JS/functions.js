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