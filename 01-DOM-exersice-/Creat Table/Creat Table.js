// get the Element
let rowsInput = document.getElementById('rows');
let colsInput = document.getElementById('cols');
let btn = document.querySelector('button');
// Event
btn.addEventListener('click', createTable);

function createTable() {
    let body = document.body;
    let table = document.createElement("table");

    for(let i = 0 ; i < +rowsInput.value; i++) {
        let tr = document.createElement("tr");
        table.appendChild(tr);

        for(let j = 0 ; j < +colsInput.value; j++) {
            let td = document.createElement("td");
            let txt = document.createTextNode(" item text ");
            td.appendChild(txt);
            tr.appendChild(td);

    }
    body.appendChild(table);
}
}
