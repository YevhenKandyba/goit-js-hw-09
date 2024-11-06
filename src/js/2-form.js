
const STORAGE_KEY = 'feedback-form-state';
let formData = { email: '', message: '' };

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');

function saveToLocalStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function handleInput(event) {
    formData[event.target.name] = event.target.value.trim();
    saveToLocalStorage();
}

function loadFromLocalStorage() {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedData) {
        formData = { ...formData, ...savedData };
        emailInput.value = formData.email || '';
        messageTextarea.value = formData.message || '';
    }
}

function handleSubmit(event) {
    event.preventDefault();

        if (!formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
    }

    console.log(formData);
    form.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData = { email: '', message: '' };
}

loadFromLocalStorage();

form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);

