const optionButtons = document.querySelectorAll('.option-button');
const intentInput = document.getElementById('intent');
const customIntentInput = document.getElementById('custom-intent');

optionButtons.forEach(button => {
    button.addEventListener('click', function () {
        // make it work like a checkbox
        this.classList.toggle('active');

        // update the hidden intent field with all selected values
        updateIntentValue();
    });
});

// handle custom input field
customIntentInput.addEventListener('focus', function () {
    this.classList.add('active');
    updateIntentValue();
});

customIntentInput.addEventListener('blur', function () {
    if (!this.value.trim()) {
        this.classList.remove('active');
    }
    updateIntentValue();
});

customIntentInput.addEventListener('input', updateIntentValue);

function updateIntentValue() {
    const activeButtons = Array.from(document.querySelectorAll('.option-button.active'));
    let values = activeButtons.map(button => button.getAttribute('data-value'));

    // add custom value if it exists and is active
    if (customIntentInput.classList.contains('active') && customIntentInput.value.trim()) {
        values.push(customIntentInput.value.trim());
    }

    intentInput.value = values.join(', ');
}

// submission
document.getElementById('connect-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Form submitted.');
});