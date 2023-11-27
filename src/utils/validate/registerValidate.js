export const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};
const validatePhoneNumber = (number) => {
    const re = /^\+?([0-9]{1,3})?[-. ]?(\([0-9]{1,3}\))?[-. ]?[0-9]{1,4}[-. ]?[0-9]{1,4}([- ][0-9]{1,4})?$/;
    return re.test(number);
  };