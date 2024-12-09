// JavaScript object containing subtypes for each type
const subtypeOptions = {
    fruit: ['Apple', 'Banana', 'Orange', 'Mango'],
    animal: ['Dog', 'Cat', 'Elephant', 'Lion']
};

// Get the dropdown elements
const typeDropdown = document.getElementById('type');
const subtypeDropdown = document.getElementById('subtype');

// Function to update subtype options based on selected type
typeDropdown.addEventListener('change', function() {
    const selectedType = typeDropdown.value; // Get the selected type

    // Clear existing options in subtype dropdown
    subtypeDropdown.innerHTML = '<option value="" disabled selected hidden>Subtype</option>';

    // Populate subtype dropdown with relevant options
    if (selectedType) {
        const options = subtypeOptions[selectedType]; // Get subtypes for the selected type
        options.forEach(function(subtype) {           // Loop through each subtype
            const option = document.createElement('option'); // Create a new <option> element
            option.value = subtype.toLowerCase();            // Set the value attribute (in lowercase)
            option.textContent = subtype;                    // Set the text displayed to the user
            subtypeDropdown.appendChild(option);             // Add the option to the <select> element
        });
    }
});

