function validatePassword() {
  const hasNumber = (pass) => {
    return /\d/.test(pass);
  };

  const hasUpperCase = (pass) => {
    return /[A-Z]/.test(pass);
  };

  const hasProperLength = (pass) => {
    return pass.length > 7;
  };

  const hasSpecialCharacter = (pass) => {
    return /[!@#$%^&*()]/.test(pass);
  };

  const passwordValidated = (pass) => {
    return (
      hasNumber(pass) &&
      hasUpperCase(pass) &&
      hasProperLength(pass) &&
      hasSpecialCharacter(pass)
    );
  };

  return {
    hasNumber,
    hasUpperCase,
    hasProperLength,
    hasSpecialCharacter,
    passwordValidated,
  };
}

export default validatePassword;
