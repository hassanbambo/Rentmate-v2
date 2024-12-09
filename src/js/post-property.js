document.addEventListener('DOMContentLoaded', ()=> {

    const propertyForm1 = document.querySelector('.property-form .part-1');
    const propertyForm2 = document.querySelector('.property-form .part-2');
    const propertyForm3 = document.querySelector('.property-form .part-3');

    const backBtn = document.getElementById('backBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Initially display only the first part of the form
    // propertyForm1.style.display = "flex";
    // propertyForm2.style.display = "none";
    // propertyForm3.style.display = "none";

    let currentStep = 1;

    nextBtn.addEventListener('click', (event)=> {
        event.preventDefault();

        // Logic for progressing through the form steps
        if (currentStep === 1) {
            propertyForm1.style.display = "none";
            propertyForm2.style.display = "flex";
            currentStep = 2;
        } else if (currentStep === 2) {
            propertyForm2.style.display = "none";
            propertyForm3.style.display = "flex";
            nextBtn.innerHTML = "Done";
            currentStep = 3;
        } else if (currentStep === 3) {
            // Final step - you can add any final action here
            alert('Form submitted!');
        }
    });

    // Logic for going back
    backBtn.addEventListener('click', (event) => {
        event.preventDefault();

        if (currentStep === 2) {
            propertyForm2.style.display = "none";
            propertyForm1.style.display = "flex";
            currentStep = 1;
        } else if (currentStep === 3) {
            propertyForm3.style.display = "none";
            propertyForm2.style.display = "flex";
            nextBtn.innerHTML = "Next";
            currentStep = 2;
        }
    });

});
