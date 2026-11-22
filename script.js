const body=document.body;
const langButton=document.getElementById("langSwitch");
function setLanguage(lang){
  const english=lang==="en";
  body.classList.toggle("lang-en",english);
  document.documentElement.lang=english?"en":"fa";
  document.documentElement.dir=english?"ltr":"rtl";
  langButton.innerHTML=english?'FA <span>↗</span>':'EN <span>↗</span>';
  localStorage.setItem("portfolio-language",lang);
}
langButton.addEventListener("click",()=>setLanguage(body.classList.contains("lang-en")?"fa":"en"));
const saved=localStorage.getItem("portfolio-language");
if(saved==="en")setLanguage("en");
const menuButton=document.querySelector(".mobile-menu");
const nav=document.querySelector(".navlinks");
menuButton.addEventListener("click",()=>nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();
