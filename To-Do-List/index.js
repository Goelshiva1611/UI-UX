const inputbox = document.getElementById('input-box')
const listcontainer = document.getElementById('list-container')

const addhello=document.getElementById('row')

function addtask() {
    if (inputbox.value === '') {
        alert('You must write something')
    }
    else {
        let li = document.createElement("li")
        listcontainer.appendChild(li);

        let p=document.createElement("p")
        p.innerHTML=inputbox.value;
        li.appendChild(p)
       
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
    savedata();
}

listcontainer.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedata()
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata()
    }
}, false)

function savedata() {
    localStorage.setItem("data", listcontainer.innerHTML);
}
function showsavedtask() {
    listcontainer.innerHTML = localStorage.getItem("data");
}
showsavedtask();