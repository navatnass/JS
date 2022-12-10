/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

import cars from './cars.json' assert { type: 'json' };
// console.log(cars)

const ENDPOINT = 'cars.json';
const result = document.getElementById('output');

  cars.forEach(element => {
    result.innerHTML += `
    <div class="carBlock">
    <div class="carBrand">${element.brand}</div>
    <div class="carModel">${element.models}</div>
    </div>
    `
  })
