
// programmatically setting icon
const canvas = new OffscreenCanvas(16, 16);
const context = canvas.getContext('2d');
context.clearRect(0, 0, 16, 16);
context.fillStyle = '#00FF00';  // Green
context.fillRect(0, 0, 16, 16);
const imageData = context.getImageData(0, 0, 16, 16);
chrome.action.setIcon({
  imageData: imageData
});

// prompt for possible duplicate download
chrome.downloads.onDeterminingFilename.addListener((downloadItem, suggest) => {
  const { filename } = downloadItem;

  suggest({
    conflictAction: 'prompt',
    filename: filename
  });

  return true;
})

