(()=>{"use strict";var e={d:(t,n)=>{for(var d in n)e.o(n,d)&&!e.o(t,d)&&Object.defineProperty(t,d,{enumerable:!0,get:n[d]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{x:()=>l,K:()=>o});class t{constructor(e,t,n,d,l){this._title=e,this._description=t,this._dueDate=n,this._priority=d,this._project=l}get title(){return this._title}get description(){return this._description}get dueDate(){return this._dueDate}get priority(){return this._priority}get project(){return this._project}}let n=0;document.getElementById("main");class d{constructor(e){this._projectName=e}get projectName(){return this._projectName}}document.querySelectorAll(".project");console.log("12345");let l={},o=[];const i=document.getElementById("new-todo"),c=document.getElementById("dialog"),r=document.getElementById("cancel-Btn"),m=document.getElementById("confirm-Btn"),s=document.getElementById("form"),a=document.getElementById("all-tasks"),u=document.getElementById("create-new-project");let p=document.getElementById("project-form");i.addEventListener("click",(()=>{c.showModal()})),r.addEventListener("click",(()=>{c.close("test cancel string where do i see this")})),m.addEventListener("click",(function(){let e=document.getElementById("title").value,d=document.getElementById("description").value,o=document.getElementById("due-date").value,i=document.getElementById("priority").value,r=document.getElementById("project").value,m=new t(e,d,o,i,r);return!0===s.checkValidity()&&(function(e,t){t[n]=e,n++}(m,l),console.log(l),document.querySelector("form").reset(),c.close(),document.getElementById("title").required=!1),m})),i.addEventListener("click",(()=>{c.showModal(),document.getElementById("title").required=!0})),a.addEventListener("click",(()=>{!function(){let e=0;const t=document.getElementById("tasks-container");for(;t.firstChild;)t.removeChild(t.firstChild);for(let t in l){let t=document.createElement("div");document.getElementById("tasks-container").appendChild(t),t.classList.add("task");let n=document.createElement("div");t.appendChild(n),n.innerHTML=l[e].title;let d=document.createElement("div");t.appendChild(d),d.innerHTML=l[e].description;let o=document.createElement("div");t.appendChild(o),o.innerHTML=l[e].dueDate;let i=document.createElement("div");t.appendChild(i),i.innerHTML=l[e].priority,e++}}()})),u.addEventListener("click",(function(e){let t=document.getElementById("new-project").value;if(!0===p.checkValidity()){e.preventDefault();let n=new d(t);o.push(n),console.log(o),document.getElementById("project-form").reset(),function(e){let t=0;const n=document.getElementById("projects");for(;n.firstChild;)n.removeChild(n.firstChild);const d=document.getElementById("project");for(;d.childNodes.length>1;)console.log(d.lastChild.value),console.log(d.childNodes.length),d.removeChild(d.lastChild);let i=document.createElement("div");document.getElementById("tasks-container").appendChild(i),i.classList.add("task");for(let l in o){let l=document.createElement("div");n.appendChild(l),l.classList.add("project"),l.innerHTML=e[t].projectName;let o=document.createElement("option");d.appendChild(o),o.innerHTML=e[t].projectName,t++}!function(){let e;document.querySelectorAll(".project").forEach((t=>{t.addEventListener("click",(function(n){console.log(e);let d=0;const o=document.getElementById("tasks-container");for(;o.firstChild;)o.removeChild(o.firstChild);e=t.innerText,console.log(e);for(let t in l)if(e==l[d].project){let e=document.createElement("div");document.getElementById("tasks-container").appendChild(e),e.classList.add("task");let t=document.createElement("div");e.appendChild(t),t.innerHTML=l[d].title;let n=document.createElement("div");e.appendChild(n),n.innerHTML=l[d].description;let o=document.createElement("div");e.appendChild(o),o.innerHTML=l[d].dueDate;let i=document.createElement("div");e.appendChild(i),i.innerHTML=l[d].priority,d++}}))}))}()}(o)}}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSUMsRUFBVVUsU0FBUytCLGNBQWMsT0FDckNELEVBQUtFLFlBQVkxQyxHQUNqQkEsRUFBUTZDLFVBQVk1QixFQUFvQm1CLEdBQUdwQyxRQUUzQyxJQUFJQyxFQUFXUyxTQUFTK0IsY0FBYyxPQUN0Q0QsRUFBS0UsWUFBWXpDLEdBQ2pCQSxFQUFTNEMsVUFBWTVCLEVBQW9CbUIsR0FBR25DLFNBQzVDbUMsR0FDSixDQUVSLE1BRUosQ0ZYSTJCLEVBQ0osQ0NvQ1FDLENBQWtCOUMsRUFDdEIsQ0FDSixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvdG9kby1jbGFzcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9hZGRUb0RvVG9PYmplY3QuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvYWxsLXRhc2tzLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL3Byb2plY3QtY2xhc3MuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvZGlzcGxheS1wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9kaXNwbGF5LXRhc2tzLWZyb20tcHJvamVjdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJleHBvcnQgY2xhc3MgdG9EbyB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkge1xuICAgICAgICB0aGlzLl90aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLl9kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5fcHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5fcHJvamVjdCA9IHByb2plY3Q7XG4gICAgfVxuICAgIGdldCB0aXRsZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gICAgfVxuICAgIGdldCBkZXNjcmlwdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XG4gICAgfVxuICAgIGdldCBkdWVEYXRlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9kdWVEYXRlO1xuICAgIH1cbiAgICBnZXQgcHJpb3JpdHkoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ByaW9yaXR5O1xuICAgIH1cbiAgICBnZXQgcHJvamVjdCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvamVjdDtcbiAgICB9XG59XG5cbi8vIGxldCB0b0RvSXRlbSA9IG5ldyB0b0RvKHRpdGxlLCBkZWNyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkiLCJsZXQgaWQgPSAwXG5sZXQgQWRkVG9PYmplY3QgPSBmdW5jdGlvbiAob2JqZWN0LCBvYmplY3RPZlRvRG9PYmplY3RzKXtcbiAgICBvYmplY3RPZlRvRG9PYmplY3RzW2lkXSA9IG9iamVjdFxuICAgIGlkKys7XG59XG5cbmV4cG9ydCB7IEFkZFRvT2JqZWN0IH1cbiIsImltcG9ydCB7IG9iamVjdE9mVG9Eb09iamVjdHMgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuXG5jb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuXG5leHBvcnQgY29uc3Qgc2hvd0FsbFRhc2tzID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBjdXJyZW50UHJvamVjdCA9IFwidW5jbGFzc2lmaWVkXCIgLy93aWxsIGJlIHVzZWZ1bCBvbmNlIEkgaW1wbGVtZW50IG90aGVyIHByb2plY3RzXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza3MtY29udGFpbmVyXCIpO1xuICAgIHdoaWxlIChlbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH0gLy9jbGVhciB0aGUgdG9kb3MgYmVmb3JlIHJlcXVlc3RpbmcgZnVsbCBsaXN0XG5cbiAgICBmb3IgKGxldCB0b0RvIGluIG9iamVjdE9mVG9Eb09iamVjdHMpIHtcbiAgICAgICAgbGV0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tzLWNvbnRhaW5lclwiKS5hcHBlbmRDaGlsZCh0YXNrKTtcbiAgICAgICAgdGFzay5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcbiAgICAgICAgXG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRhc2suYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSBvYmplY3RPZlRvRG9PYmplY3RzW2ldLnRpdGxlO1xuXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRhc2suYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgICAgICBkZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBvYmplY3RPZlRvRG9PYmplY3RzW2ldLmRlc2NyaXB0aW9uO1xuXG4gICAgICAgIGxldCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGFzay5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgICAgICAgZHVlRGF0ZS5pbm5lckhUTUwgPSBvYmplY3RPZlRvRG9PYmplY3RzW2ldLmR1ZURhdGU7XG4gICAgICAgIFxuICAgICAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0YXNrLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgICAgICAgcHJpb3JpdHkuaW5uZXJIVE1MID0gb2JqZWN0T2ZUb0RvT2JqZWN0c1tpXS5wcmlvcml0eTtcblxuLy9DT05USU5VRSBBRERJTkcgVEhFIFJFU1QgT0YgVEhFIEVMRU1FTlRTLiBUSEVOIEZJTkQgQSBXQVkgVE8gTUFLRSBJVCBTSE9XIFdIRU4gWU9VIENMSUNLIE5FVy1UT0RPLiBUSElOSyBXSEVUSEVSIFlPVSBBQ1RVQUxMWSBXQU5UIEFMTCBUSElTXG4vL09OIFNBTUUgUEFHRSBPUiBOT1QuIERPIEkgV0FOVCBESUZGRVJFTlQgUEFHRSBGT1IgQUxMIFRBU0tTIFZTIFNFUEFSQVRFIFBST0pFQ1RTP1xuXG4vL3doZW4gY29uZmlybSBuZXcgdG9kbywgaWYgY29udGFpbmVyIGhhcyBhbnkga2lkcyBhbmQgc2FtZSBwcm9qZWN0LCBhZGQgdG9kbyB0byBkb20uIG1heWJlIHNldCBhIHZhcmlhYmxlIHRoYXQgY2hhbmdlcyBkZXBlbmRpbmcgaWYgbGFzdCBjbGlja2VkIHdhcyBhIHByb2plY3Qgb3IgdW5kZWZpbmVkXG4vL2FkZCBjb21wbGV0ZWQgcHJvamVjY3QuIHdoZW4gcHJlc3Mgb24gdGFzayBjb21wbGV0ZSwgaXQgZ29lcyB0aGVyZS4gd2hlbiBwcmVzcyBvbiBkZWxldGUsIGl0IGlzIGp1c3QgZGVsZXRlZD8gb3IgYWRkIGRlbGV0ZWQgcHJvamVjdFxuICAgICAgICBpKys7XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBwcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvciAocHJvamVjdE5hbWUpIHtcbiAgICAgICAgdGhpcy5fcHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZVxuICAgIH1cblxuICAgIGdldCBwcm9qZWN0TmFtZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvamVjdE5hbWVcbiAgICB9XG59IiwiaW1wb3J0IHsgcHJvamVjdExpc3QgfSBmcm9tIFwiLlwiO1xuaW1wb3J0IHsgcHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3QtY2xhc3NcIjtcbmltcG9ydCB7IGFkZFRhc2tzVG9Qcm9qZWN0IH0gZnJvbSBcIi4vZGlzcGxheS10YXNrcy1mcm9tLXByb2plY3RzXCI7XG5pbXBvcnQgeyBvYmplY3RPZlRvRG9PYmplY3RzIH0gZnJvbSBcIi5cIjtcbmxldCBwcm9qZWN0TmF2SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdFwiKVxuXG5cbmV4cG9ydCBsZXQgZGlzcGxheU5ld1Byb2plY3QgPSBmdW5jdGlvbihuZXdQcm9qZWN0KXtcbiAgICBsZXQgaSA9IDA7XG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHNcIik7XG4gICAgd2hpbGUgKHByb2plY3RDb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLnJlbW92ZUNoaWxkKHByb2plY3RDb250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIGNvbnN0IHByb2plY3RPcHRpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0XCIpO1xuICAgIHdoaWxlIChwcm9qZWN0T3B0aW9ucy5jaGlsZE5vZGVzLmxlbmd0aCA+IDEpe1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0T3B0aW9ucy5sYXN0Q2hpbGQudmFsdWUpXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RPcHRpb25zLmNoaWxkTm9kZXMubGVuZ3RoKVxuICAgICAgICBwcm9qZWN0T3B0aW9ucy5yZW1vdmVDaGlsZChwcm9qZWN0T3B0aW9ucy5sYXN0Q2hpbGQpXG4gICAgfVxuXG4gICAgbGV0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tzLWNvbnRhaW5lclwiKS5hcHBlbmRDaGlsZCh0YXNrKTtcbiAgICAgICAgdGFzay5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcblxuICAgIGZvciAobGV0IHByb2plY3QgaW4gcHJvamVjdExpc3QpIHtcbiAgICAgICAgbGV0IG5ld1Byb2plY3RUeXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0VHlwZSk7XG4gICAgICAgIG5ld1Byb2plY3RUeXBlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuICAgICAgICBuZXdQcm9qZWN0VHlwZS5pbm5lckhUTUwgPSBuZXdQcm9qZWN0W2ldLnByb2plY3ROYW1lO1xuXG4gICAgICAgIGxldCBuZXdQcm9qZWN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgcHJvamVjdE9wdGlvbnMuYXBwZW5kQ2hpbGQobmV3UHJvamVjdE9wdGlvbik7XG4gICAgICAgIG5ld1Byb2plY3RPcHRpb24uaW5uZXJIVE1MID0gbmV3UHJvamVjdFtpXS5wcm9qZWN0TmFtZTtcblxuICAgICAgICBpKys7XG4gICAgfVxuICAgIGFkZFRhc2tzVG9Qcm9qZWN0KClcbn0iLCJpbXBvcnQgeyB0b0RvIH0gZnJvbSBcIi4vdG9kby1jbGFzc1wiXG5pbXBvcnQgeyBBZGRUb09iamVjdCB9IGZyb20gXCIuL2FkZFRvRG9Ub09iamVjdFwiXG5pbXBvcnQgeyBzaG93QWxsVGFza3MgfSBmcm9tIFwiLi9hbGwtdGFza3NcIlxuaW1wb3J0IHsgcHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3QtY2xhc3NcIlxuaW1wb3J0IHsgZGlzcGxheU5ld1Byb2plY3QgfSBmcm9tIFwiLi9kaXNwbGF5LXByb2plY3RzXCJcblxuY29uc29sZS5sb2coXCIxMjM0NVwiKVxuZXhwb3J0IGxldCBvYmplY3RPZlRvRG9PYmplY3RzID0ge307XG5leHBvcnQgbGV0IHByb2plY3RMaXN0ID0gW107XG4vLyBsZXQgdG9Eb0xpc3QgPSBbXVxuY29uc3QgbmV3VG9EbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXRvZG9cIik7XG5jb25zdCBkaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpYWxvZ1wiKTtcbmNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FuY2VsLUJ0blwiKTtcbmNvbnN0IGNvbmZpcm1CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbmZpcm0tQnRuXCIpO1xuY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybVwiKTtcbmNvbnN0IGFsbFRhc2tzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGwtdGFza3NcIik7XG5jb25zdCBjcmVhdGVOZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGUtbmV3LXByb2plY3RcIik7XG5sZXQgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtZm9ybVwiKTtcblxubmV3VG9Eby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRpYWxvZy5zaG93TW9kYWwoKTtcbn0pXG5jYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBkaWFsb2cuY2xvc2UoXCJ0ZXN0IGNhbmNlbCBzdHJpbmcgd2hlcmUgZG8gaSBzZWUgdGhpc1wiKTtcbn0pXG5cbmNvbmZpcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZVRvRG8pXG5mdW5jdGlvbiBjcmVhdGVUb0RvKCkge1xuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIikudmFsdWU7XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlLWRhdGVcIikudmFsdWU7XG4gICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlvcml0eVwiKS52YWx1ZTtcbiAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdFwiKS52YWx1ZTtcbiAgICBsZXQgbmV3VG9EbyA9IG5ldyB0b0RvICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KTtcbiAgICBpZiAoZm9ybS5jaGVja1ZhbGlkaXR5KCkgPT09IHRydWUpeyAvL21heWJlIG1ha2UgZnVuY3Rpb24gdG8gY2hlY2sgdmFsaWRpdHksIGluY2x1ZGluZyBjaGVja2luZyB3aGV0aGVyIGEgdGFzayB3aXRoIHRoaXMgdGl0bGUgYWxyZWFkeSBleGlzdHM/XG4gICAgICAgIC8vIHRvRG9MaXN0LnB1c2gobmV3VG9Ebyk7IGRvIEkgTmVlZCBhIHRvZG9saXN0IGFycmF5PyBJIGFtIGFkZGluZyBuZXdUb0RvIG9iamVjdHMgdW5kZXIgb2JqZWN0T2ZUb0RvT2JqZWN0c1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0b0RvTGlzdCk7XG4gICAgICAgIEFkZFRvT2JqZWN0KG5ld1RvRG8sIG9iamVjdE9mVG9Eb09iamVjdHMpO1xuICAgICAgICBjb25zb2xlLmxvZyhvYmplY3RPZlRvRG9PYmplY3RzKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIikucmVzZXQoKTtcbiAgICAgICAgLy8gc2hvd0FsbFRhc2tzKCk7XG4gICAgICAgIGRpYWxvZy5jbG9zZSgpO1xuICAgICAgICBzZXRSZXF1aXJlZFRvRmFsc2UoKSAvL2lmIGZvcm0gaXMgdmFsaWQsIHNldHRpbmcgcmVxdWlyZWQgdG8gZmFsc2UgYWxsb3dzIG1lIHRvIGNsb3NlIHRoZSBkaWFsb2cgd2luZG93IGV2ZW4gdGhvdWdoIGl0IGlzIGVtcHR5IGFmdGVyIGNsZWFyaW5nIHRoZSBmb3JtXG4gICAgICAgIC8vIEFkZFRvTGlzdChuZXdUb0RvKVxuICAgIH1cbiAgICByZXR1cm4gbmV3VG9EbzsgICAgXG59XG5cbmZ1bmN0aW9uIHNldFJlcXVpcmVkVG9GYWxzZSgpe1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIikucmVxdWlyZWQgPSBmYWxzZTtcbn1cblxuLy8gbGF0ZXIgY2FuIGNyZWF0ZSBvdGhlciBzbWFsbGVyIGFycmF5cyBkZXBlbmRpbmcgb24gcHJvamVjdFxuLy8gaG93IHdpbGwgaSBzZWxlY3Qgd2hpY2ggcHJvamVjdCBpdCBiZWxvbmdzIHRvPyBkbyBJIE5lZWQgYW5vdGhlciBwYXJhbWV0ZXIgaW4gdG9Ebz8gZHJvcGRvd24gdG8gc2VsZWN0IHRoZSBwcm9qZWN0PyBjcmVhdGUgYSBnZW5lcmFsIHByb2plY3QsIG9yIGFsbG93IHRvZG9zIG5vdCB0byBoYXZlIHByb2o/XG5cbm5ld1RvRG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBkaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKS5yZXF1aXJlZCA9IHRydWU7XG59KVxuXG5hbGxUYXNrcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHNob3dBbGxUYXNrcygpO1xufSlcblxuY3JlYXRlTmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlTmV3UHJvamVjdClcbmZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QoZXZlbnQpe1xuICAgIGxldCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXByb2plY3RcIikudmFsdWU7XG4gICAgaWYgKHByb2plY3RGb3JtLmNoZWNrVmFsaWRpdHkoKSA9PT0gdHJ1ZSl7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCBuZXdQcm9qZWN0ID0gbmV3IHByb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgICBwcm9qZWN0TGlzdC5wdXNoKG5ld1Byb2plY3QpO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0TGlzdCk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1mb3JtXCIpLnJlc2V0KCk7XG4gICAgICAgIGRpc3BsYXlOZXdQcm9qZWN0KHByb2plY3RMaXN0KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBvYmplY3RPZlRvRG9PYmplY3RzIH0gZnJvbSBcIi5cIjtcbi8vIGxldCBwcm9qZWN0TmF2SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdFwiKVxuXG5leHBvcnQgbGV0IGFkZFRhc2tzVG9Qcm9qZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBwcm9qZWN0TmF2SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdFwiKVxuICAgIGxldCBjdXJyZW50UHJvamVjdDtcblxuICAgIHByb2plY3ROYXZJdGVtLmZvckVhY2gocHJvamVjdEl0ZW0gPT4ge1xuICAgIHByb2plY3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93VGFza3NGcm9tUHJvamVjdCk7XG4gICAgZnVuY3Rpb24gc2hvd1Rhc2tzRnJvbVByb2plY3QoYXNkKXtcbiAgICAgICAgLy8gY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza3MtY29udGFpbmVyXCIpOyAvL29yIG1heWJlIGdldCBpdCBmcm9tIGFsbC10YXNrcy5cbiAgICAgICAgLy8gd2hpbGUgKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICAvLyAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpO31cbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudFByb2plY3QpXG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza3MtY29udGFpbmVyXCIpOyAvL2NoZWNrIGlmIGVsZW1lbnQgbmFtZSBjbGFzaGVzXG4gICAgICAgIHdoaWxlIChlbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3RJdGVtLmlubmVyVGV4dCAvL2NoZWNrIGhlcmUgaXNzdWVzP1xuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdClcbiAgICAgICAgZm9yIChsZXQgb2JqZWN0IGluIG9iamVjdE9mVG9Eb09iamVjdHMpIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UHJvamVjdCA9PSBvYmplY3RPZlRvRG9PYmplY3RzW2ldLnByb2plY3QpIHsgLy9jaGVjayBpZiBjYW4gcHV0IGNvZGUgaW5zaWRlIGluIGEgZnVuY3Rpb24sIGFsc28gdXNlZCBpbiBhbGwtdGFza3MuanNcbiAgICAgICAgICAgICAgICBsZXQgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrcy1jb250YWluZXJcIikuYXBwZW5kQ2hpbGQodGFzayk7XG4gICAgICAgICAgICAgICAgdGFzay5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIHRhc2suYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICAgICAgICAgIHRpdGxlLmlubmVySFRNTCA9IG9iamVjdE9mVG9Eb09iamVjdHNbaV0udGl0bGU7XG5cbiAgICAgICAgICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIHRhc2suYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uLmlubmVySFRNTCA9IG9iamVjdE9mVG9Eb09iamVjdHNbaV0uZGVzY3JpcHRpb247XG5cbiAgICAgICAgICAgICAgICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgdGFzay5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgICAgICAgICAgICAgICBkdWVEYXRlLmlubmVySFRNTCA9IG9iamVjdE9mVG9Eb09iamVjdHNbaV0uZHVlRGF0ZTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIHRhc2suYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICAgICAgICAgICAgICAgIHByaW9yaXR5LmlubmVySFRNTCA9IG9iamVjdE9mVG9Eb09iamVjdHNbaV0ucHJpb3JpdHk7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSlcbn0iXSwibmFtZXMiOlsiX193ZWJwYWNrX3JlcXVpcmVfXyIsImV4cG9ydHMiLCJkZWZpbml0aW9uIiwia2V5IiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsIm9iaiIsInByb3AiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJ0b0RvIiwiY29uc3RydWN0b3IiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZHVlRGF0ZSIsInByaW9yaXR5IiwicHJvamVjdCIsInRoaXMiLCJfdGl0bGUiLCJfZGVzY3JpcHRpb24iLCJfZHVlRGF0ZSIsIl9wcmlvcml0eSIsIl9wcm9qZWN0IiwiaWQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicHJvamVjdE5hbWUiLCJfcHJvamVjdE5hbWUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29uc29sZSIsImxvZyIsIm9iamVjdE9mVG9Eb09iamVjdHMiLCJwcm9qZWN0TGlzdCIsIm5ld1RvRG8iLCJkaWFsb2ciLCJjYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uIiwiYWxsVGFza3MiLCJjcmVhdGVOZXdQcm9qZWN0QnV0dG9uIiwicHJvamVjdEZvcm0iLCJhZGRFdmVudExpc3RlbmVyIiwic2hvd01vZGFsIiwiY2xvc2UiLCJ2YWx1ZSIsImNoZWNrVmFsaWRpdHkiLCJvYmplY3QiLCJBZGRUb09iamVjdCIsInF1ZXJ5U2VsZWN0b3IiLCJyZXNldCIsInJlcXVpcmVkIiwiaSIsImVsZW1lbnQiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJ0YXNrIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJIVE1MIiwic2hvd0FsbFRhc2tzIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm5ld1Byb2plY3QiLCJwdXNoIiwicHJvamVjdENvbnRhaW5lciIsInByb2plY3RPcHRpb25zIiwiY2hpbGROb2RlcyIsImxlbmd0aCIsImxhc3RDaGlsZCIsIm5ld1Byb2plY3RUeXBlIiwibmV3UHJvamVjdE9wdGlvbiIsImN1cnJlbnRQcm9qZWN0IiwiZm9yRWFjaCIsInByb2plY3RJdGVtIiwiYXNkIiwiaW5uZXJUZXh0IiwiYWRkVGFza3NUb1Byb2plY3QiLCJkaXNwbGF5TmV3UHJvamVjdCJdLCJzb3VyY2VSb290IjoiIn0=