
function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("side").style.marginLeft = "250px";
  }
  
function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("side").style.marginLeft = "0";
  }

function darkMode() {
    let header = document.querySelector("header");
    let newNote = document.querySelector("#new");
    let save = document.querySelector("#save");
    let side = document.querySelector(".side");
    let main = document.querySelector(".main");
    let remove = document.querySelector("#remove");
    let dark = document.querySelector("#dark");
    let footer = document.querySelector("footer");
    if (dark.innerHTML == "Dark Mode") {
        dark.innerHTML = "Light Mode";
        header.style.backgroundColor = "#393552";
        newNote.style.backgroundColor = "#6e6a86";
        save.style.backgroundColor = "#232136";
        side.style.backgroundColor = "#393552";
        main.style.backgroundColor = "#59546d";
        remove.style.backgroundColor = "#2a273f";
        footer.style.backgroundColor = "#232136";
    }
    else {
        dark.innerHTML = "Dark Mode";
        header.style.backgroundColor = "#9893a5";
        newNote.style.backgroundColor = "#c4a7e7";
        save.style.backgroundColor = "#575279";
        side.style.backgroundColor = "#9893a5";
        main.style.backgroundColor = "#f2e9de";
        remove.style.backgroundColor = "#6e6a86";
        footer.style.backgroundColor = "#575279";
    }
}

let notesArray = [
    {noteTitle: note_one, text: "Lorem Ipsum"},
    {noteTitle: note_two, text: "Lorem Ipsum"},
  ];

function remove() {
    let notes = document.querySelector("#text-area");
    let noteButtons = document.querySelector(".notebuttons");
    if (noteButtons.style.display == "show" || noteButtons.style.display == "") {
        noteButtons.style.display = "none";
        notes.style.display = "none";
    }
}

function newNote() {
    let notes = document.querySelector("#text-area");
    let noteButtons = document.querySelector(".notebuttons");
    let noteArea = document.querySelector(".note-area");
    if (noteButtons.style.display == "none"){
        noteButtons.style.display = "flex";
        notes.style.display = "flex";
    }
    else{
        noteArea.value = "";
    }
}

function save(notesArray) {
    listLength = notes.value.split("\n").length;
    noteTitle = notes.value.split("\n")[0];
    text= noteArea.value.split("\n").splice(1,listLength);
    newList = {noteTitle: `${noteTitle}`, text: `${text}`};
    notesArray.push(newListt);
    ul.insertAdjacentHTML('beforeend', `<li> ${noteTitle}</li>`)
}

ul.addEventListener ('click', (e) => {
    const targetNote = notesArray.find(n => n["id"] == e.target.innerText)
    notearea.value = targetNote["noteTitle"];
})

