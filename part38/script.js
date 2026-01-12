const right = document.querySelector('.right');
const bg = document.querySelector('.background');
const clickOptions = document.querySelector('.click-option');
const bottom = document.querySelector('.bottom');


let sum = '';

const folders = Array.from({ length: 21 }, (_, i) => i + 1);

folders.forEach((num) => {
  sum += `
    <div class="folder folder${num}">
      <img class="folder-img" src="./imges/folder-img.png" alt="Folder ${num}">
    </div>
  `;
});

right.innerHTML = sum;

const allFolders = document.querySelectorAll('.folder');


const popup = document.querySelector('.click-option');
document.addEventListener('dblclick', (e) => {
//disappear after some time
setTimeout(() => {
  popup.style.opacity = '0';
  popup.style.display = 'none';

},3000);
  
  popup.style.display = 'block';

  popup.style.left = `${e.pageX}px`;
  popup.style.top = `${e.pageY}px`;
  let x = e.pageX;
  let y = e.pageY;
  popup.style.opacity = '1';
      popup.style.display = 'flex';
    popup.style.flexDirection = 'column';
    popup.style.justifyContent = 'center';
      
});





