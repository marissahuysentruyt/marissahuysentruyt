function downloadResume(resumeData) {
  const resumeDownload = new Blob([resumeData], { type: 'text/pdf;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(resumeDownload);
  link.download = 'huysentruyt-resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

const downloadButton = document.querySelector('.js-download-resume');
console.log(downloadButton);

const fileInput = document.getElementById('gtm-json');
fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.readAsText(file, 'UTF-8');
  reader.onload = (e) => {
    const gtmData = JSON.parse(e.target.result);
    gtmDataToCsv(gtmData);
  };
});

const reader = new FileReader();
reader.addEventListener("loadend", () => {
  // reader.result contains the contents of blob as a typed array
});
reader.readAsArrayBuffer(blob);

downloadResume(csvDataToString)
