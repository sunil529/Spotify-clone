console.log("welcome to spotify");
// Initialize the Variables
let songindex = 0;
let audioELement = new Audio('./songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myProgressbar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let songitems = Array.from(document.getElementsByClassName('songitem'));
let songs = [
    { songname: "Assi Ethe Hi Aa Sukh Gill", filePath: "./songs/1.mp3", coverPath: "./image/covers/1.jpg" },
    { songname: "Excuses Ap Dhillon", filePath: "./songs/2.mp3", coverPath: "./image/covers/2.jpg" },
    { songname: "Heer Raanjhana Bachchhan Paandey", filePath: "./songs/3.mp3", coverPath: "./image/covers/3.jpg" },
    { songname: "Ma Belle Ap Dhillon", filePath: "./songs/4.mp3", coverPath: "./image/covers/4.jpg" },
    { songname: "Maar Khayegaa Bachchhan Paandey", filePath: "./songs/5.mp3", coverPath: "./image/covers/5.jpg" },
    { songname: "Main Ishq Mein Hoon Radhe Shyam Hindi", filePath: "./songs/6.mp3", coverPath: "./image/covers/6.jpg" },
    { songname: "Punjabiyan Di Dhee Guru Randhaw", filePath: "./songs/7.mp3", coverPath: "./image/covers/7.jpg" },
]
songitems.forEach((element,i) => {

    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;


})
// Handle play/pause click
masterplay.addEventListener('click', () => {
    if (audioELement.paused || audioELement.currentTime <= 0) {
        audioELement.play();
        console.log(masterplay.classList)

        masterplay.classList.remove('fa-solid');
        masterplay.classList.remove('fa-circle-play');
        
        masterplay.classList.add('fa-circle-pause');
        
        masterplay.classList.add('fa-solid');
        gif.style.opacity = 1;

    }
    else {
        audioELement.pause();
        masterplay.classList.remove('fa-solid');
        
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        masterplay.classList.add('fa-solid');
        gif.style.opacity = 0;
    }
})
// Listen to Events

audioELement.addEventListener('timeupdate', () => {
     // Update Seekbar
    // console.log('timeupdate');
    progress = parseInt((audioELement.currentTime / audioELement.duration) * 100);
    // console.log(progress);
    myprogressbar.value = progress;


});
myprogressbar.addEventListener('change', () => {
    audioELement.currentTime = myprogressbar.value * audioELement.duration / 100;

})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songitembyplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.remove('fa-solid');
        element.classList.add('fa-circle-play');
        element.classList.add('fa-solid');
    })
}

Array.from(document.getElementsByClassName('songitembyplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        if (audioELement.paused || audioELement.currentTime <= 0) {
        makeAllPlays();

        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        // e.target.classList.add('fa-solid');
        audioELement.src = `songs/${songindex+1}.mp3`;
        mastersongname.innerText = songs[songindex].songname;
        audioELement.currentTime = 0;
        audioELement.play();
        gif.style.opacity = 1;
        }
        else {
            audioELement.pause();
            // masterplay.classList.remove('fa-solid');
            
            // masterplay.classList.remove('fa-circle-pause');
            // masterplay.classList.add('fa-circle-play');
            // masterplay.classList.add('fa-solid');
            gif.style.opacity = 0;
            e.target.classList.remove('fa-circle-pause');
            e.target.classList.add('fa-circle-play');
        }



    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songindex >= 6) {
        songindex = 0;

    }
    else {
        songindex += 1;
    }
    audioELement.src = `songs/${songindex+1}.mp3`;
    mastersongname.innerText = songs[songindex].songname;
    audioELement.currentTime = 0;
    audioELement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.remove('fa-solid');
    masterplay.classList.add('fa-circle-pause');
    
    masterplay.classList.add('fa-solid');


})
document.getElementById('previous').addEventListener('click', () => {
    if (songindex <= 0) {
        songindex = 0;

    }
    else {
        songindex -= 1;
    }
    audioELement.src = `songs/${songindex+1}.mp3`;
    mastersongname.innerText = songs[songindex].songname;
    audioELement.currentTime = 0;
    audioELement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');


})