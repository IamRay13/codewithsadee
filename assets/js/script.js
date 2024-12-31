'use strict';

/**
 * all music information
 */

const musicData = [
 {
    backgroundImage: "./assets/images/poster-1.jpg",
    posterUrl: "./assets/images/poster-1.jpg",
    title: "Cradles",
    album: "Cradles",
    year: 2019,
    artist: "Sub urban",
    musicPath: "./assets/music/music-1.mp3",
  },
   {
    backgroundImage: "./assets/images/One last breath.jpg",
    posterUrl: "./assets/images/One last breath.jpg",
    title: "One Last Breath",
    album: "Weathered",
    year: 2021,
    artist: "Creed",
    musicPath: "./assets/music/One Last Breath.mp3",
  },
     {
    backgroundImage: "./assets/images/Iris",
    posterUrl: "./assets/images/Iris",
    title: "Iris",
    album: "Iris",
    year: 1998,
    artist: "GooGooDolls",
    musicPath: "./assets/music/SpotifyMate.com - Iris - The Goo Goo Dolls.mp3",
  },
    {
    backgroundImage: "./assets/images/Her",
    posterUrl: "./assets/images/Her",
    title: "Her",
    album: "Her",
    year: 2021,
    artist: "JVKE",
    musicPath: "./assets/music/SpotifyMate.com - her - JVKE.mp3",
  },
     {
    backgroundImage: "./assets/images/Radio",
    posterUrl: "./assets/images/Radio",
    title: "Radio",
    album: "Radio",
    year: 2012,
    artist: "LanaDelRey",
    musicPath: "./assets/music/SpotifyMate.com - Radio - Lana Del Rey.mp3",
  },
    {
    backgroundImage: "./assets/images/Angelbaby.jpg",
    posterUrl: "./assets/images/Angelbaby.jpg",
    title: "Angel Baby",
    album: "Angel Baby",
    year: 2021,
    artist: "Troye Sivan Song",
    musicPath: "./assets/music/spotifydown.com - Angel Baby.mp3",
  },
    {
    backgroundImage: "./assets/images/Stay.jpg",
    posterUrl: "./assets/images/Stay.jpg",
    title: "Stay",
    album: "Stay",
    year: 2021,
    artist: "Justin Bieber",
    musicPath: "./assets/music/Stay Justin.mp3",
  },
    {
    backgroundImage: "./assets/images/The climb.jpg",
    posterUrl: "./assets/images/The climb.jpg",
    title: "The climb",
    album: "The climb",
    year: 2024,
    artist: "Sky",
    musicPath: "./assets/music/The climb.mp3",
  },
  {
    backgroundImage: "./assets/images/Ghost.jpg",
    posterUrl: "./assets/images/Ghost.jpg",
    title: "Ghost",
    album: "Justice",
    year: 2021,
    artist: "Justin Bieber",
    musicPath: "./assets/music/Ghost.mp3",
  },
   {
    backgroundImage: "./assets/images/Daneliya Tuleshova - Arcade.jpg",
    posterUrl: "./assets/images/Daneliya Tuleshova - Arcade.jpg",
    title: "Arcade",
    album: "Arcade",
    year: 2023,
    artist: "Daneliya Tuleshova",
    musicPath: "./assets/music/Daneliya Tuleshova - Arcade.mp3",
  },
  {
    backgroundImage: "./assets/images/Daneliya Tuleshova - Tears of gold.jpg",
    posterUrl: "./assets/images/Daneliya Tuleshova - Tears of gold.jpg",
    title: "Tears of Gold",
    album: "Tears of Gold",
    year: 2020,
    artist: "Daneliya Tuleshova",
    musicPath: "./assets/music/Daneliya Tuleshova - Tears of gold.mp3",
  },
  {
    backgroundImage: "./assets/images/Lord Huron - The Night We Met.jpg",
    posterUrl: "./assets/images/Lord Huron - The Night We Met.jpg",
    title: "The Night We Met",
    album: "Strange Trails",
    year: 2015,
    artist: "Lord Huron",
    musicPath: "./assets/music/Lord Huron - The Night We Met.mp3",
  },
  {
    backgroundImage: "./assets/images/Maroon 5 - Sugar.jpg",
    posterUrl: "./assets/images/Maroon 5 - Sugar.jpg",
    title: "Sugar",
    album: "V",
    year: 2014,
    artist: "Maroon 5",
    musicPath: "./assets/music/Maroon 5 - Sugar.mp3",
  },
  {
    backgroundImage: "./assets/images/Somewhere Only We Know - Keane (cover) _ Renee Dominique.jpg",
    posterUrl: "./assets/images/Somewhere Only We Know - Keane (cover) _ Renee Dominique.jpg",
    title: "Somewhere Only We Know",
    album: "Somewhere Only We Know",
    year: 2019,
    artist: "Reneé Dominique",
    musicPath: "./assets/music/Somewhere Only We Know - Keane (cover) _ Renee Dominique.mp3",
  },
  {
    backgroundImage: "./assets/images/MoraloftheStory.jpg",
    posterUrl: "./assets/images/MoraloftheStory.jpg",
    title: "Ashe Moral of the Story",
    album: "Ashlyn",
    year: 2021,
    artist: "Ashe",
    musicPath: "./assets/music/Ashe Moral of the Story.mp3",
  },
   {
    backgroundImage: "./assets/images/Levels.jpg",
    posterUrl: "./assets/images/Levels.jpg",
    title: "Levels",
    album: "Levels",
    year: 2011,
    artist: "Avicii",
    musicPath: "./assets/music/Avicii Levels.mp3",
  },
   {
    backgroundImage: "./assets/images/BeautifulThings.jpg",
    posterUrl: "./assets/images/BeautifulThings.jpg",
    title: "Beautiful Things",
    album: "Fireworks & Rollerblades",
    year: 2024,
    artist: "Benson Boone",
    musicPath: "./assets/music/Benson Boone Beautiful Things.mp3",
  },
   {
    backgroundImage: "./assets/images/Hero.jpg",
    posterUrl: "./assets/images/Hero.jpg",
    title: "Hero",
    album: "Hero",
    year: 2016,
    artist: "Cash Cash Hero x Christina Perri",
    musicPath: "./assets/music/Cashcash x Chrsitina Perry Hero.mp3",
  },
   {
    backgroundImage: "./assets/images/Runaway.jpg",
    posterUrl: "./assets/images/Runaway.jpg",
    title: "Runaway (U & I)",
    album: "Pharmacy",
    year: 2014,
    artist: "Galantis",
    musicPath: "./assets/music/Galantis Runaway U I.mp3",
  },
   {
    backgroundImage: "./assets/images/Mary On A Cross.jpg",
    posterUrl: "./assets/images/Mary On A Cross.jpg",
    title: "Mary On A Cross",
    album: "Mary On A Cross (slowed + reverb)",
    year: 2019,
    artist: "Ghost",
    musicPath: "./assets/music/Ghost Mary On A Cross.mp3",
  },
  {
    backgroundImage: "./assets/images/Labrinth The Feels.jpg",
    posterUrl: "./assets/images/Labrinth The Feels.jpg",
    title: "The Feels",
    album: "Ends & Begins",
    year: 2023,
    artist: "Labrinth",
    musicPath: "./assets/music/Labrinth The Feels.mp3",
  },
     {
    backgroundImage: "./assets/images/Skin and bones.jpg",
    posterUrl: "./assets/images/Skin and bones.jpg",
    title: "Skin and Bones",
    album: "Skin and Bones",
    year: 2024,
    artist: "David Kushner",
    musicPath: "./assets/music/David Kushner Skin and Bones.mp3",
  },
     {
    backgroundImage: "./assets/images/Black Friday.jpg",
    posterUrl: "./assets/images/Black Friday.jpg",
    title: "Black Friday",
    album: "The End",
    year: 2024,
    artist: "Lost Frequencies x Tom Odell",
    musicPath: "./assets/music/Lost Frequencies x Tom Odell - Black Friday.mp3",
  },
     {
    backgroundImage: "./assets/images/Alone.jpg",
    posterUrl: "./assets/images/Alone.jpg",
    title: "Alone",
    album: "Alone",
    year: 2016,
    artist: "Marshmello",
    musicPath: "./assets/music/Marshmello - Alone.mp3",
  },
     {
    backgroundImage: "./assets/images/Silence.jpg",
    posterUrl: "./assets/images/Silence.jpg",
    title: "Silence",
    album: "Silence",
    year: 2017,
    artist: "(feat. Khalid)",
    musicPath: "./assets/music/Silence (feat. Khalid).mp3",
  },
  {
    backgroundImage: "./assets/images/I Took A Pill In Ibiza.jpg",
    posterUrl: "./assets/images/I Took A Pill In Ibiza.jpg",
    title: "I Took A Pill In Ibiza",
    album: "At Night, Alone",
    year: 2015,
    artist: "Mike Posner",
    musicPath: "./assets/music/Mike Posner - Took A Pill In Ibiza.mp3",
  },
     {
    backgroundImage: "./assets/images/Those Eyes.jpg",
    posterUrl: "./assets/images/Those Eyes.jpg",
    title: "Those Eyes",
    album: "Homecoming in my city",
    year: 2019,
    artist: "New West",
    musicPath: "./assets/music/New West - Those Eyes.mp3",
  },
     {
    backgroundImage: "./assets/images/Oceans (Where Feet May Fail).jpg",
    posterUrl: "./assets/images/Oceans (Where Feet May Fail).jpg",
    title: "Oceans (Where Feet May Fail)",
    album: "Zion (Deluxe Edition)",
    year: 2013,
    artist: "Hillsong UNITED x TAYA",
    musicPath: "./assets/music/Oceans (Where Feet May Fail).mp3",
  },
     {
    backgroundImage: "./assets/images/To the Bone.jpg",
    posterUrl: "./assets/images/To the Bone.jpg",
    title: "To the Bone",
    album: "The End of Flying Solo Era",
    year: 2020,
    artist: "Pamungkas x The PeoplePeople",
    musicPath: "./assets/music/To the Bone Song by Pamungkas, The PeoplePeople.mp3",
  },
     {
    backgroundImage: "./assets/images/Circles.jpg",
    posterUrl: "./assets/images/Circles.jpg",
    title: "Circles",
    album: "Hollywood's Bleeding",
    year: 2019,
    artist: "Post Malone",
    musicPath: "./assets/music/Post Malone - Circles.mp3",
  },
       {
    backgroundImage: "./assets/images/I Fall Apart.jpg",
    posterUrl: "./assets/images/I Fall Apart.jpg",
    title: "I Fall Apart",
    album: "Stoney (Complete Edition)",
    year: 2016,
    artist: "Post Malone",
    musicPath: "./assets/music/Post Malone I Fall Apart.mp3",
  },
       {
    backgroundImage: "./assets/images/Present.jpg",
    posterUrl: "./assets/images/Present.jpg",
    title: "Present",
    album: "Lens Flare",
    year: 2021,
    artist: "Lloyd Vaan",
    musicPath: "./assets/music/Lloyd Vaan Present.mp3",
  },
       {
    backgroundImage: "./assets/images/Atlantis.jpg",
    posterUrl: "./assets/images/Atlantis.jpg",
    title: "Atlantis",
    album: "Atlantis",
    year: 2022,
    artist: "Seafret x Seeb",
    musicPath: "./assets/music/Seafret - Atlantis.mp3",
  },
       {
    backgroundImage: "./assets/images/To Build a Home.jpg",
    posterUrl: "./assets/images/To Build a Home.jpg",
    title: "To Build a Home",
    album: "Live At the Royal Albert Hall",
    year: 2008,
    artist: "The Cinematic Orchestra",
    musicPath: "./assets/music/The Cinematic Orchestra – To Build a Home.mp3",
  },
       {
    backgroundImage: "./assets/images/Someone to Stay.jpg",
    posterUrl: "./assets/images/Someone to Stay.jpg",
    title: "Someone to Stay",
    album: "Revival",
    year: 2016,
    artist: "Vancouver Sleep Clinic",
    musicPath: "./assets/music/Vancouver Sleep Clinic - Someone to Stay.mp3",
  },
   {
    backgroundImage: "./assets/images/Dancing On My Own.jpg",
    posterUrl: "./assets/images/Dancing On My Own.jpg",
    title: "Dancing On My Own",
    album: "Only Human (Deluxe)",
    year: 2016,
    artist: "Calum Scott",
    musicPath: "./assets/music/Calum Scott Dancing On My Own.mp3",
  },
     {
    backgroundImage: "./assets/images/Falling.jpg",
    posterUrl: "./assets/images/Falling.jpg",
    title: "Falling",
    album: "Fine Line",
    year: 2019,
    artist: "Harry Styles",
    musicPath: "./assets/music/Harry Styles - Falling.mp3",
  },
  {
    backgroundImage: "./assets/images/Allfallsdown.jpg",
    posterUrl: "./assets/images/Allfallsdown.jpg",
    title: "All Falls Down",
    album: "All Falls Down",
    year: 2017,
    artist: "Alan Walker x Noah Cyrus x Digital Farm Animals",
    musicPath: "./assets/music/Alan Walker - All Falls Down feat. Noah Cyrus with Digital Farm Animals.mp3",
  },
  {
    backgroundImage: "./assets/images/Faded.jpg",
    posterUrl: "./assets/images/Faded.jpg",
    title: "Faded",
    album: "Different World",
    year: 2022,
    artist: "Alan Walker",
    musicPath: "./assets/music/Alan Walker - Faded.mp3",
  },
  {
    backgroundImage: "./assets/images/d4vid-herewithme.jpg",
    posterUrl: "./assets/images/d4vid-herewithme.jpg",
    title: "Here With Me",
    album: "Here With Me",
    year: 2022,
    artist: "D4vid",
    musicPath: "./assets/music/d4vd  Here With Me Official Music Video.mp3",
  },
    {
    backgroundImage: "./assets/images/Healer.jpg",
    posterUrl: "./assets/images/Healer.jpg",
    title: "Healer",
    album: "Changes",
    year: 2024,
    artist: "Hayd",
    musicPath: "./assets/music/Hayd Healer.mp3",
  },
  {
    backgroundImage: "./assets/images/ASkyFullOfStars.jpg",
    posterUrl: "./assets/images/ASkyFullOfStars.jpg",
    title: "A Sky Full Of Stars",
    album: "Ghost Stories",
    year: 2014,
    artist: "Coldplay",
    musicPath: "./assets/music/A Sky Full Of Stars.mp3",
  },
    {
    backgroundImage: "./assets/images/MyUniverse.jpg",
    posterUrl: "./assets/images/MyUniverse.jpg",
    title: "My Universe",
    album: "Music of the Spheres",
    year: 2021,
    artist: "Coldplay",
    musicPath: "./assets/music/Coldplay My Universe.mp3",
  },
    {
    backgroundImage: "./assets/images/Yellow.jpg",
    posterUrl: "./assets/images/Yellow.jpg",
    title: "Yellow",
    album: "Parachutes",
    year: 2000,
    artist: "Coldplay",
    musicPath: "./assets/music/Coldplay Yellow.mp3",
  },
  {
    backgroundImage: "./assets/images/Lonely.jpg",
    posterUrl: "./assets/images/Lonely.jpg",
    title: "Lonely",
    album: "Lonely",
    year: 2000,
    artist: "Justin Bieber x Benny Blanco",
    musicPath: "./assets/music/Lonely by Justin Bieber and Benny Blanco.mp3",
  },
    {
    backgroundImage: "./assets/images/CHIHIRO.jpg",
    posterUrl: "./assets/images/CHIHIRO.jpg",
    title: "CHIHIRO",
    album: "Hit Me Hard and Soft",
    year: 2024,
    artist: "Billie Eilish",
    musicPath: "./assets/music/Billie Eilish CHIHIRO.mp3",
  },
    {
    backgroundImage: "./assets/images/Eastside.jpg",
    posterUrl: "./assets/images/Eastside.jpg",
    title: "Eastside",
    album: "Friends Keep Secrets",
    year: 2018,
    artist: "Benny Blanco x Halsey Khalid",
    musicPath: "./assets/music/Benny Blanco and Halsey Khalid Eastside.mp3",
  },
    {
    backgroundImage: "./assets/images/Levitation.jpg",
    posterUrl: "./assets/images/Levitation.jpg",
    title: "Levitation",
    album: "Alternate Versions",
    year: 2024,
    artist: "Aaron Hibell x Felsmann x Tiley",
    musicPath: "./assets/music/Aaron Hibell, Felsmann and  Tiley Levitation.mp3",
  },
    {
    backgroundImage: "./assets/images/We Need A Miracle.jpg",
    posterUrl: "./assets/images/We Need A Miracle.jpg",
    title: "We Need A Miracle",
    album: "We Need a Miracle",
    year: 2021,
    artist: "Charity Gayle",
    musicPath: "./assets/music/Charity Gayle - We Need A Miracle.mp3",
  },
    {
    backgroundImage: "./assets/images/Palagi.jpg",
    posterUrl: "./assets/images/Palagi.jpg",
    title: "Palagi",
    album: "Palagi",
    year: 2023,
    artist: "TJ Monterde",
    musicPath: "./assets/music/Palagi Live at The Cozy Cove  TJ Monterde.mp3",
  },
      {
    backgroundImage: "./assets/images/Mamushi.jpg",
    posterUrl: "./assets/images/Mamushi.jpg",
    title: "Mamushi",
    album: "MEGAN: ACT II",
    year: 2024,
    artist: "Megan Thee Stallion",
    musicPath: "./assets/music/Megan Thee Stallion - Mamushi.mp3",
  },
    {
    backgroundImage: "./assets/images/Vee.jpg",
    posterUrl: "./assets/images/Vee.jpg",
    title: "Kumapit Ka Lang",
    album: "Floravee",
    year: 2024,
    artist: "Floravee",
    musicPath: "./assets/music/Kumapit Ka Lang - Floravee.mp3",
  },
]; 

