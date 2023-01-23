const nome = document.getElementById("nome");
const cognome = document.getElementById("cognome");
const data = document.getElementById("data");
const invia = document.getElementById("invia");

const Person = function (nome, cognome, data) {
  this.nome = nome;
  this.cognome = cognome;
  this.data = data;
};

invia.addEventListener("click", () => {
  if (nome.value === "" || cognome.value === "" || data.value === "") {
    alert("devi scrivere qualcosa");
  } else {
    let person = new Person(nome.value, cognome.value, data.value);
    let tbl = document.getElementById("tabella");
    let hrow = document.createElement("tr");
    let row2 = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    td1.innerHTML = person.nome;
    td2.innerHTML = person.cognome;
    td3.innerHTML = person.data;
    row2.appendChild(td1);
    row2.appendChild(td2);
    row2.appendChild(td3);
    tbl.appendChild(hrow);
    tbl.appendChild(row2);
    document.body.appendChild(tbl);
  }
});
