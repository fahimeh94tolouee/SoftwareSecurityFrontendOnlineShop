import {minStrongPasswordLength} from "../../constants/maxLenghtAtrribute";
import {toastr} from "react-redux-toastr";
import {DIGIT_REGEX, SPECIAL_CHARACTERS_REGEX, UPPER_LOWER_REGEX} from "../../constants/others";

export const checkPasswordStrangeness = (password, passwordLabel) =>{
  let hasError = false;
  if (!password){
    toastr.error(`${passwordLabel} required!`)
    hasError = true
  }
  else if (password.length < minStrongPasswordLength) {
    toastr.error(`${passwordLabel} must be at least ${minStrongPasswordLength} characters long.`);
    hasError = true
  }
  else if (!UPPER_LOWER_REGEX.test(password)) {
    toastr.error(`${passwordLabel} must contain both uppercase and lowercase letters.`);
    hasError = true
  }
  else if (!DIGIT_REGEX.test(password)) {
    toastr.error(`${passwordLabel} must contain digits.`);
    hasError = true
  }
  else if (!SPECIAL_CHARACTERS_REGEX.test(password)) {
    toastr.error(`${passwordLabel} must contain special characters.`);
    hasError = true
  }
  return hasError
}