/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */

const form = document.querySelector('form');
const result = document.getElementById('output');
form.addEventListener('submit', weightValue)

function weightValue(event, lb, g, oz) {
    event.preventDefault();
    const weight = Number(document.getElementById('search').value);
    let lbc = (weight * 2.2046).toFixed(2);
    let gc = (weight / 0.0010000).toFixed(2);
    let ozc = (weight * 35.274).toFixed(2);
    const res = `Svarai <b><span>${lbc}</span></b><br></br>
    Gramai <b><span>${gc}</span></b><br></br>
    Uncijos <b><span>${ozc}</span></b>`
    result.innerHTML = res; 
}