/**
 * add eventListnere on all elements that are passed
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}

/**
 * PLAYLIST
 * 
 * add all music in playlist, from 'musicData'
 */

const playlist = document.querySelector("[data-music-list]");

for (let i = 0, len = musicData.length; i < len; i++) {
  playlist.innerHTML += `
  <li>
    <button class="music-item ${i === 0 ? "playing" : ""}" data-playlist-toggler data-playlist-item="${i}">
      <img src="${musicData[i].posterUrl}" width="800" height="800" alt="${musicData[i].title} Album Poster"
        class="img-cover">

      <div class="item-icon">
        <span class="material-symbols-rounded">equalizer</span>
      </div>
    </button>
  </li>
  `;
}

/**
 * PLAYLIST MODAL SIDEBAR TOGGLE
 * 
 * show 'playlist' modal sidebar when click on playlist button in top app bar
 * and hide when click on overlay or any playlist-item
 */

const playlistSideModal = document.querySelector("[data-playlist]");
const playlistTogglers = document.querySelectorAll("[data-playlist-toggler]");
const overlay = document.querySelector("[data-overlay]");

const togglePlaylist = function () {
  playlistSideModal.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("modalActive");
}

addEventOnElements(playlistTogglers, "click", togglePlaylist);

/**
 * PLAYLIST ITEM
 * 
 * remove active state from last time played music
 * and add active state in clicked music
 */

