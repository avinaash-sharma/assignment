/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Sign up',
  },
  subHeader: {
    id: `${scope}.header`,
    defaultMessage: 'Create a Yahoo email address',
  },
  details: {
    id: `${scope}.header`,
    defaultMessage:
      'By clicking "Continue", you agree to the Terms and Privacy Policy',
  },
});
