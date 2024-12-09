const dropArea = document.getElementById('drop-area');
const fileInput = document.getElementById('image-upload');
const imagePreview = document.getElementById('image-preview');
const clearArea = document.querySelector('#drop-area>div');


// Highlight the drop area when the file is dragged over it
dropArea.addEventListener('dragover', (event) => {
  event.preventDefault();
  dropArea.classList.add('dragging');
});

// Remove highlight when the file is dragged out
dropArea.addEventListener('dragleave', () => {
  dropArea.classList.remove('dragging');
});

// Handle dropped files
dropArea.addEventListener('drop', (event) => {
  event.preventDefault();
  dropArea.classList.remove('dragging');
  
  const files = event.dataTransfer.files;
  if (files.length) {
    fileInput.files = files; // Assign dropped files to the hidden input
    displayImagePreview(files); // Display the image preview
  }
});

// Trigger file input click on drop area click
dropArea.addEventListener('click', () => {
  fileInput.click();
});

// Display preview when a file is selected
fileInput.addEventListener('change', () => {
  if (fileInput.files.length) {
    // displayImagePreview(fileInput.files[0]);
    displayImagePreview(fileInput.files);
  }
});


function displayImagePreview(files) {
    const previewDivs = document.querySelectorAll('.previews'); // Select all preview divs

    // Clear the content of all preview divs before appending new images
    previewDivs.forEach(div => {
        div.innerHTML = ''; 
    });

    Array.from(files).forEach((file, index) => {
        if (index < previewDivs.length) { // Check if there's a corresponding preview div
        const reader = new FileReader();
        
        reader.onload = function (e) {
            const img = document.createElement('img');
            img.src = e.target.result; // Set the image source to the file result
            previewDivs[index].appendChild(img); // Append the image to the corresponding div
        };
        
        reader.readAsDataURL(file); // Read the file as a data URL
        }
    });

    clearArea.style.display = 'none';

}



// Function to display image previews for multiple files
// function displayImagePreviews(files) {
//     // previewContainer.innerHTML = ''; // Clear any existing previews
//     var i = 0;
//     Array.from(files).forEach(file => {
//       const reader = new FileReader();
      
//       reader.onload = function (e) {
//         const img = document.createElement('img');
//         img.src = e.target.result; // Set the image source to the file result
//         previews[i].appendChild(img); // Append the image to the container
//         i++;
//       };
      
//       reader.readAsDataURL(file); // Read the file as a data URL
//     });
// }

// // Function to display image preview
// function displayImagePreview(file) {
//   const reader = new FileReader();
  
//   reader.onload = function (e) {
//     imagePreview.src = e.target.result; // Set the image source to the file result
//     imagePreview.style.display = 'block'; // Make the image visible
//   };
// //   clearArea.style.display = 'none';
  
//   reader.readAsDataURL(file); // Read the file as a data URL
// }
