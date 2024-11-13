const button = document.querySelector('.btn');
const video = document.querySelector('.background-video');
const icon = document.querySelector('.fa');

button.addEventListener("click",()=>{
if(button.classList.contains('pause')){
    button.classList.remove('pause')
    video.play();
    icon.classList.add('fa-pause');
    icon.classList.remove('fa-play');
}
else{
    button.classList.add('pause')
    video.pause();
    icon.classList.remove('fa-pause');
    icon.classList.add('fa-play');
}
})