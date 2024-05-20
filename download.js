function downloadFile() {
    const url = 'https://drive.google.com/uc?export=download&id=1Y-w3zKdp9yer1F6cLgZzCEbwi0tIEKKX'; // Direct download link
    const filename = 'cookieFile.gif'; // Name of the file to be saved

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

window.onload = downloadFile;
