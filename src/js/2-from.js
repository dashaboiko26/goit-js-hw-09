let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('textarea');
const localStorageKey = 'feedback-form-state';

/* 3.*/ form.addEventListener('input', handleInput);

function handleInput(event) {
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  formData.email = email;
  formData.message = message;
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

function refillMessage() {
  const refillObject = JSON.parse(localStorage.getItem(localStorageKey));
  try {
    form.elements.email.value = refillObject.email;
    form.elements.message.value = refillObject.message;
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
}

refillMessage();

/* 4. */ form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const info = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };
  if (info.email === '' || info.message === '') {
    return alert('Fill please all fields');
  }
  console.log(formData);
  localStorage.clear();
  form.reset();
  formDataReset();
}

function formDataReset() {
  formData.email = '';
  formData.message = '';
}
