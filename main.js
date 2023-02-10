const downloadBox = document.querySelector(".download-box"),
      downloadBtn = document.querySelector("#download-btn"), 
      loadingBox = document.querySelector(".loading-container"), 
      circularProgress = document.querySelector(".circular-progress"),
      progressValue = document.querySelector(".progress-value");

downloadBtn.addEventListener("click", ()=>{
    downloadBox.classList.add("d-none");
    loadingBox.classList.remove("d-none");
    console.log("the download btn was clicked")
})

let progressStartValue = 0,
    progressEndValue = 47,
    speed = 100;

let progress = setInterval(() => {
  progressStartValue++;

  progressValue.textContent = `${progressStartValue}%`;
  circularProgress.style.background = `conic-gradient(#7d2ae8 ${
    progressStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (progressStartValue == progressEndValue) {
    clearInterval(progress);
  }
}, speed);
