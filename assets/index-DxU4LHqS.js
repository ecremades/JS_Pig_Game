(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))f(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const d of t.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&f(d)}).observe(document,{childList:!0,subtree:!0});function g(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function f(e){if(e.ep)return;e.ep=!0;const t=g(e);fetch(e.href,t)}})();document.querySelector("#app").innerHTML=`
    <main>
      <section class="player player--0 player--active">
        <h2 class="name" id="name--0">Player 1</h2>
        <p class="score" id="score--0">43</p>
        <div class="current">
          <p class="current-label">Current</p>
          <p class="current-score" id="current--0">3</p>
        </div>
      </section>
      <section class="player player--1">
        <h2 class="name" id="name--1">Player 2</h2>
        <p class="score" id="score--1">24</p>
        <div class="current">
          <p class="current-label">Current</p>
          <p class="current-score" id="current--1">5</p>
        </div>
      </section>

      <img src="dice-5.png" alt="Playing dice" class="dice" />
      <button class="btn btn--new">🔄 New game</button>
      <button class="btn btn--roll">🎲 Roll dice</button>
      <button class="btn btn--hold">📥 Hold</button>
    </main>
`;const o=document.querySelector(".player--0"),l=document.querySelector(".player--1"),b=document.querySelector("#score--0"),v=document.querySelector("#score--1"),u=document.querySelector("#current--0"),p=document.querySelector("#current--1"),S=document.querySelector(".btn--new"),y=document.querySelector(".btn--hold"),m=document.querySelector(".btn--roll"),i=document.querySelector(".dice");let s,c,r;const L=()=>{s=[0,0],c=0,r=0,i.classList.add("hidden"),b.textContent=0,v.textContent=0,u.textContent=0,p.textContent=0};L();function C(){const n=Math.trunc(Math.random()*6+1);i.classList.remove("hidden"),i.src=`dice-${n}.png`,n!==1?q(n):h()}function q(n){c+=n,r===0?u.textContent=c:p.textContent=c}function h(){w(),o.classList.toggle("player--active"),l.classList.toggle("player--active"),r=r===0?1:0}function w(){c=0,r===0?u.textContent=c:p.textContent=c}function P(){s[r]+=c,r===0?b.textContent=s[r]:v.textContent=s[r],s[r]>=100?x():h()}function x(){r===0?(o.classList.add("player--winner"),o.classList.remove("player--active")):(l.classList.add("player--winner"),l.classList.remove("player--active")),i.classList.add("hidden"),m.disabled=!0,y.disabled=!0}function N(){o.classList.remove("player--winner"),l.classList.remove("player--winner"),o.classList.add("player--active"),l.classList.remove("player--active"),m.disabled=!1,y.disabled=!1,L()}m.addEventListener("click",C);y.addEventListener("click",P);S.addEventListener("click",N);
