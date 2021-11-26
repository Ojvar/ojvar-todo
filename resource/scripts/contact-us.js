function handlerFunc(e) {
  e.preventDefault();
  axios
    .post('/contact-us', getFormData('contactForm'))
    .then((res) => console.log(res.data))
    .catch((err) => console.error(err));
}

document.querySelector('#contactForm').addEventListener('submit', handlerFunc);
document.querySelector('#setFormDataButton').addEventListener('click', () => {
  setFormData('contactForm', {
    firstName: 'Mohammad',
    lastName: 'Ojvar',
    gender: 'male',
    email: 'mohammad@ojvar.dev',
    comment: 'This is default comment text, very good guys',
  });
});
