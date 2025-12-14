var btn = document.getElementById('Button');
const jsTexts = [
  { text: "JS" },
  { text: "Async" },
  { text: "Promise" },
  { text: "Callback" },
  { text: "Closure" },
  { text: "Hoisting" },
  { text: "Prototype" },
  { text: "ES6" },
  { text: "Arrow Fn" },
  { text: "Map" },
  { text: "Filter" },
  { text: "Reduce" },
  { text: "Event Loop" },
  { text: "Fetch" },
  { text: "DOM" },
  { text: "Node.js" },
  { text: "React" },
  { text: "Variables" },
  { text: "Scope" },
  { text: "Objects" },
  { text: "Array" },
  { text: "API" },
  { text: "Modules" },
  { text: "Class" },
  { text: "Regex" }
];


btn.addEventListener('click', function() {
    console.log('Button clicked!');
    var div = document.createElement('div');
    div.style.width = `${Math.floor(Math.random() *200) + 50}px`;
    div.style.height = `${Math.floor(Math.random() * 200) + 50}px`;
    div.style.rotate = `${Math.floor(Math.random() * 360)}deg`;
    div.style.position = 'absolute';
    div.innerHTML = jsTexts[Math.floor(Math.random() * jsTexts.length)].text;
    div.style.display = 'flex';
    div.style.alignItems = 'center';
    div.style.justifyContent = 'center';
    div.style.fontSize = '20px';
    div.style.color = 'white';
    div.style.scale = `${(Math.random() * 1.5 + 0.5).toFixed(2)}`;
    div.style.top = `${Math.floor(Math.random() * (window.innerHeight - 100)) + 'px'}`;
    div.style.left = `${Math.floor(Math.random() * (window.innerWidth - 100)) + 'px'}`;
    div.style.borderRadius = '20px';
    div.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    var main = document.querySelector('main');

    main.appendChild(div);
});