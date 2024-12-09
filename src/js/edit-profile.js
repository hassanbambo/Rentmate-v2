document.addEventListener('DOMContentLoaded', () => {

    // Handle Full Name Edit
    const displayFullName = document.getElementById('display-full-name');
    const editFullName = document.getElementById('edit-full-name');
    const editFullNameBtn = document.getElementById('edit-full-name-btn');

    editFullNameBtn.addEventListener('click', () => {
        if (editFullName.style.display === "none") {
            displayFullName.style.display = "none";
            editFullName.style.display = "block";
            editFullNameBtn.textContent = "Done";
        } else {
            if (editFullName.value !== "") 
                displayFullName.textContent = editFullName.value;
            editFullName.style.display = "none";
            displayFullName.style.display = "block";
            editFullNameBtn.textContent = "Edit";
        }
    });

});