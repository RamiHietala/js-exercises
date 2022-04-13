// tyhjentää input fieldin ku on painanu submit
// Ei lisää listaan tyhjää arvoa
// painike jolla pystyy poistamaan taskin listasta lisätty

//KESKEN
//Reset button ei toimi

const submit = document.getElementById('submit');
const todoList = document.getElementById('todoList');
const task = document.getElementById('addTask');
const reset = document.getElementById('reset');

submit.onclick = () => {
    if (task.value.length > 0) {
        let li = document.createElement('li');
        li.className = 'todoTask';
        li.appendChild(document.createTextNode(task.value));

        let deleteBtn = document.createElement('button');

        deleteBtn.className = 'delete-btn';
        deleteBtn.appendChild(document.createTextNode('Delete'));

        li.appendChild(deleteBtn);
        
        todoList.appendChild(li);

        task.value = '';
    }
}
// Delete button
todoList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        if (confirm('Are you sure?')) {
            let li = e.target.parentElement;
            li.remove();
        }

    }
});
// reset list button
reset.addEventListener('click', (e) => {
    todoList.parentNode.removeChild(document.getElementById('todoTask'));
})