
let items = [];
let render = document.getElementById("itemList");

function addItem() {
    let inputText = document.getElementById("inputText").value;
    let lis = document.createElement("li");
      lis.innerHTML = `<span class="py-4">hii</span>  <span class="ml-96 bg-yellow-300 w-32 h-12 p-2 rounded-full">delete</span>`;
    render.appendChild(lis);
    document.getElementById("inputText").value = "";
  }

  function deleteItem() {
    let lis = event.target.parentElement;
    lis.style.textDecoration = "line-through";
    lis.addEventListener("click", deleteItem);
    console.log(event.target);
  }
  
  
 
  







  