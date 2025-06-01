
document.addEventListener("DOMContentLoaded", ()=>{

    console.log("welcome TO spotify")
//variable initialize 
let songidx=0;
let audioElement=new Audio("songs/3.mp3");
let masterplay=document.getElementById("masterplay");
let myprogressbar=document.getElementById('MyProgressbar');
let masterSong_name=document.getElementById("Mastersongname");
let songItems=Array.from(document.getElementsByClassName("songItem"));

let songs=[
    {songName: "Warriyo - Mortals [NCS Release]", 
    filePath: "songs/1.mp3", 
    coverPath: "covers/1.jpg"},

    {songName: "Cielo - Huma-Huma", 
    filePath: "songs/2.mp3", 
    coverPath: "covers/2.jpg"},

    {songName: "DEAF KEV - Invincible [NCS Release]-320k",
    filePath: "songs/3.mp3", 
    coverPath: "covers/3.jpg"},

    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]",
    filePath: "songs/4.mp3", 
    coverPath: "covers/4.jpg"},

    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release",
    filePath: "songs/5.mp3", 
    coverPath: "covers/5.jpg"},

    {songName: "Rabba - Salam-e-Ishq", 
    filePath: "songs/2.mp3", 
    coverPath: "covers/6.jpg"},

    {songName: "Sakhiyaan - Salam-e-Ishq",
    filePath: "songs/2.mp3", 
    coverPath: "covers/7.jpg"},

    {songName: "Bhula Dena - Salam-e-Ishq", 
    filePath: "songs/2.mp3", 
    coverPath: "covers/8.jpg"},

    {songName: "Tumhari Kasam - Salam-e-Ishq", 
    filePath: "songs/2.mp3", 
    coverPath: "covers/9.jpg"},

    {songName: "Na Jaana - Salam-e-Ishq", 
    filePath: "songs/4.mp3", 
    coverPath: "covers/10.jpg"},
]


songItems.forEach((element, i) => {
    console.log(element);
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    
    element.getElementsByClassName('songTittle')[0].innerText=songs[i].songName;
    
    //updating the duration of each songs 

    let audio = new Audio(songs[i].filePath);

    audio.addEventListener("loadedmetadata", () => {
    let minutes = Math.floor(audio.duration / 60);
    let seconds = Math.floor(audio.duration % 60);
    if (seconds < 10) seconds = "0" + seconds; // pad with 0
    element.getElementsByClassName('timestamp')[0].innerText = `${minutes}:${seconds}`;
});
});
// audioElement.play() 

//handle play pause Click
masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        console.log("bikash")
        audioElement.play();
         gif.style.opacity = 1;
          masterplay.classList.remove("fa-circle-play");
        masterplay.classList.add("fa-circle-pause");

        songItemPlay[songidx].classList.remove('fa-circle-play');
            songItemPlay[songidx].classList.add('fa-circle-pause');
         
    }
    else {
        gif.style.opacity = 0;
        audioElement.pause();
       masterplay.classList.remove("fa-solid fa-circle-pause fa-3x");
        masterplay.classList.add("fa-solid fa-circle-play");

        //updating the current songs play pause buttons
       songItemPlay[songidx].classList.remove('fa-circle-pause');
            songItemPlay[songidx].classList.add('fa-circle-play');
    }
})



//Listen to evnets
audioElement.addEventListener('timeupdate', ()=>{
//update seekbar
progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
myprogressbar.value=progress;
})

myprogressbar.addEventListener('input', ()=>
{
    audioElement.currentTime=myprogressbar.value*audioElement.duration/100;
})

//making  the small play buttons play buttons

const MakeAllPlay=()=>{

    Array.from(document.getElementsByClassName('songItemPlay')).forEach((elements)=>
    elements.addEventListener('click',(e)=>{
        
// e.target.classList.remove('fa-circle-pause');

// e.target.classList.add('fa-circle-play');
elements.classList.remove('fa-circle-pause');
        elements.classList.add('fa-circle-play');

}
    ))
};


//  const MakeAllPlay = () => {
//         songItemPlay.forEach((element) => {
//             element.classList.remove('fa-circle-pause');
//             element.classList.add('fa-circle-play');
//         });
//     };







//fro small play buttons

Array.from(document.getElementsByClassName('SongItem_Container')).forEach((elements)=>{
    elements.addEventListener('click',(e)=>{
        // console.log("small play")
MakeAllPlay();
 songidx=parseInt(e.target.id);

e.target.classList.remove('fa-circle-play');
e.target.classList.add('fa-circle-pause');

//  audioElement.src=songs[songidx].filePath;
 audioElement.src = `songs/${songidx+1}.mp3`;
  masterSong_name.innerHTML= songs[songidx].songName;
 audioElement.currentTime=0;
 audioElement.play();
   gif.style.opacity = 1;
 masterplay.classList.remove('fa-circle-pause');
 masterplay.classList.add('fa-circle-play');
    })
})


document.getElementById('next').addEventListener('click', ()=>{

    console.log("next");
    if(songidx>=9){
        songidx=0;
    }

    else{
        songidx+=1;
    }
//  audioElement.src=songs[songidx+1].filePath;
 audioElement.src = `songs/${songidx+1}.mp3`;
  masterSong_name.innerHTML= songs[songidx].songName;
 audioElement.currentTime=0;
 audioElement.play();
  gif.style.opacity = 1;
 masterplay.classList.remove('fa-circle-pause');
 masterplay.classList.add('fa-circle-play');
})

document.getElementById('previous').addEventListener('click', ()=>{

    console.log("prev");
    if(songidx<=0){
        songidx=0;
    }
    else{
        songidx-=1;
    }
//  audioElement.src=songs[songidx+1].filePath;
 audioElement.src = `songs/${songidx+1}.mp3`;
 masterSong_name.innerHTML= songs[songidx].songName;
 audioElement.currentTime=0;
 audioElement.play();
  gif.style.opacity = 1;
 masterplay.classList.remove('fa-circle-pause');
 masterplay.classList.remove('fa-circle-play');
})










})