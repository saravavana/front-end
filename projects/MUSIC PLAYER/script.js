let cards = document.querySelectorAll(".card");
let audio = new Audio();
let playerContainer = document.getElementById("playerContainer");
let container = document.getElementById("songContainer");
let songImage = document.getElementById("songImage");
let songTitle = document.getElementById("songTitle");
let songArtist = document.getElementById("songArtist");
let progress = document.getElementById("progress");
let play = document.getElementById("play");
let currentTime = document.getElementById("current-time");
let totalTime = document.getElementById("total-time");
let close = document.getElementById("close");
let search = document.getElementById("search");
let profile = document.getElementById("profile");
let profileshow = document.getElementById("profilePopup");
let closeForm = document.getElementById("closeForm");


let songs = [
    "songs/perfect.mp3",
    "songs/Imagine Dragons - Believer.mp3",
    "songs/Faded.mp3",
    "songs/SpotiDown.App - Closer - The Chainsmokers.mp3",
    "songs/Heat Waves - Glass Animals.mp3",
    "songs/Blinding Lights - The Weeknd.mp3",
    "songs/Senorita.mp3",
    "songs/xxxtentacion - MOONLIGHT.mp3",
 
];

search.oninput = function () {

    let value = search.value.toLowerCase();

    cards.forEach(function (card) {
        card.style.display = "none";
    });

    let result = Array.from(cards).filter(function (card) {

        let title = card.querySelector("h3").innerHTML.toLowerCase();
        let artist = card.querySelector("p").innerHTML.toLowerCase();

        return title.indexOf(value) !== -1 || artist.indexOf(value) !== -1;

    });

    result.forEach(function (card) {
        card.style.display = "block";
    });

};

let timer;
function Timer(time) {
    let min = Math.floor(time / 60);
    let sec = Math.floor(time % 60);
    if (sec < 10) {
        sec = "0" + sec;
    }
    return min + ":" + sec;
}
cards.forEach(function (card, index) {
    card.onclick = function () {
        let img = card.querySelector("img").src;
        let title = card.querySelector("h3").innerHTML;
        let artist = card.querySelector("p").innerHTML;
        container.style.display = "none";
        playerContainer.style.display = "flex";
        songImage.src = img;
        songTitle.innerHTML = title;
        songArtist.innerHTML = artist;
        audio.src = songs[index];
        audio.onloadedmetadata = function () {
            progress.max = audio.duration;
            totalTime.innerHTML = Timer(audio.duration);
        };
        clearInterval(timer);
        timer = setInterval(function () {
            progress.value = audio.currentTime;
            currentTime.innerHTML = Timer(audio.currentTime);
        }, 1000);

        play.onclick = function () {
            if (audio.paused) {
                audio.play();
                play.innerHTML = '<i class="bi bi-pause-fill"></i>';
            }
            else {
                audio.pause();
                play.innerHTML = '<i class="bi bi-play-fill"></i>';
            }
        };

        progress.oninput = function () {
            audio.currentTime = progress.value;
        };
    };
});

close.onclick = function () {
    audio.pause();
    audio.currentTime = 0;
    clearInterval(timer);
    playerContainer.style.display = "none";
    container.style.display = "grid";
    play.innerHTML = '<i class="bi bi-play-fill"></i>';
};


profile.onclick = function () {
    profileshow.style.display = "flex";
}

closeForm.onclick = function () {
    profileshow.style.display = "none";
}
let login = document.getElementById("login");

login.onclick = function () {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);

    alert("Login Successful");
    profileshow.style.display = "none";

}