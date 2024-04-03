let btn=document.querySelector("button");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");

btn.addEventListener("click" , function(){
    let item=document.createElement("li");
    item.innerText=inp.value;
    ul.appendChild(item);

    let delBtn=document.createElement("button");
    delBtn.innerText="Delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    console.log(inp.value);
    inp.value="";
})


ul.addEventListener("click" , function(event){
    if(event.target.nodeName=="BUTTON"){
        let listitem=event.target.parentElement;
        listitem.remove();
    }
})

