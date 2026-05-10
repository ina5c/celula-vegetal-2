// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
    event.target.removeEventListener('progress', onProgress);
  } else {
    progressBar.classList.remove('hide');
  }
};
document.querySelector('model-viewer').addEventListener('progress', onProgress);
document.addEventListener('DOMContentLoaded', () => {
  const modelViewer = document.querySelector('model-viewer');
  const hotspots = modelViewer.querySelectorAll('.Hotspot');
  
  hotspots.forEach((hotspot) => {
    hotspot.addEventListener('click', (e) => {
      e.stopPropagation();
      const isActive = hotspot.dataset.active === 'true';
      
      hotspots.forEach(h => h.dataset.active = 'false');
      
      if (!isActive) {
        hotspot.dataset.active = 'true';
      }
    });
  });
  
  modelViewer.addEventListener('click', () => {
    hotspots.forEach(h => h.dataset.active = 'false');
  });
});