const playlistItems = document.querySelectorAll("[data-playlist-item]");

let currentMusic = 0;
let lastPlayedMusic = 0;

const changePlaylistItem = function () {
  playlistItems[lastPlayedMusic].classList.remove("playing");
  playlistItems[currentMusic].classList.add("playing");
}

addEventOnElements(playlistItems, "click", function () {
  lastPlayedMusic = currentMusic;
  currentMusic = Number(this.dataset.playlistItem);
  changePlaylistItem();
  changePlayerInfo();
});

/**
 * PLAYER
 * 
 * change all visual information on player, based on current music
 */

const playerBanner = document.querySelector("[data-player-banner]");
const playerTitle = document.querySelector("[data-title]");
const playerAlbum = document.querySelector("[data-album]");
const playerYear = document.querySelector("[data-year]");
const playerArtist = document.querySelector("[data-artist]");

const audioSource = new Audio(musicData[currentMusic].musicPath);

const changePlayerInfo = function () {
  playerBanner.src = musicData[currentMusic].posterUrl;
  playerBanner.setAttribute("alt", `${musicData[currentMusic].title} Album Poster`);
  document.body.style.backgroundImage = `url(${musicData[currentMusic].backgroundImage})`;
  playerTitle.textContent = musicData[currentMusic].title;
  playerAlbum.textContent = musicData[currentMusic].album;
  playerYear.textContent = musicData[currentMusic].year;
  playerArtist.textContent = musicData[currentMusic].artist;

  audioSource.src = musicData[currentMusic].musicPath;

  audioSource.addEventListener("loadeddata", updateDuration);
  playMusic();
}

