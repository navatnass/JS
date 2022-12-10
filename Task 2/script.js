/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */


const btn = document.getElementById('btn__element');
const plusOne = document.getElementById('btn__state');
const result = document.getElementById('btn');
let i = 0;

btn.addEventListener('click', () => {
    i++;
    plusOne.innerHTML = i;
    // console.log(plusOne)
})