function setFormData(formId, data) {
  Object.keys(data).forEach((key) => {
    document.querySelector(`#${formId} [name='${key}']`).value = data[key];
  });

  // document.querySelector('#firstNameInput').value = data.firstName;
  // document.querySelector('#lastNameInput').value = data.lastName;
  // document.querySelector('#genderSelect').value = data.gender;
  // document.querySelector('#emailInput').value = data.email;
  // document.querySelector('#commentInput').value = data.comment;
}

function getFormData(formId) {
  return Array.from(document.querySelectorAll(`#${formId} [name]`)).reduce(
    (result, el) => {
      result[el.name] = el.value;
      return result;
    },
    {}
  );

  // const elements = document.querySelectorAll('#contactForm [name]');
  // const result = {};
  // elements.forEach((el) => {
  //   result[el.name] = el.value;
  // });
  // return result;
}
