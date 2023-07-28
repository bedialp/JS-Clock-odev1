
let firstName = prompt("Adınız Nedir?");
let myName = document.querySelector("#myName");
myName.textContent = firstName;

function clock() {

    const date = new Date;

    let hours = date.getHours().toString().padStart(2, '0');
    let minute = date.getMinutes().toString().padStart(2, '0');
    let second = date.getSeconds().toString().padStart(2, '0');


    let day = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];
    let dayName = day[date.getDay()]

    let clock = document.querySelector("#myClock");
    clock.textContent = `${hours}:${minute}:${second} ${dayName}`;
}
clock();
setInterval(clock, 1000);