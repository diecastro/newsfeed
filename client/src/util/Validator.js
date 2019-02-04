import emailValidator from 'email-validator';
import _ from 'lodash';
import errorMessages from '../../constants/messages';
import payform from 'payform';
import commonUtil from './CommonUtil';

const Validator = {

  messages: errorMessages.validator,

  hasNoValue: function (value) {
    return !value;
  },

  areEqual: function (value1, value2) {
    return value1 === value2;
  },

  isPhoneNumber: function (phoneNumber) {

    const phoneNumberRegEx = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

    return phoneNumberRegEx.test(phoneNumber);

  },

  isDate: (value) => {
    const dateRegEx = /^(0[1-9]|1[0-2])[\/|-](0[1-9]|[12][0-9]|3[01])[\/|-]([1-2][0-9]{3})$/;
    return dateRegEx.test(value);
  },

  ageValidation: (value) => {
    const dob = new Date(value);
    const today = new Date();
    const age = Math.floor((today - dob) / 31557600000);
    return (age >= 18);
  },

  isCardDate: (value) => {
    const dateRegEx = /^(0[1-9]|1[0-2])[/|-]([0-9][0-9])$/;
    return dateRegEx.test(value);
  },

  isSSNValid: (value) => {

    const ssnRegex = /^\d{4}$/;
    return ssnRegex.test(value) && value !== '0000';
  },

  isABAValid: (value) => {
    const regEx = /^((0[0-9])|(1[0-2])|(2[1-9])|(3[0-2])|(6[1-9])|(7[0-2])|80)([0-9]{7})$/;
    return regEx.test(value);
  },

  isZipValid: (value) => {

    const zipRegex = /^(\d{5}(,\d{5})*)$/;
    return zipRegex.test(value);
  },

  isFullSsnOrTinValid: (value) => {
    /*
    Special numbers
    Numbers with all zeros in any digit group (000-##-####, ###-00-####, ###-##-0000).
    Numbers with 666 or 900-999 (Individual Taxpayer Identification Number) in the first digit group.
    */
    const ssnRegex = /^(?!(000|666|9))\d{3}-(?!00)\d{2}-(?!0000)\d{4}$/;
    return ssnRegex.test(value);
  },
  isFederalTaxIdValid: (value) => {
    const fedTaxIdRegex = /^(?:\d{3}-\d{2}-\d{4}|\d{2}-\d{7})$/;
    return fedTaxIdRegex.test(value);

  },

  validPassword: (value) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])((?=.*\d)|(?=.*[~!@#$%^&*()-=+]))[A-Za-z\d~!@#$%^&*()-=+]{8,}$/;
    return passwordRegex.test(value);
  },

  validAccountNumber: (number) => {
    return number.length > 3 && number.length < 18 && number.length !== 16 && !isNaN(number);
  },

  validWebsite: (website) => {
    const websiteRegex = /^.*?:\/\/.*$/;
    return websiteRegex.test(website);
  },

  validFaxNumber: (fax) => {
    const faxRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
    return faxRegex.test(fax);
  },

  isMobile: (userAgent) => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  },

  validateClientSignUpForm: function (values) {

    let errors = {};
    let that = this;

    const requiredFields = [
      'email_address',
      'password',
      'confirm_password',
      'customer_first_name',
      'customer_last_name',
      'customer_home_address',
      'customer_city',
      'customer_state',
      'customer_zip_code',
      'customer_telephone',
      'customer_ssn',
      'customer_date_of_birth',
      'customer_title',
      'customer_equity_ownership'
    ];

    _.map(requiredFields, (field) => {
      if (this.hasNoValue(values[field])) {
        errors[field] = that.messages.requiredText;
      }
    });

    if (values.customer_last_name && values.customer_last_name.length < 2) {
      errors.customer_last_name = that.messages.invalidLastName;
    }

    if (values.email_address && !emailValidator.validate(values.email_address)) {
      errors.email_address = that.messages.invalidEmail;
    }

    if (!this.isPhoneNumber(values.customer_telephone)) {
      errors.customer_telephone = that.messages.invalidPhoneNumber;
    }

    if (!this.isSSNValid(values.customer_ssn)) {
      errors.customer_ssn = that.messages.invalidText;
    }

    if (!this.isDate(values.customer_date_of_birth)) {
      errors.customer_date_of_birth = that.messages.invalidDate;
    }

    if (!this.ageValidation(values.customer_date_of_birth) && this.isDate(values.customer_date_of_birth)) {
      errors.customer_date_of_birth = that.messages.invalidDOB;
    }

    if (!this.isZipValid(values.customer_zip_code)) {
      errors.customer_zip_code = that.messages.zipRequired;
    }

    if (values.password && !this.validPassword(values.password)) {
      errors.password = that.messages.invalidPassword;
    }
    if (!this.areEqual(values.password, values.confirm_password)) {
      errors.confirm_password = that.messages.passwordsDoNotMatch;
    }

    if (values.customer_equity_ownership > 100) {
      errors.customer_equity_ownership = that.messages.customerEquityOwnershipMore;
    }

    if (!(values.owners && values.owners.length) && values.customer_equity_ownership < 100) {
      errors.customer_equity_ownership = that.messages.customerEquityOwnershipLess;
    }

    if (values.customer_state && values.customer_state.length > 2) {
      errors.customer_state = that.messages.invalidValue;
    }

    const ownersRequiredFields = [
      'first_name',
      'last_name',
      'title',
      'equity_ownership',
      'telephone',
      'ssn',
      'date_of_birth',
      'email_address',
      'home_address',
      'city',
      'state',
      'zip_code'
    ];

    if (values.owners && values.owners.length) {
      const ownersArrayErrors = [];

      let ownerEquity = commonUtil.calculateTotal(values.owners, 'equity_ownership');

      ownerEquity += parseInt(values.customer_equity_ownership);

      values.owners.forEach((owner, ownerIndex) => {
        const ownerErrors = {};
        _.map(ownersRequiredFields, (field) => {
          if (!owner || !owner[field]) {
            ownerErrors[field] = that.messages.requiredText;
          }
        });

        if (ownerEquity > 100 || values.customer_equity_ownership === 100) {
          errors.customer_equity_ownership = that.messages.customerEquityOwnershipMore;
          ownerErrors.equity_ownership = that.messages.customerEquityOwnershipMore;
        }

        if (ownerEquity < 100) {
          errors.customer_equity_ownership = that.messages.customerEquityOwnershipLess;
          ownerErrors.equity_ownership = that.messages.customerEquityOwnershipLess;
        }

        if (owner && owner.state && owner.state.length > 2) {
          ownerErrors.state = that.messages.invalidValue;
        }

        if (owner && !(_.isEmpty(owner.ssn)) && !this.isFullSsnOrTinValid(owner.ssn)) {
          ownerErrors.ssn = that.messages.invalidText;
        }

        if (owner &&!this.isDate(owner.date_of_birth)) {
          ownerErrors.date_of_birth = that.messages.invalidDate;
        }

        if (owner && !this.ageValidation(owner.date_of_birth) && this.isDate(owner.date_of_birth)) {
          ownerErrors.date_of_birth = that.messages.invalidDOB;
        }

        ownersArrayErrors[ownerIndex] = ownerErrors;

      });

      errors.owners = ownersArrayErrors;

    }
    if (values.customer_state && values.customer_state.length > 2) {
      errors.customer_state = that.messages.invalidValue;
    }

    return errors;
  },
  validateBusinessSignUpForm: function (values) {

    let errors = {};
    let that = this;

    const requiredFields = [
      'DBA_name',
      'corporate_business_name',
      'business_telephone',
      'business_email',
      'legal_business_structure',
      'business_type',
      'industry',
      'customer_title',
      'legal_business_structure',
      'business_description',
      'ticket_amount',
      'monthly_volume',
      'bank_routing_number',
      'account_number',
      'account_type',
      'business_street_address',
      'business_city',
      'business_zip_code',
      'business_state',
      'customer_ssn',
      'customer_date_of_birth',
      'additional_owner_first_name',
      'additional_owner_last_name',
      'additional_owner_home_address',
      'additional_owner_city',
      'additional_owner_state',
      'additional_owner_zip_code',
      'additional_owner_telephone',
      'additional_owner_ssn',
      'additional_owner_date_of_birth',
      'additional_owner_title',
      'additional_owner_email_address'
    ];

    _.map(requiredFields, (field) => {
      if (this.hasNoValue(values[field])) {
        errors[field] = that.messages.requiredText;
      }
    });

    if (!this.isPhoneNumber(values.business_telephone)) {
      errors.business_telephone = that.messages.invalidPhoneNumber;
    }

    if (values.card_expiration_date && !this.isCardDate(values.card_expiration_date)) {
      errors.card_expiration_date = that.messages.invalidDate;
    }

    if (values.bank_routing_number && !this.isABAValid(values.bank_routing_number)) {
      errors.bank_routing_number = that.messages.abaInvalidNumber;
    }

    if (values.account_number && !this.validAccountNumber(values.account_number)) {
      errors.account_number = that.messages.invalidAccountNumber;
    }

    if (values.business_email && !emailValidator.validate(values.business_email)) {
      errors.business_email = that.messages.invalidEmail;
    }

    if (!this.isFederalTaxIdValid(values.federal_tax_id)) {
      errors.federal_tax_id = that.messages.invalidTaxId;
    }

    if (!this.isZipValid(values.business_zip_code)) {
      errors.business_zip_code = that.messages.zipRequired;
    }

    if (values.customer_ssn !== undefined && !this.isFullSsnOrTinValid(values.customer_ssn)) {
      errors.customer_ssn = that.messages.invalidText;
    }

    if (values.customer_date_of_birth && !this.isDate(values.customer_date_of_birth)) {
      errors.customer_date_of_birth = that.messages.invalidDate;
    }

    if (values.customer_date_of_birth && (!this.ageValidation(values.customer_date_of_birth) && this.isDate(values.customer_date_of_birth))) {
      errors.customer_date_of_birth = that.messages.invalidDOB;
    }

    if (!this.validWebsite(values.website)) {
      errors.website = that.messages.invalidWebsite;
    }

    if (values.fax_number && !this.validFaxNumber(values.fax_number)) {
      errors.fax_number = that.messages.invalidFaxNumber;
    }

    if (values.business_state && values.business_state.length > 2) {
      errors.business_state = that.messages.invalidValue;
    }

    if (values.corporate_business_name && values.corporate_business_name.length > 30) {
      errors.corporate_business_name = that.messages.invalidCorporateName;
    }

    return errors;
  },
  validateClientSignUpFormPopUp: function (values) {

    let errors = {};
    let that = this;

    const requiredFields = [
      'email_address',
      'first_name',
      'last_name',
      'telephone'
    ];

    _.map(requiredFields, (field) => {
      if (this.hasNoValue(values[field])) {
        errors[field] = that.messages.requiredText;
      }
    });

    if (values.last_name && values.last_name.length < 2) {
      errors.last_name = that.messages.invalidLastName;
    }

    if (values.email_address && !emailValidator.validate(values.email_address)) {
      errors.email_address = that.messages.invalidEmail;
    }

    if (!this.isPhoneNumber(values.telephone)) {
      errors.telephone = that.messages.invalidPhoneNumber;
    }

    return errors;
  },
  validateVerifySSNForm: function (values) {

    let errors = {};
    let that = this;

    if (this.hasNoValue(values.customer_ssn)) {
      errors.customer_ssn = that.messages.requiredText;
    }

    if (!(_.isEmpty(values.customer_ssn)) && !this.isFullSsnOrTinValid(values.customer_ssn)) {
      errors.customer_ssn = that.messages.invalidText;
    }

    return errors;
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
  validateOnlinePayments: function (values) {

    let that = this;
    const errors = {};

    if (this.hasNoValue(values['amount']) || values['amount'] === '$0.00') {
      errors.amount = that.messages.amountRequired;
    }

    if (this.hasNoValue(values['cdigits'])) {
      errors.cdigits = that.messages.creditCardRequired;
    } else if (!payform.validateCardNumber(values.cdigits)) {
      errors.cdigits = that.messages.creditCardInvalid;
    }

    if (this.hasNoValue(values['edate'])) {
      errors.edate = that.messages.expirationDateRequired;
    } else {

      const sections = values['edate'].split('/');
      if (sections.length !== 2) {
        errors.edate = that.messages.expirationDateInvalid;
      }

      let year = parseInt(sections[1], 10),
        month = parseInt(sections[0], 10),
        currentMonth = new Date().getMonth() + 1,
        currentYear = new Date().getYear() - 100;

      if (month <= 0 || month > 12 || year > currentYear + 10) {
        errors.edate = that.messages.expirationDateInvalid;
      }

      if (year < currentYear || (year === currentYear && month < currentMonth)) {
        errors.edate = that.messages.expirationDateExpired;
      }

    }

    if (this.hasNoValue(values['cvv'])) {
      errors.cvv = that.messages.securityCodeRequired;
    }

    if (this.hasNoValue(values['street_number'])) {
      errors.street_number = that.messages.streetNumberRequired;
    }

    if (this.hasNoValue(values['zip'])) {
      errors.zip = that.messages.zipRequired;
    }

    if (values['zip'] && values['zip'].length !== 5) {
      errors.zip = that.messages.zipShouldBeFiveDigits;
    }

    if (values['zipPlus4'] && values['zipPlus4'].length !== 4) {
      errors.zipPlus4 = that.messages.zipPlusFourShouldBeFourDigits;
    }

    if (values['zipPlus4'] && values['zipPlus4'].length === 4 && this.hasNoValue(values['zip'])) {
      errors.zip = that.messages.zipRequiredWithZipPlusFour;
    }

    if (this.hasNoValue(values['customer_first']) && !this.hasNoValue(values['customer_last'])) {
      errors.customer_first = that.messages.firstLastNameRequired;
    } else if (this.hasNoValue(values['customer_last']) && !this.hasNoValue(values['customer_first'])) {
      errors.customer_last = that.messages.firstLastNameRequired;
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
  }
};

export default Validator;
