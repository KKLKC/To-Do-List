let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
let prioritySelect = document.getElementById('prioritySelect');

addToDoButton.addEventListener('click', function(){
    let paragraph = document.createElement('p');
    paragraph.innerText = `${inputField.value} (${prioritySelect.value})`;
    toDoContainer.appendChild(paragraph);
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through';
    });
    paragraph.addEventListener('click', function(){
        toDoContainer.removeChild(paragraph);
    });
});