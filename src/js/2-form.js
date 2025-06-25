const form = document.querySelector('.feedback-form');
console.log(form);
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

const savedData = (localStorage.getItem(STORAGE_KEY));
if (savedData) {
    form.elements.email.value = savedData.email;
    form.elements.message.value = savedData.message;
} 

console.log(savedData);

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(formData);
    if (formData.email === "" || formData.message === "") {
        alert("Please fill in all fields!");
        return;
    }
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
});






















