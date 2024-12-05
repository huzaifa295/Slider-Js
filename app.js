// let container=document.querySelector('.container')
let img = document.querySelector(".img");

let indexCount = 1;

// img.setAttribute("src", "./assets/images/Slider_img" + indexCount + ".jpg");

function Next() {
  indexCount++;
  img.setAttribute("src", "./assets/images/Slider_img" + indexCount + ".jpg");
  console.log(indexCount);
  if (indexCount >= 6) {
      indexCount = 0;
    }
}

function Previous(){
    indexCount--
    if(indexCount<=0){
        indexCount=6
    }
    img.setAttribute("src", "./assets/images/Slider_img" + indexCount + ".jpg");
}

function autoPlay(){
    Next()
}

let timeInterval=setInterval(autoPlay,3000)