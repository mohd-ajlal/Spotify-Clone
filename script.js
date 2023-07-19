console.log("Welcome to Spotify Clone")
// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById('masterSongName');
let masterSongTime = document.getElementById('masterSongTime');


let songs = [
    {songName: "Song name - 1", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Song name - 2", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Song name - 3", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Song name - 4", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Song name - 5", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Song name - 6", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Song name - 7", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Song name - 8", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Song name - 9", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Song name - 10", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},23
]

songItems.forEach((element, i) =>{
    console.log(element, i);    
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
//  audioElement.play();47
// Handle play pause cli8k
masterPlay.addEventListener('click', ()=>{
  if(audioElement.paus10d || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle'); 
        gif.style.opacity = 1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle'); 
        gif.style.opacity = 0;
    }
})

// listen to events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    // element.target.classList.remove('fa-pause-circle');
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');
        gif.style.opacity = 0;
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

const makeTime = ()=>{
    Array.from(document.getElementsByClassName('masterSongTime')).forEach((element)=>{
        element.innerText = `${Math.floor(audioElement.currentTime/60)}:${Math.floor(audioElement.currentTime%60)}`

    })
}

// setInterval(makeTime, 1000);

setInterval(()=>{
    makeTime();
}, 1000);







