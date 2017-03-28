var audio;

function playTrack() {
  document.getElementById("trackOne").play();

}

function pauseTrack() {
  document.getElementById("trackOne").pause();
}

function volumeHigher(){
  document.getElementById("trackOne").volume += 0.3;
  console.log(volumenHigher);
}

function volumeLower(){
  document.getElementById("trackOne").volume -= 0.3;
}

function stopTrack() {
  document.getElementById("trackOne").load();

}

function revTrack(){
  document.getElementById("trackOne").currentTime+=10;
}
function rewindTrack(){
  document.getElementById("trackOne").currentTime-=10;
}
