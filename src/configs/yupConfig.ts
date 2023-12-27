import * as unconfiguredYup from 'yup';

const REQUIRED_MESSAGE = 'This field is required';

unconfiguredYup.setLocale({
  mixed: {
    required: REQUIRED_MESSAGE,
    notType: function notType(_ref) {
      switch (_ref.type) {
        case 'number':
          return 'This field should be a number';
        case 'string':
          return 'This field should be a string';
        case 'boolean':
          return 'This field should be boolean (true/false)';
        default:
          return 'Wrong type';
      }
    },
  },
});

export const yup = unconfiguredYup;
