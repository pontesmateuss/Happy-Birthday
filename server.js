// script.js

// Data de hoje bonita
const today = new Date();
const f = new Intl.DateTimeFormat('pt-BR', { weekday:'long', day:'2-digit', month:'long', year:'numeric' });
document.getElementById('today').textContent = f.format(today);
document.getElementById('year').textContent = new Date().getFullYear();

// Corações flutuantes
const heartsLayer = document.querySelector('.hearts');
let heartsOn = true, starsOn = true;
function spawnHeart(){
  if(!heartsOn) return;
  const h = document.createElement('div');
  h.className = 'heart';
  const size = 8 + Math.random()*14;
  h.style.width = h.style.height = size + 'px';
  h.style.left = Math.random()*100 + 'vw';
  h.style.bottom = '-20px';
  h.style.animationDuration = (7 + Math.random()*6) + 's';
  h.style.opacity = (0.4 + Math.random()*0.5).toFixed(2);
  h.style.filter = `hue-rotate(${Math.floor(Math.random()*10-5)}deg)`;
  heartsLayer.appendChild(h);
  setTimeout(()=> h.remove(), 14000);
}
const heartTimer = setInterval(spawnHeart, 600);

// Alternadores
document.getElementById('toggleHearts').onclick = () => {
  heartsOn = !heartsOn;
  if(!heartsOn){ heartsLayer.innerHTML=''; }
  document.getElementById('toggleHearts').textContent = heartsOn? 'Desligar corações' : 'Ligar corações';
}
document.getElementById('toggleStars').onclick = () => {
  starsOn = !starsOn;
  document.querySelector('.stars').style.display = starsOn? 'block':'none';
  document.getElementById('toggleStars').textContent = starsOn? 'Desligar estrelas' : 'Ligar estrelas';
}

// Embaralhar pequenas rotações das polaroids
document.getElementById('shuffle').onclick = () => {
  document.querySelectorAll('.polaroid').forEach((p)=>{
    const rot = (Math.random()*12 - 6).toFixed(1);
    p.style.setProperty('--rot', rot + 'deg');
  })
}
