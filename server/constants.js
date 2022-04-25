const ERROR_INCORRECT_CREDENTIALS = "Incorrect credentials.";

const USERNAME_MAX_LENGTH = 10;
const ERROR_BLANK_PASSWORD = "Password can't be blank.";
const ERROR_BLANK_USERNAME = "Username can't be blank.";
const ERROR_USERNAME_TOO_LONG = `Username can only have maximum ${USERNAME_MAX_LENGTH} characters.`;

const ERROR_PASSWORDS_NOT_MATCH = "Passwords do not match.";
const ERROR_USERNAME_ALREADY_TAKEN = "This username is already taken.";

module.exports = {
  ERROR_INCORRECT_CREDENTIALS,
  ERROR_BLANK_PASSWORD,
  ERROR_BLANK_USERNAME,
  ERROR_PASSWORDS_NOT_MATCH,
  ERROR_USERNAME_ALREADY_TAKEN,
  ERROR_USERNAME_TOO_LONG,
  USERNAME_MAX_LENGTH
};
