// Get the download button element
const downloadButton = document.getElementById('downloadButton');

// Define the file URL
const fileURL = '/cv/CV-Abiodun Bello_sofdev.docx';

// Add a click event listener to the button
downloadButton.addEventListener('click', function () {
    
    const downloadLink = document.createElement('a');
    downloadLink.style.display = 'none';
    downloadLink.href = fileURL;
    downloadLink.download = '/cv/CV-Abiodun Bello_sofdev.docx';


    document.body.appendChild(downloadLink);

   
    downloadLink.click();

  
    document.body.removeChild(downloadLink);
});
