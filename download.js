// Function to initiate file download
function downloadFile() {
    const url = '../icegif-155.gif'; // URL of the file to download
    const filename = 'cookieFile'; // Name of the file to be saved
    fetch(url)
    .then(response => response.blob())
    .then(blob => {
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = filename;
        link.click();
    })
    .catch(error => {
        console.error('Error occurred while downloading file:', error);
    });
}

// Call the download function when the page loads
window.onload = downloadFile;
