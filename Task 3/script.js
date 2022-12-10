/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
const result = document.getElementById('output');
const btn = document.getElementById('btn');

btn.addEventListener('click', getData);
btn.addEventListener('click', () => {
    const msg = document.getElementById('message')
    msg.textContent = ' ';
})

function newTable(users) {
    const table = document.createElement('table');
    users.forEach(element => {
        table.innerHTML += `<tr><td><img src=${element.avatar_url}<tr><tr><td>${element.login}</td></tr></tr>`
    })
    result.append(table)
}

async function fetchData() {
  try {
    const response = await fetch('https://api.github.com/users');
    if (response.ok) {
      const data = await response.json();
    //   console.log(data);
      return data
    }
  } catch (error) {
    console.error(error);
  }
}

function getData() {
   fetchData().then(data => newTable(data))
};