addEventOnElements(playlistItems, "click", changePlayerInfo);

/** update player duration */
const playerDuration = document.querySelector("[data-duration]");
const playerSeekRange = document.querySelector("[data-seek]");

/** pass seconds and get timcode formate */
const getTimecode = function (duration) {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.ceil(duration - (minutes * 60));
  const timecode = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  return timecode;
}

const updateDuration = function () {
  playerSeekRange.max = Math.ceil(audioSource.duration);
  playerDuration.textContent = getTimecode(Number(playerSeekRange.max));
}

audioSource.addEventListener("loadeddata", updateDuration);

/**
 * PLAY MUSIC
 * 
 * play and pause music when click on play button
 */

const playBtn = document.querySelector("[data-play-btn]");

let playInterval;

const playMusic = function () {
  if (audioSource.paused) {
    audioSource.play();
    playBtn.classList.add("active");
    playInterval = setInterval(updateRunningTime, 500);
  } else {
    audioSource.pause();
    playBtn.classList.remove("active");
    clearInterval(playInterval);
  }
}

playBtn.addEventListener("click", playMusic);

/** update running time while playing music */

const playerRunningTime = document.querySelector("[data-running-time]");

const updateRunningTime = function () {
  playerSeekRange.value = audioSource.currentTime;
  playerRunningTime.textContent = getTimecode(audioSource.currentTime);

  updateRangeFill();
  isMusicEnd();
}

