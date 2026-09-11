const scenes=[...document.querySelectorAll(".scene")];let i=0;
function show(n){scenes[i].classList.remove("active");i=n;scenes[i].classList.add("active");window.scrollTo(0,0)}
function next(){if(i<scenes.length-1)show(i+1)}
document.querySelectorAll(".next").forEach(b=>b.addEventListener("click",next));
function openIt(){const e=document.getElementById("openEnvelope");if(e.classList.contains("open"))return;e.classList.add("open");setTimeout(()=>show(1),1350)}
document.getElementById("openEnvelope").onclick=openIt;document.getElementById("openText").onclick=openIt;
document.getElementById("openEnvelope").addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" ")openIt()});
const form=document.getElementById("nameForm"),inp=document.getElementById("nameInput"),err=document.getElementById("error");
form.addEventListener("submit",e=>{e.preventDefault();const v=inp.value.trim().toLowerCase();if(v.includes("rima")||v.includes("ռիմա")){show(5)}else{err.textContent="Not quite. Think much, much closer.";inp.focus()}});
const target=new Date("2026-09-13T18:30:00+04:00").getTime();
function tick(){let x=Math.max(0,target-Date.now()),d=Math.floor(x/864e5);x%=864e5;let h=Math.floor(x/36e5);x%=36e5;let m=Math.floor(x/6e4),s=Math.floor((x%6e4)/1000);[["d",d],["h",h],["m",m],["s",s]].forEach(([id,v])=>document.getElementById(id).textContent=String(v).padStart(2,"0"))}tick();setInterval(tick,1000);
const no=document.getElementById("no"),zone=document.getElementById("runZone"),tease=document.getElementById("tease");let tries=0;const lines=["Nice try.","Wrong answer, Rima.","You really thought that would work?","There is only one answer. ♡"];
function flee(e){e.preventDefault();const maxX=Math.max(0,zone.clientWidth-no.offsetWidth),maxY=Math.max(80,zone.clientHeight-no.offsetHeight);no.style.left=Math.random()*maxX+"px";no.style.top=(65+Math.random()*(maxY-65))+"px";no.style.transform="none";tease.textContent=lines[Math.min(tries++,lines.length-1)]}
["mouseenter","touchstart","click"].forEach(ev=>no.addEventListener(ev,flee,{passive:false}));
document.getElementById("yes").onclick=()=>{burst();setTimeout(()=>show(12),450)};
function burst(){for(let j=0;j<80;j++){const p=document.createElement("i");p.className="confetti-piece";p.style.left=Math.random()*100+"vw";p.style.setProperty("--dx",(Math.random()*160-80)+"px");p.style.animationDuration=(2+Math.random()*2.5)+"s";if(j%3===0)p.style.background="#aaa";document.body.appendChild(p);setTimeout(()=>p.remove(),5000)}}