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
const modelViewer = document.querySelector("model-viewer");

modelViewer.addEventListener("load", () => {
  const hotspots = modelViewer.querySelectorAll(".Hotspot");
  
  hotspots.forEach((hotspot) => {
    hotspot.addEventListener("click", (event) => {
      event.stopPropagation();
      
      if (hotspot.classList.contains("active")) {
        hotspot.classList.remove("active");
      } else {
       hotspots.forEach(h => h.classList.remove("active"));
        hotspot.classList.add("active");
      }
    });
  });
  
 modelViewer.addEventListener("click", () => {
    hotspots.forEach(h => h.classList.remove("active"));
  });
});
