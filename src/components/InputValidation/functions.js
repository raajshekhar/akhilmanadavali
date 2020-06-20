const patterns = {
    ALLOW_ALPHABETS_ONLY: /^[a-zA-Z \s]+$/,
    NUMBERS_ONLY: /^[0-9\b]+$/,
    REMOVE_DOUBLE_SPACE_ADD_SPACE: /\s\s+/g
}
export const customOnKeyPress = (e, restrictions, onKeyPress) => {
    /* Allow Alphabets Only */
    const text = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    const allowAlphabets = (restrictions.includes('numbers') && restrictions.includes('special-characters')) && !patterns.ALLOW_ALPHABETS_ONLY.test(text);
    if (allowAlphabets) return e.preventDefault();
    /* Allow Alphabets Only */
  
    const { value } = e.target;
  
    /* Removing Left space */
    if(restrictions.includes('left-space')) e.target.value = trimLeftFunction(value);
    /* Removing Left space */
  
    /* Trim */
    if(restrictions.includes('space')) e.target.value = trimFunction(value);
    /* Trim */
  
    /* Allow Numbers Only */
    const allowNumeric = (restrictions.includes('alpha') && restrictions.includes('special-characters')) && !patterns.NUMBERS_ONLY.test(text)
    if (allowNumeric) return e.preventDefault();
    /* Allow Numbers Only */
  
    onKeyPress(e);
  };

  
const trimFunction = data => typeof(data) === 'string' ? data.trim() : data;
const trimLeftFunction = data => typeof(data) === 'string' ? data.trimLeft().replace(patterns.REMOVE_DOUBLE_SPACE_ADD_SPACE , ' ') : data;
