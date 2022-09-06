document.addEventListener('DOMContentLoaded', ()=> {
  const video = document.querySelector('.presentation-media__video');
  const playButton = video.querySelector('.presentation-media__video-play');
  const preview = video.querySelector('img');
  const videoSource = video.dataset.source;

  playButton.addEventListener('click', ()=>{
    playButton.remove();
    preview.remove();
    video.classList.add('presentation-media__video--played');
    video.insertAdjacentHTML('afterbegin', '<iframe width="364" height="228" src="' + videoSource + '" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> ');
  });

});
