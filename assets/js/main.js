const myModal = new bootstrap.Modal("#pop-up"),
      downloadBox = document.querySelector(".download-box"),
      downloadBtn = document.querySelector("#download-btn"), 
      loadingBox = document.querySelector(".loading-container"), 
      circularProgress = document.querySelector(".circular-progress"),
      progressValue = document.querySelector(".progress-value");

downloadBtn.addEventListener("click", ()=>{
    downloadBox.classList.add("d-none");
    loadingBox.classList.remove("d-none");
    load();
    console.log("the download btn was clicked")
})


function load(){
    let progressStartValue = 0,
      progressEndValue = 47,
      speed = 200;

  let progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = `${progressStartValue}%`;
    circularProgress.style.background = `conic-gradient(#5268FF ${
      progressStartValue * 3.6
    }deg, #ededed 0deg)`;

    if (progressStartValue == progressEndValue) {
      clearInterval(progress);
      myModal.show()
    }
  }, speed);
}


// var i = 0;
// function move() {
//   if (i == 0) {
//     i = 1;
//     var elem = document.getElementById("myBar");
//     var width = 1;
//     var id = setInterval(frame, 10);
//     function frame() {
//       if (width >= 100) {
//         clearInterval(id);
//         i = 0;
//       } else {
//         width++;
//         elem.style.width = width + "%";
//       }
//     }
//   }
// }
//the pop-up modal
// if (progressStartValue == progressEndValue) {
//   window.addEventListener('DOMContentLoaded', ()=>{
//     myModal.show();
//   })
// }