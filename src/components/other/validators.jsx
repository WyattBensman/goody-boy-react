export function checkName(name) {
  const errors = [];

  if (name.length === 0) {
    errors.push("Name is Required");
  }

  return errors;
}

export function checkEmail(email) {
  const errors = [];

  if (email.length === 0) {
    errors.push("Email is Required");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errors.push("Must be in Email Format");
  }

  return errors;
}

export function checkPhone(phone) {
  const errors = [];

  if (phone.length === 0) {
    errors.push("Phone Number is Required");
  }

  const phoneRegex = /^\d+$/;
  if (!phoneRegex.test(phone)) {
    errors.push("Must Contain Numbers Only");
  }

  return errors;
}

export function checkDescription(description) {
  const errors = [];

  if (description.length === 0) {
    errors.push("Description is Required");
  }

  return errors;
}
