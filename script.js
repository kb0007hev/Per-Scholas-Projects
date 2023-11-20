// Add an event listener to the instructional button to show the popup dialog
const instructionButton = {
  open: function() {
    const openbutton = document.getElementById('instructional-button');
    openbutton.addEventListener('click', this.showPopup);

    const closeButton = document.getElementById('close-button');
    closeButton.addEventListener('click', this.hidePopup);
  },

  showPopup: function() {
    const popup = document.getElementById('popup');
    popup.style.display = 'block';
  },

  hidePopup: function() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
  }
};

instructionButton.open();



let isAudioPlaying = false;

function playAudioDelayed(audioId, delay) {
  const audioPlayer = document.getElementById(audioId);

  if (isAudioPlaying) return; // Prevent audio playback if already playing

  isAudioPlaying = true; // Set the flag to indicate audio is playing

  console.log("Delaying audio play by", delay, "milliseconds...");

  setTimeout(() => {
    console.log("Playing audio...");
    audioPlayer.play();
    console.log("Audio played!");

    isAudioPlaying = false; // Reset the flag after audio playback is complete
  }, delay);
}







// LOCATION CLASS
class Location {
  constructor(boxId, audioSource, iframeURL, alertCallback) {
    this.boxId = boxId;
    this.audioSource = audioSource;
    this.iframeURL = iframeURL;
    this.alertCallback = alertCallback;

    this.box = null;
    this.iframe = null;
    this.timeoutId = null;
  }

  init() {
    // Get the box element
    this.box = document.getElementById(this.boxId);
    // Get the iframe element next to the box element
    this.iframe = this.box.nextElementSibling;
    // Set the source of the iframe to the provided URL
    this.iframe.src = this.iframeURL;

    // Add click event listener to the box element, calling boxClickHandler method when clicked
    this.box.addEventListener('click', this.boxClickHandler.bind(this));
  }

  boxClickHandler(event) {
    // Get the clicked box element
    const box = event.currentTarget;
    // Clear any existing timeout
    clearTimeout(this.timeoutId);
    // Toggle the 'open' class of the box element
    box.classList.toggle('open');
    // Set the visibility of the iframe based on the 'open' class state
    this.iframe.style.visibility = box.classList.contains('open') ? 'visible' : 'hidden';
  
    // Pause the currently playing audio
    const audioPlayer = document.getElementById(this.audioSource);
    audioPlayer.pause();
  
    if (box.classList.contains('open')) {
      // Play audio after a 1-second delay when 'box1' is opened
      playAudioDelayed(this.audioSource, 1000);
    }
  
    // Set a timeout to remove the 'open' class and hide the iframe after 3 seconds
    this.timeoutId = setTimeout(() => {
      box.classList.remove('open');
      this.iframe.style.visibility = 'hidden';
      this.alertCallback();
    }, 15000);
  }
}

// Create an instance of the Location class for "box1" 
const location1 = new Location('box1', 'audio1', 'https://giphy.com/embed/3o7TKRBB3E7IdVNLm8', function() {
  alert("HOMEOWNER:\n\tWhat in the hell!\n\tWhat's the matter with you? Can't you see I'm using it Damn it !!!");
  alert("JOEY: \n\tI'm looking for Waldo.");
  alert("NARRATOR: \n\tHome owner called the cops on you for breaking into his home.");
  alert("NARRATOR: \n\tYou have been arrested and taken into jail.");
  alert("NARRATOR: \n\tGame Over. \n\tYou Lose!");
});

// Initialize the functionality for "box1"
location1.init();

// Create an instance of the Location class for "box2" 
const location2 = new Location('box2', 'audio2', 'https://giphy.com/embed/10ZuedtImbopos', function() {
  alert("JOEY: \n\tWrong House Damn!");
  alert("NARRATOR: \n\t Joey chose the wrong house, and was killed.");
  alert("NARRATOR: \n\tGame Over. \n\tYou Lose!");
});

// Initialize the functionality for "box2"
location2.init();

// Create an instance of the Location class for "box3" 
const location3 = new Location('box3', 'audio3', 'https://giphy.com/embed/3o7TKEHQ0rsxugNQtO', function() {
  alert("JOEY: \n\tI'm looking for Waldo.\n Has anyone seen Waldo?"); 
  alert("JOGGERS: \n\t Get Away from us Freak!."); 
});

// Initialize the functionality for "box3"
location3.init();


// Create an instance of the Location class for "box4" 
const location4 = new Location('box4', 'audio4', 'https://giphy.com/embed/xUPGcm6QTGxJiYMJTW', function() {
  alert("JOEY: \n\tHas anyone seen Waldo"); 
  alert("Mike: \n\t He was here having a great time with us.\n He seen you and peel off man.\n you want a beer?."); 
  alert("JOEY: \n\tNo I'm good, I'm on the clock, tell me the direction he peel off in? Okay, Thanks Mike."); 
});

// Initialize the functionality for "box4"
location4.init();


// Create an instance of the Location class for "box5" 
const location5 = new Location('box5', 'audio5', 'https://media.tenor.com/ZddN3Iiqga0AAAAC/in-the-middle-stuck-in-the-middle.gif', function() {
  alert("JOEY: \n\tHas anyone seen Waldo?"); 
});

// Initialize the functionality for "box5"
location5.init();


// Create an instance of the Location class for "box6" 
const location6 = new Location('box6', 'audio6', '', function() {
  alert("JOEY: \n\t I FOUND YOU!"); 
  alert("WALDO: \n\t I had fun while it lasted \n I'm done with the nonsense. \n Congratulations, you WIN!"); 
});

// Initialize the functionality for "box6"
location6.init();







