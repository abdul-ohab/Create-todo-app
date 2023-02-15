 const todoForm = document.querySelector("form");
 const todoInput = document.querySelector("input");
 const todoLists = document.querySelector("#lists");
 const massageElement = document.querySelector("#massage");

 const showMassage = (text, status) => {
   massageElement.textContent = text;
   massageElement.classList.add(`bg-${status}`);

   setTimeout(() => {
     massageElement.textContent = "";
     massageElement.classList.remove(`bg-${status}`);
   }, 1000);
 };