/**
 * RANGE FILL WIDTH
 * 
 * change 'rangeFill' width, while changing range value
 */

const ranges = document.querySelectorAll("[data-range]");
const rangeFill = document.querySelector("[data-range-fill]");

const updateRangeFill = function () {
  let element = this || ranges[0];

  const rangeValue = (element.value / element.max) * 100;
  element.nextElementSibling.style.width = `${rangeValue}%`;
}

addEventOnElements(ranges, "input", updateRangeFill);

/**
 * SEEK MUSIC
 * 
 * seek music while changing player seek range
 */

const seek = function () {
  audioSource.currentTime = playerSeekRange.value;
  playerRunningTime.textContent = getTimecode(playerSeekRange.value);
}

playerSeekRange.addEventListener("input", seek);

/**
 * END MUSIC
 */

const isMusicEnd = function () {
  if (audioSource.ended) {
    playBtn.classList.remove("active");
    audioSource.currentTime = 0;
    playerSeekRange.value = audioSource.currentTime;
    playerRunningTime.textContent = getTimecode(audioSource.currentTime);
    updateRangeFill();
    skipNext(); // Automatically skip to the next music
  }
}

/**
 * SKIP TO NEXT MUSIC
 */

const playerSkipNextBtn = document.querySelector("[data-skip-next]");

