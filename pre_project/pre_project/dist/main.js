(()=>{"use strict";const t=[{name:"Котлета",price:1290},{name:"Курица",price:3500},{name:"Помидоры",price:3990}];function n(t){document.getElementById("app").innerHTML+=t}let e=0;const a={};for(let n of t)a[n.name]={...n,count:0};function c({name:t,price:e,count:a}){n(`\n    <div class="p-3 mb-2 bg-secondary text-white">\n\n    <p class="text-center fw-bold">\n\n    <img src="image1.png">${t}</img>[ ${e} руб <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cash" viewBox="0 0 16 16">\n    <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>\n    <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z"/>\n    </svg> ] - ${a} шт\n\n    <button class="addTocart btn btn-warning" data-name="${t}" data-price="${e}">\n    Добавить\n    </button>\n\n    <button class="removeTocart btn btn-danger" data-name="${t}" data-price="${e}">\n    Удалить\n    </button>\n\n    </p>\n\n    </div>\n  `)}!function r(){document.getElementById("app").innerHTML="";for(let n of t)c(a[n.name]);n(`<div class="p-3 mb-2 bg-success text-white">\n\n    <p class="text-center fw-bold">\n\n      Итог : ${e} <img src="rubl.png"></img>\n    </p>\n\n    </div>\n    `),document.querySelectorAll(".addTocart").forEach((t=>{t.addEventListener("click",(t=>{let n=t.target.getAttribute("data-name"),c=+t.target.getAttribute("data-price");e+=c,a[n].count+=1,r()}))})),document.querySelectorAll(".removeTocart").forEach((t=>{t.addEventListener("click",(t=>{let n=t.target.getAttribute("data-name"),c=t.target.getAttribute("data-price");e-=c,e<0&&(e=0),a[n].count-=1,a[n].count<0&&(a[n].count=0),r()}))}))}()})();