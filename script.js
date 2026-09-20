const loader=document.getElementById('loader');
const page=document.getElementById('page');
const pct=document.getElementById('pct');
const bar=document.getElementById('bar');
let n=0;
const timer=setInterval(()=>{
  n+=Math.floor(Math.random()*5)+2;
  if(n>=100){n=100;clearInterval(timer);setTimeout(()=>{loader.classList.add('hide');page.classList.add('ready')},450)}
  pct.textContent=n;bar.style.width=n+'%';
},55);
