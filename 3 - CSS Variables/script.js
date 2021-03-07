const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {

    // 'dataset' is an object that contains all the attributes
    const suffix = this.dataset.sizing || '';

    // update var
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    




}

// Listens for change event
inputs.forEach(input => input.addEventListener('change', handleUpdate));

// Listens for mouse move update
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));