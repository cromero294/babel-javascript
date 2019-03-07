const URL = "https://ejemplo-d49a3.firebaseio.com/ingresos-gastos.json";
let table = document.getElementById('tbl');

function getTable() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', URL);
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === 4) {
            datos = JSON.parse(xhr.responseText);
            Object.values(datos).forEach(objeto => {
                let color = (objeto['qty'] > 0) ? "lightgreen" : "red";
                table.innerHTML += `<tr><td>${objeto['concept']}</td><td style='background-color: ${color};'>${objeto['qty']}</td></tr>`;
            });
        }
    });
    xhr.send();
}

getTable();

let button = document.querySelector('button');

button.addEventListener('click', postValue);

function postValue() {
    let form = document.forms['formulario'];
    concept_value = form['concept'].value;
    qty_value = form['qty'].value;

    // return fetch(URL);
    return fetch(URL, {
                        method: 'POST',
                        body: JSON.stringify({concept: concept_value, qty: qty_value})
                      })
            .then(resp => console.log(resp));
}

postValue()
    .then(getTable());
    // .then(resp => {
    //     console.log(resp);
    //     return resp.json();
    // })
    // .then(datos => {
    //     Object.values(datos).forEach(objeto => {
    //         let color = (objeto['qty'] > 0) ? "lightgreen" : "red";
    //         table.innerHTML += `<tr><td>${objeto['concept']}</td><td style='background-color: ${color};'>${objeto['qty']}</td></tr>`;
    //     });
    // });
