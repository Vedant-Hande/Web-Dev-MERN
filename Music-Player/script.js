let previous = document.querySelector("#pre");
let play = document.querySelector("#play");
let next = document.querySelector("#next");
// let title = document.getElementById("#title");
let recent_volume = document.querySelector("#volume");
let volume_show = document.querySelector("#volume_show");
let slider = document.querySelector("#duration_slider");
let show_duration = document.querySelector("#show_duration");
let track_image = document.querySelector("#track_image");
let auto_play = document.querySelector("#auto");
let present = document.querySelector("#present");
let total = document.querySelector("#total");
let artist = document.querySelector("#artist");
let current_time = document.querySelector("#current-time");
let duration = document.querySelector("#duration");
let like_btn = document.querySelector(".like-btn");
let shuffle_btn = document.querySelector("#shuffle");
let repeat_btn = document.querySelector("#repeat");
let speed_btn = document.querySelector(".speed-btn");
let speed_display = document.querySelector("#speed");
let speed_options_div = document.querySelector("#speed-options");
let mini_player_btn = document.querySelector(".mini-player-btn");

let timer;
let autoplay = 0;
let isShuffle = false;
let isRepeat = false;
let isLiked = false;
let isMiniPlayer = false;
let playbackSpeed = 1;

let index_no = 0;
let Playing_song = false;

//create a audio Element
let track = document.createElement("audio");

//All songs list
const All_song = [
  {
    path: "song1.mp3",
    img: "img1.jpg",
    singer: "AAJ KI RAT - Mr . And Mrs. Mahi",
  },
  {
    path: "song2.mp3",
    img: "img2.jpg",
    singer: " AAYI NAI - Asees Kaur",
  },
  {
    path: "song3.mp3",
    img: "img3.jpg",
    singer: " AGAR HO TUM -  Chandu Champion",
  },
  {
    path: "song4.mp3",
    img: "img4.jpg",
    singer: " HALKI HALKI SI - Sarfira ",
  },
  {
    path: "song5.mp3",
    img: "img5.jpg",
    singer: "  KHUNDAY - Stree 2",
  },
  {
    path: "song6.mp3",
    img: "img6.jpg",
    singer: " MERE MEHBOOB MERE SANAM - Bad News",
  },
  {
    path: "song7.mp3",
    img: "img7.jpg",
    singer: " TU HI HYE CHAMPION - Bad News",
  },
];

// Format time in minutes and seconds
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

// All functions

// function load the track
function load_track(index_no) {
  track.src = All_song[index_no].path;
  track_image.src = All_song[index_no].img;
  artist.innerHTML = All_song[index_no].singer;
  // title.innerText = All_song[index_no].name;
  track.load();

  total.innerHTML = All_song.length;
  present.innerHTML = index_no + 1;
  timer = setInterval(range_slider, 1000);

  // Reset like button state for new song
  isLiked = false;
  like_btn.innerHTML = '<i class="far fa-heart"></i>';
}

load_track(index_no);

// Toggle like button
function toggleLike() {
  isLiked = !isLiked;
  like_btn.innerHTML = isLiked
    ? '<i class="fas fa-heart"></i>'
    : '<i class="far fa-heart"></i>';
  like_btn.classList.toggle("active");
}

// Toggle shuffle
function toggleShuffle() {
  isShuffle = !isShuffle;
  shuffle_btn.classList.toggle("active");
}

// Toggle repeat
function toggleRepeat() {
  isRepeat = !isRepeat;
  repeat_btn.classList.toggle("active");
}

// Toggle speed options dropdown
function toggleSpeedOptions() {
  speed_options_div.classList.toggle("active");
}

// Set playback speed
function setPlaybackSpeed(speed) {
  playbackSpeed = speed;
  track.playbackRate = playbackSpeed;
  speed_display.innerHTML = `${playbackSpeed}x`;
  speed_options_div.classList.remove("active"); // Hide options after selection
}

// Close speed options if clicked outside
document.addEventListener("click", (event) => {
  if (
    !speed_btn.contains(event.target) &&
    !speed_options_div.contains(event.target)
  ) {
    speed_options_div.classList.remove("active");
  }
});

