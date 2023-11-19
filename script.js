function playAudioDelayed(audio1, delay) {
  const audioPlayer1 = document.getElementById(audio1);

  console.log("Delaying audio play by", delay, "milliseconds...");

  setTimeout(() => {
    console.log("Playing audio...");
    audioPlayer1.play();
    console.log("Audio played!");
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

// Create an instance of the Location class for "box1" with custom alert messages
const location1 = new Location('box1', 'audio1', 'https://giphy.com/embed/3o7TKRBB3E7IdVNLm8', function() {
  alert("HOMEOWNER:\n\tWhat in the hell!\n\tWhat's the matter with you? Can't you see I'm using it Damn it !!!");
  alert("JOEY: \n\tI'm looking for Waldo.");
  alert("NARRATOR: \n\tHome owner called the cops on you for breaking into his home.");
  alert("NARRATOR: \n\tYou have been arrested and taken into jail.");
  alert("NARRATOR: \n\tGame Over. \n\tyou lose!");
});

// Initialize the functionality for "box1"
location1.init();

// Create an instance of the Location class for "box2" with different custom alert messages
const location2 = new Location('box2', 'audio2', 'https://example.com/iframe2', function() {
  alert("Custom alert message 4");
  alert("Custom alert message 5");
  alert("Custom alert message 6");
});

// Initialize the functionality for "box2"
location2.init();




