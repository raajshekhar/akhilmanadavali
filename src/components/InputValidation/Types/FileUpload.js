import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
Label, Input, Popover, PopoverBody
} from 'reactstrap';
import '../input-validation.scss';

const ImageUpload = (props) => {
    const {
        type,
        id,
        value,
        onChange,
        onBlur,
        setFieldValue,
        className,
        touched,
        placement,
        errorMsg,
        labelClass,
        labelName,
        labelImp,
        showIcon,
        maxLength,
        rows,
        cols,
      } = props;

    const inputFields = {
        type,
        id,
        value,
        onBlur,
        className,
        maxLength,
        rows,
        cols
    };

    const popoverData = {
        isOpen: touched && errorMsg.length > 0,
        placement,
        target: id,
        flip: false,
        className:'upload-image'
    };

    const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
    const [uploadImgSizeError, setUploadImgSizeError] = useState(null);

    const handleImageChange = (e) => {
        const { maxLength = 20000000, fetchploadimgAction = (data) => console.log(data) } = props;
        const file = e.target.files[0];
        if(file.size > maxLength) {
            const requiredVal = (maxLength/1000000);
            setUploadImgSizeError(`Image size cannot be more than ${requiredVal}MB`);
          return false;
        }
        const formData = new FormData();
        formData.append('picture', file);
        fetchploadimgAction(formData);
        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreviewUrl(reader.result);
            onChange(e);
            setUploadImgSizeError('');
            const uploadImagePopOver = document.querySelector('.upload-image .popover');
            const statusIcon = document.querySelector('.upload-image-wrapper .error-icon');

            uploadImagePopOver && (uploadImagePopOver.style.display = 'none');
            uploadImagePopOver && (uploadImagePopOver.style.display = 'none');
            statusIcon && (statusIcon.classList.remove('error-icon'));
            statusIcon && (statusIcon.classList.add('success-icon'));
            statusIcon && (statusIcon.firstElementChild.textContent = "check");
        }
        reader.readAsDataURL(file)
        e.target.value = null;
      }

    const removeImage = () => {
        setImagePreviewUrl(null);
        setUploadImgSizeError('');
    }

    return (
        <div className='custom-input-validation upload-image-wrapper'>
          {(labelName) && (
            <Label htmlFor={id} className={labelClass}>
              {labelName}
              <sup className={`text-danger ${labelImp ? '' : 'd-none'}`}>*</sup>
            </Label>
          )}
          <div className="position-relative">
            <Input {...inputFields} accept="image/*" onChange={handleImageChange} />
            {showIcon}
            {uploadImgSizeError}
            { imagePreviewUrl && (
                    <article className="d-flex closeIcon uploaded-img">
                        <img src={imagePreviewUrl} alt="issue with order" className="mt-2" />
                        <span onClick={removeImage}>{close}</span>
                    </article>
            )}
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
}

ImageUpload.propTypes = {
    type: PropTypes.string,
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    touched: PropTypes.bool,
    errorMsg: PropTypes.string,
    placement: PropTypes.string,
    labelClass: PropTypes.string,
    labelName: PropTypes.string,
    labelImp: PropTypes.any,
    showIcon: PropTypes.any,
    maxLength: PropTypes.number,
};

export default ImageUpload;
const close = <i className="material-icons">close</i>;