// Toggle mini player
function toggleMiniPlayer() {
  isMiniPlayer = !isMiniPlayer;
  document.querySelector(".main").classList.toggle("mini-player");
  mini_player_btn.innerHTML = isMiniPlayer
    ? '<i class="fas fa-expand"></i>'
    : '<i class="fas fa-compress"></i>';
}

// Toggle shortcuts modal
function toggleShortcutsModal() {
  const modal = document.getElementById("shortcuts-modal");
  modal.style.display = modal.style.display === "flex" ? "none" : "flex";
}

// Keyboard shortcuts
document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    e.preventDefault();
    justplay();
  } else if (e.code === "ArrowRight") {
    next_song();
  } else if (e.code === "ArrowLeft") {
    previous_song();
  } else if (e.code === "ArrowUp") {
    recent_volume.value = Math.min(100, parseInt(recent_volume.value) + 5);
    volume_change();
  } else if (e.code === "ArrowDown") {
    recent_volume.value = Math.max(0, parseInt(recent_volume.value) - 5);
    volume_change();
  } else if (e.code === "KeyM") {
    mute_sound();
  } else if (e.code === "KeyS") {
    toggleShuffle();
  } else if (e.code === "KeyR") {
    toggleRepeat();
  } else if (e.code === "Slash" && e.shiftKey) {
    toggleShortcutsModal();
  }
});

//mute sound function
function mute_sound() {
  if (track.volume > 0) {
    track.volume = 0;
    volume.value = 0;
    volume_show.innerHTML = 0;
    volume_icon.innerHTML = '<i class="fas fa-volume-mute"></i>';
  } else {
    track.volume = 0.9;
    volume.value = 90;
    volume_show.innerHTML = 90;
    volume_icon.innerHTML = '<i class="fas fa-volume-up"></i>';
  }
}

// checking.. the song is playing or not
function justplay() {
  if (Playing_song == false) {
    playsong();
  } else {
    pausesong();
  }
}

// reset song slider
function reset_slider() {
  slider.value = 0;
}

// play song
function playsong() {
  track.play();
  Playing_song = true;
  play.innerHTML = '<i class="fas fa-pause"></i>';
}

//pause song
function pausesong() {
  track.pause();
  Playing_song = false;
  play.innerHTML = '<i class="fas fa-play"></i>';
}

// next song
function next_song() {
  if (isShuffle) {
    index_no = Math.floor(Math.random() * All_song.length);
  } else if (index_no < All_song.length - 1) {
    index_no += 1;
  } else {
    index_no = 0;
  }
  load_track(index_no);
  playsong();
}

// previous song
function previous_song() {
  if (isShuffle) {
    index_no = Math.floor(Math.random() * All_song.length);
  } else if (index_no > 0) {
    index_no -= 1;
  } else {
    index_no = All_song.length - 1;
  }
  load_track(index_no);
  playsong();
}

// change volume
function volume_change() {
  volume_show.innerHTML = recent_volume.value;
  track.volume = recent_volume.value / 100;
  volume_icon.innerHTML =
    recent_volume.value > 0
      ? '<i class="fas fa-volume-up"></i>'
      : '<i class="fas fa-volume-mute"></i>';
}

// change slider position
function change_duration() {
  slider_position = track.duration * (slider.value / 100);
  track.currentTime = slider_position;
}

// autoplay function
function autoplay_switch() {
  if (autoplay == 1) {
    autoplay = 0;
    auto_play.style.background = "rgba(255,255,255,0.2)";
  } else {
    autoplay = 1;
    auto_play.style.background = "#148F77";
  }
}

function range_slider() {
  let position = 0;

  // update slider position
  if (!isNaN(track.duration)) {
    position = track.currentTime * (100 / track.duration);
    slider.value = position;

    // Update time displays
    current_time.innerHTML = formatTime(track.currentTime);
    duration.innerHTML = formatTime(track.duration);
  }

  // function will run when the song is over
  if (track.ended) {
    play.innerHTML = '<i class="fas fa-play"></i>';
    if (isRepeat) {
      track.currentTime = 0;
      playsong();
    } else if (autoplay == 1 || isShuffle) {
      next_song();
    }
  }
}
