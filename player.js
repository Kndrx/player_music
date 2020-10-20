console.clear();
var playlist = [{
	"title": "Amour de jeunesse",
	"author": "313",
	"source": "313-amour-de-jeunesse-clip-officiel.mp3",
	"cover": "amourdejeunesse.jpg",
	"background" : "amourdejeunesse.jpg",
},
{
	"title": "Blue lights",
	"author": "Jorja Smith",
	"source": "jorja-smith-blue-lights-a-colors-show.mp3",
	"cover": "jorja.jpg",
	"background" : "jorja.jpg",
},
{
	"title": "Protected",
	"author": "Sworn",
	"source": "sworn-protected.mp3",
	"cover": "sworn.jpg",
	"background" : "sworn.jpg",
},
{
	"title": "Mexico",
	"author": "Kndrx",
	"source": "MEXICOOO.wav",
	"cover": "",
	"background" : "",
},
{
	"title": "Drill flute",
	"author": "Kndrx",
	"source": "DRILL FLUTE(2nd prodf drill).wav",
	"cover": "",
	"background" : "",
},
{
	"title": "Drill ysos",
	"author": "Kndrx",
	"source": "DRILL YSOS MAMEN.wav",
	"cover": "",
	"background" : "",
},
{
	"title": "Drill fuel",
	"author": "Kndrx",
	"source": "DRILL FUEL.wav",
	"cover": "",
	"background" : "",
},
{
	"title": "Drill war",
	"author": "Kndrx",
	"source": "DRILL WAR(1st drill prod).wav",
	"cover": "",
	"background" : "",
},
{
	"title": "Nick Mera type beat",
	"author": "Kndrx",
	"source": "NICK MERA(type beat flute).wav",
	"cover": "",
	"background" : "",
}];

var cover = document.getElementById('cover');
var title = document.getElementById('title');
var author = document.getElementById('author');
var mymusic = document.getElementById('music');
var volume = document.getElementById('volume');
var position = document.getElementById('position');
var currentTime = document.getElementById('currentTime');
var durationTime = document.getElementById('durationTime');


//init
mymusic.src = playlist[0].source;
mymusic.volume = volume.value/100;
position.value = mymusic.currentTime;
title.innerText = playlist[0].title;
author.innerText = playlist[0].author;
cover.style.backgroundImage = playlist[0].cover;
setInterval(function () {
	position.value = mymusic.currentTime * (100 / mymusic.duration);

	var currentMinutes = Math.floor(mymusic.currentTime / 60); 
	var currentSeconds = Math.floor(mymusic.currentTime - currentMinutes * 60); 
	var durationMinutes = Math.floor(mymusic.duration / 60); 
	var durationSeconds = Math.floor(mymusic.duration - durationMinutes * 60); 

	if (currentSeconds < 10) currentSeconds = "0" + currentSeconds; 
	if (durationSeconds < 10) durationSeconds = "0" + durationSeconds;
	if (currentMinutes < 10) currentMinutes = "0" + currentMinutes;
	if (durationMinutes < 10) durationMinutes = "0" + durationMinutes;

	currentTime.innerText = currentMinutes + ":" + currentSeconds;
	durationTime.innerText = durationMinutes + ":" + durationSeconds;
}, 1000);

function onPrev() {
	var currentIndex = playlist.findIndex(function(item) {                                            
		if(mymusic.src.indexOf(item.source) != -1) return true;
		else return false;
	});

	if (currentIndex <= 0) {
		var song = playlist[playlist.length-1];
	} else {
		var song = playlist[--currentIndex];
	}

	mymusic.src = song.source;
	title.innerText = song.title;
	author.innerText = song.author;
	cover.style.backgroundImage = 'url('+ song.cover + ')';

	mymusic.play();
}
function onNext() {
	var currentIndex = playlist.findIndex(function(item) {
		if(mymusic.src.indexOf(item.source) != -1) return true;
		else return false;
	});
	if (currentIndex >= playlist.length-1) {
		var song = playlist[0];
	} else {
		var song = playlist[++currentIndex];
	}

	mymusic.src = song.source;
	title.innerText = song.title;
	author.innerText = song.author;
	cover.style.backgroundImage = 'url('+ song.cover + ')';

	mymusic.play();
}

function onPosition(value) {
	var currentTime = mymusic.duration * (value / 100);
	mymusic.currentTime = currentTime;
}

class musicPlayer {
	constructor() {
		this.play = this.play.bind(this);
		this.playBtn = document.getElementById('play');
		this.playBtn.addEventListener('click', this.play)
		this.controlPanel = document.getElementById('control-panel');
		this.infoBar = document.getElementById('info');
  }
  
	play() {
		let controlPanelObj = this.controlPanel,
		infoBarObj = this.infoBar
		Array.from(controlPanelObj.classList).find(function(element){
					return element !== "active" ? controlPanelObj.classList.add('active') : 		controlPanelObj.classList.remove('active');
			});
		
		Array.from(infoBarObj.classList).find(function(element){
					return element !== "active" ? infoBarObj.classList.add('active') : 		infoBarObj.classList.remove('active');
      });
    if (mymusic.paused) 
      mymusic.play(); 
    else 
      mymusic.pause();
	}
}

function onVolume(value) { 
	mymusic.volume = value / 100; 
}

const newMusicplayer = new musicPlayer();

	var pathEls = document.querySelectorAll('path');
	for (var i = 0; i < pathEls.length; i++) {
	var pathEl = pathEls[i];
	var offset = anime.setDashoffset(pathEl);
	pathEl.setAttribute('stroke-dashoffset', offset);
	anime({
		targets: pathEl,
		strokeDashoffset: [offset, 0],
		duration: anime.random(1000, 3000),
		delay: anime.random(0, 2000),
		loop: true,
		direction: 'alternate',
		easing: 'easeInOutSine',
		autoplay: true
	});
	}


