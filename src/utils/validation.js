export const validateEmail = (testEmail) => {
  const emailRegExp = /\S+@\S+\.\S+/;
  if (!testEmail) {
    return 'Enter email';
  }

  if (!emailRegExp.test(testEmail)) {
    return 'Wrong email';
  }

  return '';
};

export const validatePassword = (testPassword) => {
  if (testPassword.length < 6) {
    return 'To short password';
  }

  if (!/^[a-zA-Z0-9]*$/.test(testPassword)) {
    return 'Password contains invalid characters';
  }

  if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/.test(testPassword)) {
    return 'Password must contain at least one number, uppercase and lowercase letter';
  }

  return '';
};
