(()=>{"use strict";class e{constructor(e,t,n,i){this._title=e,this._description=t,this._dueDate=n,this._priority=i}get title(){return this._title}get description(){return this._description}get dueDate(){return this._dueDate}get priority(){return this._priority}}console.log("12345");let t=[];const n=document.getElementById("new-todo"),i=document.getElementById("dialog"),d=document.getElementById("cancel-Btn"),o=document.getElementById("confirm-Btn");n.addEventListener("click",(()=>{i.showModal()})),d.addEventListener("click",(()=>{i.close("test cancel string where do i see this")})),o.addEventListener("click",(function(){let n=document.getElementById("title").value,i=document.getElementById("description").value,d=document.getElementById("due-date").value,o=document.getElementById("priority").value,c=new e(n,i,d,o);t.push(c),console.log(t)})),n.addEventListener("click",(()=>{i.showModal()}))})();