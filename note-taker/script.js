const html = document.get
const textArea = document.getElementById('addNote');
const addNoteBtn = document.getElementById('addNoteBtn');
const noNotesPH = document.getElementById('noNotesPH');
const noteContainer = document.getElementById('noteContainer');
const container = document.getElementById('container');

addNoteBtn.onclick = () => {
    if (textArea.value.length > 0) {
    noNotesPH.remove();

    let div = document.createElement('div')
    let p = document.createElement('p');
    let viewBtn = document.createElement('button');

    div.className = 'noteDiv';
    p.className = 'noteText';
    viewBtn.className ='viewBtn';

    noteContainer.appendChild(div);
    div.append(p,viewBtn);


    p.appendChild(document.createTextNode(textArea.value));
    viewBtn.appendChild(document.createTextNode('View details'));


    textArea.value = "";
    textArea.focus();
}
}

noteContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('viewBtn')) {
        let modalOverlay = document.createElement('div');
        let modalContainer = document.createElement('div');
        let p = document.createElement('p');
        let closeBtn = document.createElement('button');

        closeBtn.classList = 'closeBtn'; 
        modalOverlay.classList = 'modal-overlay';
        modalContainer.classList = 'modal-container';

        container.appendChild(modalOverlay);
        modalOverlay.appendChild(modalContainer);
        modalContainer.append(p,closeBtn);

        const currentNoteDiv = e.target.closest('.noteDiv');
        const currentNoteText = currentNoteDiv.querySelector('.noteText').textContent;

        p.appendChild(document.createTextNode(currentNoteText));

        closeBtn.appendChild(document.createTextNode('Close'));

    }
    
});

container.addEventListener('click', (e) => {
    if (e.target.classList.contains('closeBtn')) {
        const delet = document.querySelector('.modal-overlay');
        delet.remove();
    }
});