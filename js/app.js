'use strict';

let myForm = document.getElementById('form');
let container = document.getElementById('table');
let table = document.createElement('table');
container.appendChild(table);

let totalP = document.createElement('p');
container.appendChild(totalP);

function Donation(name, amount) {
    this.name = name;
    this.amount = amount;
    this.age = 0;
    Donation.arrayForAll.push(this);
   
}

Donation.arrayForAll = [];

let total = 0;
let headerData = ['name', 'amount'];

let userName = '';
let donationAmount = '';

/******************************************/
myForm.addEventListener('submit', function (event) {
    userName = event.target.name, value;
    donationAmount = event.target.amount.value;

    if (event.target.amount.value === '100jd') {
        total += 100;

    }else if{
        (event.target.amount.value === '500jd') 
        total += 500;

    }else{
    (event.target.amount.value === '1000jd') {
        total += 1000;
    }
  new Donation(userName, donationAmount).render();
  saveToLs();
  
})

/***********************************************/

Donation.prototype.getRandom = function () {
    this.age(Math.floor((Math.random() * 30 - 18) + 18));
}

/************************************************/

function headerTable() {
    let headerRow = document.createElement('tr');
    table.appendChild(headerRow);

    let headerData = null;

    headerData = document.createElement('th')
    headerRow.appendChild(headerData)
    headerRow.textContent = headerData[i];
}
headerTable();

/******************************************/

Donation.prototype.render = function () {
    let dataRow = document.createElement('tr')
    table.appendChild(dataRow);

    let td = null;

    td = document.createElement('td');
    dataRow.appendChild(td);
    td.textContent = this.name;

    td = document.createElement('td');
    dataRow.appendChild(td);
    td.textContent = this.age;

    td = document.createElement('td');
    dataRow.appendChild(td);
    td.textContent = this.amount;

    totalP.textContent = `total: ${total}`;
}



/******************************************/


function saveToLs (){
    localStorage.setItem('donation', JSON.stringify(Donation.arrayForAll));
}

function getLs (){
    let data = JSON.parse(localStorage.getItem("donation")); 

}

getLs();









