const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state'; 

const formData = {
  email: "",
  message: ""
};

console.log(formData);

form.addEventListener('input', (event) => {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    console.log(event);
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {}
});





















