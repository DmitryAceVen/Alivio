/*===============MOBILE NAV===============================*/

const  mobileNavButton = document.querySelector('.mobile-nav-button');
const  mobileNavIcon = document.querySelector('.mobile-nav-button__icon');
const  mobileNav = document.querySelector('.mobile-nav');

mobileNavButton.addEventListener('click',function(){
    mobileNavIcon.classList.toggle('active')
    mobileNav.classList.toggle('active')
    document.body.classList.toggle('.no-scroll')
});

/*===============VIDEO===============================*/

const videoBtnIcon = document.querySelector('.story-video-btn');
const videoFile = document.querySelector('#video-story');
const  videoOverlay = document.querySelector('.story-video-overlay');

videoFile.addEventListener('click', function () {
    function toggleOverlay(event) {
        if (event.type === 'mouseleave') {
            videoOverlay.classList.add('hidden');
            videoBtnIcon.classList.add('none');
        }else {
            videoOverlay.classList.remove('hidden');
        }
    }
   
    
    
    
    if (videoFile.paused) {
        videoFile.play();
        videoBtnIcon.src = './img/story/play-white.svg';

        videoOverlay.onmouseleave = toggleOverlay;
        videoOverlay.onmouseenter = toggleOverlay;
    }else { 
        videoFile.pause();
        videoBtnIcon.src = './img/story/play-white.svg';
    }
})