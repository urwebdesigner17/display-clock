const bg = document.getElementById('bodyColor')
function updateClock12() {
    var currentTime = new Date();
    var hours = currentTime.getHours().toString().padStart(2, '0');
    var minutes = currentTime.getMinutes().toString().padStart(2, '0');
    var seconds = currentTime.getSeconds().toString().padStart(2, '0');
    var ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    document.getElementById('ampm').textContent = ampm;
    const greet12 = document.getElementById('display12')

    var currentTime = hours + ':' + minutes + ' ' + ampm;

    if(hours < 12){
      greet12.innerText = 'Good Morning';
      bg.classList.add('morning')
    }
    else{
      greet12.innerText = 'Good Evening';
      bg.classList.add('evening')
    }
    return currentTime;
  }
setInterval(updateClock12, 1000);

function updateClock24() {
  var currentTime = new Date();
  var hours = currentTime.getHours().toString().padStart(2, '0');
  var minutes = currentTime.getMinutes().toString().padStart(2, '0');
  var seconds = currentTime.getSeconds().toString().padStart(2, '0');
  var ampm = hours >= 12 ? 'PM' : 'AM';

  document.getElementById('hours24').textContent = hours;
  document.getElementById('minutes24').textContent = minutes;
  document.getElementById('seconds24').textContent = seconds;
  document.getElementById('ampm24').textContent = ampm;
  const greet24 = document.getElementById('display24')

  var currentTime = hours + ':' + minutes;

  if(hours < 12){
    greet24.innerText = 'Good Morning';
    bg.classList.add('morning')
  }else if(hours === 12 || hours > 18){
    greet24.innerText = 'Good Afternoon';
    bg.classList.add('afternoon')
  }else{
    greet24.innerText = 'Good Evening';
    bg.classList.add('evening')
  }
  return currentTime;
}
setInterval(updateClock24, 1000);

function myFunction() {
  var x = document.getElementById("clock12");
  var y = document.getElementById("clock24");
  if (x.style.display === "none" && y.style.display === "block") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "block";
  }
}

const btn = document.querySelector('.toggleBtn');
const moveBtn = document.querySelector('.bgMove');
const fa = document.querySelector('.fa-solid');
const faMoon=document.querySelector('.fa-moon');
const faSun=document.querySelector('.fa-sun');

btn.addEventListener('click', function(){
  moveBtn.classList.toggle('active')
  fa.classList.toggle('dark')

  if(moveBtn.classList === 'active'){
    faSun.classList.remove('fa-sun2')
  }else{
    faSun.classList.add('fa-sun2')
  }
  if(moveBtn.classList.contains('active')){
    document.body.classList.add('dark')
    faMoon.classList.add('fa-sun2')
  }else{
    document.body.classList.remove('dark')
    faMoon.classList.remove('fa-sun2')
  }
})