const skipNext = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic >= musicData.length - 1 ? currentMusic = 0 : currentMusic++;
  }

  changePlayerInfo();
  changePlaylistItem();
}

playerSkipNextBtn.addEventListener("click", skipNext);

/**
 * SKIP TO PREVIOUS MUSIC
 */

const playerSkipPrevBtn = document.querySelector("[data-skip-prev]");

const skipPrev = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic <= 0 ? currentMusic = musicData.length - 1 : currentMusic--;
  }

  changePlayerInfo();
  changePlaylistItem();
}

/**
 * SHUFFLE MUSIC
 */

/** get random number for shuffle */
const getRandomMusic = () => Math.floor(Math.random() * musicData.length);

const shuffleMusic = () => currentMusic = getRandomMusic();

const playerShuffleBtn = document.querySelector("[data-shuffle]");
let isShuffled = false;

const shuffle = function () {
  playerShuffleBtn.classList.toggle("active");

  isShuffled = isShuffled ? false : true;
}

playerShuffleBtn.addEventListener("click", shuffle);

/**
 * REPEAT MUSIC
 */

const playerRepeatBtn = document.querySelector("[data-repeat]");

const repeat = function () {
  if (!audioSource.loop) {
    audioSource.loop = true;
    this.classList.add("active");
  } else {
    audioSource.loop = false;
    this.classList.remove("active");
  }
}

playerRepeatBtn.addEventListener("click", repeat);

/**
 * MUSIC VOLUME
 * 
 * increase or decrease music volume when change the volume range
 */

const playerVolumeRange = document.querySelector("[data-volume]");
const playerVolumeBtn = document.querySelector("[data-volume-btn]");

const changeVolume = function () {
  audioSource.volume = playerVolumeRange.value;
  audioSource.muted = false;

  if (audioSource.volume <= 0.1) {
    playerVolumeBtn.children[0].textContent = "volume_mute";
  } else if (audioSource.volume <= 0.5) {
    playerVolumeBtn.children[0].textContent = "volume_down";
  } else {
    playerVolumeBtn.children[0].textContent = "volume_up";
  }
}

playerVolumeRange.addEventListener("input", changeVolume);
