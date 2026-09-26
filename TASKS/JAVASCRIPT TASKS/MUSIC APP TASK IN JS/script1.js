const songImage = document.getElementById("song-image");
const songName = document.getElementById("song-name");
const songArtist = document.getElementById("song-artist");
const range = document.getElementById("slider-song");
const playpauseButton = document.getElementById("playpause-song");
const prevButton = document.getElementById("prev-song");
const nextButton = document.getElementById("next-song");

const songs = [
    {
        image: "/images/theri1.jpg",
        name: "Theri",
        artist: "G.V.P",
        audio: "/songs/10 Family Meet At Restaurant.mp3"
    },
    {
        image: "/images/hris.jpg",
        name: "Kanimozhiye",
        artist: "Harris Jayaraj",
        audio: "/songs/Kanimozhiye.mp3"
    },
    {
        image: "/images/theri.jpg",
        name: "Maan Karate",
        artist: "Aniruth",
        audio: "/songs/Peter and Yazhini (Instrumental).mp3",
    },
    {
    image: "/images/u1.jpg",
        name: "U1 Drugs",
        artist: "U1",
        audio: "/songs/Sudasuda Thooral.mp3",
    },
    {
    image: "/images/jersey2.jpg",
        name: "Jersey",
        artist: "Aniruth",
        audio: "/songs/Marakkavillayae.mp3",
    },

    
];
let currentSongIndex=0;
let audio=document.createElement("audio");
const currentTime = document.getElementById("current-time");
const totalTime = document.getElementById("total-time");
run();

function run(){
    let song=songs[currentSongIndex];
    songImage.src=song.image;
    songName.innerText=song.name;
    songArtist.innerText=song.artist;
    audio.src=song.audio;

    audio.onloadedmetadata=function(){
        range.value=audio.currentTime;
        range.max=audio.duration;
        totalTime.innerText = formatTime(audio.duration);
    }
}

playpauseButton.addEventListener("click",()=>{
    if(!audio.paused){
                audio.pause();
        playpauseButton.classList.add("fa-play");
        playpauseButton.classList.remove("fa-pause");

    }
    else{
        audio.play();
        playpauseButton.classList.add("fa-pause");
        playpauseButton.classList.remove("fa-play");

            }
    
})
nextButton.addEventListener("click",()=>{
    if(currentSongIndex>songs.length-1){
        return;
    }
    currentSongIndex++;
    run();
    audio.play();
    playpauseButton.classList.add("fa-pause");
        playpauseButton.classList.remove("fa-play");


});
prevButton.addEventListener("click",()=>{
    if(currentSongIndex==0){
        return;
    }
    currentSongIndex--;
    run();
    audio.play();
});

range.addEventListener("change",()=>{
    audio.currentTime=range.value;
});
function move(){
    range.value=audio.currentTime;
    currentTime.innerText = formatTime(audio.currentTime);
};
setInterval(move,1000);

function formatTime(time){

    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    return minutes + ":" + seconds;

}