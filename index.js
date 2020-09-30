const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

let data=[];
getRandomUser();
getRandomUser();
getRandomUser();
getRandomUser();
//fetch random user and add money
async function getRandomUser() {
     const res=await fetch('https://randomuser.me/api');
     const data= await res.json();
     // console.log(data);
    const user=data.results[0];
    // console.log(user);
    const newUser={
        name:`${user.name.first} ${user.name.last}`,
        money:Math.floor(Math.random()*1000000)
    }
    // console.log(newUser);
    addData(newUser);
    
}
//Add new obj to data arr
function addData(obj) {
    data.push(obj);

    updateDom()
    
}
//Update DOM
function updateDom(providedData=data) {
    //Clear main div
    main.innerHTML=` <h2><strong>Person</strong> Wealth</h2>`
    providedData.forEach(item=>{
        const element=document.createElement('div');
        element.classList.add('person');
        element.innerHTML=`<strong>${item.name}</strong>${formatMoney(item.money)}`;
        main.appendChild(element)
    })
    
}
//Format number as money
function formatMoney(number) {
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    
}
//Event listeners
addUserBtn.addEventListener('click',getRandomUser)
