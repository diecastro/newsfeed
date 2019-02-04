import emailValidator from 'email-validator';
import _ from 'lodash';
import errorMessages from '../constants/messages';

const Validator = {

  messages: errorMessages.validator,

  hasNoValue: function (value) {
    return !value;
  },

  areEqual: function (value1, value2) {
    return value1 === value2;
  },

  validPassword: (value) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])((?=.*\d)|(?=.*[~!@#$%^&*()-=+]))[A-Za-z\d~!@#$%^&*()-=+]{8,}$/;
    return passwordRegex.test(value);
  },
  validateAddFile: function (values) {
    let errors = {};
    let that = this;

    if (values.files) {
      values.files.map((f, i) => {
        if (f.description === '') {
          errors[`files.${i}.description`] = that.messages.requiredText;
        }
      });

    }
    return errors;

  },

  requiredValue: (value) => {
    return value ? null : errorMessages.validator.requiredText;
  },
  validateSignInFormPopUp: function (values) {

    let errors = {};
    let that = this;

    const requiredFields = [
      'email_address',
      'password'
    ];

    _.map(requiredFields, (field) => {
      if (this.hasNoValue(values[field])) {
        errors[field] = that.messages.requiredText;
      }
    });

    if (values.email_address && !emailValidator.validate(values.email_address)) {
      errors.email_address = that.messages.invalidEmail;
    }
    return errors;
  },
  validateAddAuthorForm: function (values) {
    let errors = {};
    let that = this;

    const requiredFields = [
      'name',
      'email',
      'twitter'
    ];

    _.map(requiredFields, (field) => {
      if (this.hasNoValue(values[field])) {
        errors[field] = that.messages.requiredText;
      }
    });
    if (values.email && !emailValidator.validate(values.email)) {
      errors.email = that.messages.invalidEmail;
    }
    return errors;
  }
};

export default Validator;
