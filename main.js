(()=>{"use strict";var e={d:(t,n)=>{for(var d in n)e.o(n,d)&&!e.o(t,d)&&Object.defineProperty(t,d,{enumerable:!0,get:n[d]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{x:()=>o,K:()=>l});class t{constructor(e,t,n,d,o){this._title=e,this._description=t,this._dueDate=n,this._priority=d,this._project=o}get title(){return this._title}get description(){return this._description}get dueDate(){return this._dueDate}get priority(){return this._priority}get project(){return this._project}}let n=0;document.getElementById("main");class d{constructor(e){this._projectName=e}get projectName(){return this._projectName}}console.log("12345");let o={},l=[];const c=document.getElementById("new-todo"),i=document.getElementById("dialog"),r=document.getElementById("cancel-Btn"),s=document.getElementById("confirm-Btn"),m=document.getElementById("form"),a=document.getElementById("all-tasks"),u=document.getElementById("create-new-project");let p=document.getElementById("project-form");c.addEventListener("click",(()=>{i.showModal()})),r.addEventListener("click",(()=>{i.close("test cancel string where do i see this")})),s.addEventListener("click",(function(){let e=document.getElementById("title").value,d=document.getElementById("description").value,l=document.getElementById("due-date").value,c=document.getElementById("priority").value,r=document.getElementById("project").value,s=new t(e,d,l,c,r);return!0===m.checkValidity()&&(function(e,t){t[n]=e,n++}(s,o),console.log(o),document.querySelector("form").reset(),i.close(),document.getElementById("title").required=!1),s})),c.addEventListener("click",(()=>{i.showModal(),document.getElementById("title").required=!0})),a.addEventListener("click",(()=>{!function(){let e=0;const t=document.getElementById("tasks-container");for(;t.firstChild;)t.removeChild(t.firstChild);for(let t in o){let t=document.createElement("div");document.getElementById("tasks-container").appendChild(t),t.classList.add("task");let n=document.createElement("div");t.appendChild(n),n.innerHTML=o[e].title;let d=document.createElement("div");t.appendChild(d),d.innerHTML=o[e].description;let l=document.createElement("div");t.appendChild(l),l.innerHTML=o[e].dueDate;let c=document.createElement("div");t.appendChild(c),c.innerHTML=o[e].priority,e++}}()})),u.addEventListener("click",(function(e){let t=document.getElementById("new-project").value;if(!0===p.checkValidity()){e.preventDefault();let n=new d(t);l.push(n),console.log(l),document.getElementById("project-form").reset(),function(e){let t=0;const n=document.getElementById("projects");for(;n.firstChild;)n.removeChild(n.firstChild);const d=document.getElementById("project");for(;d.childNodes.length>1;)console.log(d.lastChild.value),console.log(d.childNodes.length),d.removeChild(d.lastChild);let o=document.createElement("div");document.getElementById("tasks-container").appendChild(o),o.classList.add("task");for(let o in l){let o=document.createElement("div");n.appendChild(o),o.classList.add("project"),o.innerHTML=e[t].projectName;let l=document.createElement("option");d.appendChild(l),l.innerHTML=e[t].projectName,t++}}(l)}}))})();