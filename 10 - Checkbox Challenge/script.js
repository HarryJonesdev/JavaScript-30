// Grab all the checkboxes
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
    let inBetween = false;
    // Check if shift key down and check that its being checked
    if(e.shiftKey && this.checked) {
        // Loop through every checkbox 
        checkboxes.forEach(checkbox => {
            if(checkbox === this || checkbox === lastChecked) {
                // Flip inBetween variable (if its true turn to false if its false turn to true)
                inBetween = !inBetween;
            }

            if(inBetween) {
                checkbox.checked = true;
            }
        });

    }
    lastChecked = this;
}

// Listen for when one gets clicked or changed
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
