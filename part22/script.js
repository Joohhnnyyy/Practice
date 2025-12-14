const pianoKeys = [
  { key: "C4",       note: "Middle C",            freq: 261.63, type: "white" },
  { key: "C#4/Db4",  note: "C Sharp / D Flat",    freq: 277.18, type: "black" },
  { key: "D4",       note: "D",                   freq: 293.66, type: "white" },
  { key: "D#4/Eb4",  note: "D Sharp / E Flat",    freq: 311.13, type: "black" },
  { key: "E4",       note: "E",                   freq: 329.63, type: "white" },
  { key: "F4",       note: "F",                   freq: 349.23, type: "white" },
  { key: "F#4/Gb4",  note: "F Sharp / G Flat",    freq: 369.99, type: "black" },
  { key: "G4",       note: "G",                   freq: 392.00, type: "white" },
  { key: "G#4/Ab4",  note: "G Sharp / A Flat",    freq: 415.30, type: "black" },
  { key: "A4",       note: "A (Standard Tune)",   freq: 440.00, type: "white" },
  { key: "A#4/Bb4",  note: "A Sharp / B Flat",    freq: 466.16, type: "black" },
  { key: "B4",       note: "B",                   freq: 493.88, type: "white" }
];

var bb3 =  new Audio("./Bb3.mp3");
var Eb3 =  new Audio("./Eb3.mp3");
var F4 =  new Audio("./F4.mp3");



const piano = document.getElementById("piano");

let html = "";

// walk through array, attaching black key to the white key before it
for (let i = 0; i < pianoKeys.length; i++) {
  const key = pianoKeys[i];

  if (key.type === "white") {
    let blackHtml = "";

    // if next one is black, attach it to this white key
    if (pianoKeys[i + 1] && pianoKeys[i + 1].type === "black") {
      const b = pianoKeys[i + 1];
      blackHtml = `
        <div class="inner">
          <div class="black-key">
            <div class="black-top"><h1>${b.key}</h1></div>
            <div class="black-bottom"><h1>${b.note}</h1></div>
          </div>
        </div>
      `;
      i++; // skip the black key in the next loop step
    }

    html += `
      <div class="outer">
        <div class="key">
          <div class="top"><h1>${key.key}</h1></div>
          <div class="bottom"><h1>${key.note}</h1></div>
        </div>
        ${blackHtml}
      </div>
    `;
  }
}

piano.innerHTML = html;

var keys = document.querySelectorAll('.outer .key');

keys.forEach(function(key) {
  key.addEventListener('click', function(event) {
    console.log('clicked a key');
  });
});

var blackKeys = document.querySelectorAll('.outer .inner .black-key');

blackKeys.forEach(function(blackKey) {
  blackKey.addEventListener('click', function(event) {
    console.log('clicked a black key');
    event.stopPropagation(); // prevent triggering the white key's click event
  });
});


