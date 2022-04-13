// Lisää delete nappi
// Tyylittele vielä
// https://youtu.be/roumzWd4XJU?t=340 ton näkönen pitäs olla


const ename = document.getElementById('ename');
const edate = document.getElementById('edate');
const eamount = document.getElementById('eamount');
const esubmit = document.getElementById('esubmit');
const etable = document.getElementById('expensesTable');
const tbody = document.getElementById('tbody');


esubmit.onclick = () => {
    let tr = document.createElement('tr');
    let tdname = document.createElement('td');
    let tddate = document.createElement('td');
    let tdamount = document.createElement('td');
    let tddelete = document.createElement('td');
    let deleteBtn = document.createElement('button');

    deleteBtn.className = 'delete-btn';

    tbody.appendChild(tr);
    tr.appendChild(tdname);
    tr.appendChild(tddate);
    tr.appendChild(tdamount);

    tr.appendChild(tddelete);
    tddelete.appendChild(deleteBtn);

    tdname.appendChild(document.createTextNode(ename.value));
    tddate.appendChild(document.createTextNode(edate.value));
    tdamount.appendChild(document.createTextNode(eamount.value + '€'));
    deleteBtn.appendChild(document.createTextNode('X'));

}



    tbody.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            let deleteBtn = e.target.parentElement.parentElement;
            deleteBtn.remove();
        }
    });

