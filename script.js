function clearText() {
    document.getElementsByClassName("note-text")[0].value = '';
}

function deleteAll() {
    document.getElementsByClassName("note-saves-div")[0].textContent = '';
}

function addNote() {
    let text = document.getElementsByClassName("note-text")[0].value;
    if (text == '') {
        alert('Enter Some Text');
    } else {
        let p_div = document.createElement('div');
        p_div.classList.add("note-paragraph-div");
        let p = document.createElement('p');
        p.classList.add("note-saved");
        p.textContent = text;
        let delete_div = document.createElement('div');
        delete_div.classList.add("delete-note-div");
        let delete_button = document.createElement('button');
        delete_button.classList.add("delete-note-button");
        delete_button.onclick = function () {
            deleteNote(this);
        }
        delete_button.textContent = 'X';
        delete_div.appendChild(delete_button);
        p_div.appendChild(p);
        p_div.appendChild(delete_div);
        document.getElementsByClassName("note-saves-div")[0].appendChild(p_div);

        clearText();
    }

}

function deleteNote(button) {
    button.parentNode.parentNode.remove();
}