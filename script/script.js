let tip = 15;
// let bill = parseFloat(document.querySelector("#bill").value);
let bill = document.querySelector("#bill");
// let people = parseInt(document.querySelector("#people").value);
let people = document.querySelector("#people");
let total_per_person = document.querySelector("#total_per_person");
let tip_per_person = document.querySelector("#tip_per_person");


document.querySelector("#tip_5").addEventListener("click", () => {
    tip = 5;
});
document.querySelector("#tip_10").addEventListener("click", () => {
    tip = 10;
});
document.querySelector("#tip_15").addEventListener("click", () => {
    tip = 15;
});
document.querySelector("#tip_25").addEventListener("click", () => {
    tip = 25;
});
document.querySelector("#tip_50").addEventListener("click", () => {
    tip = 50;
});

bill.addEventListener("input", () => {
    total_per_person.textContent = ((parseFloat(bill.value) + ((parseFloat(bill.value) * tip / 100))) / people.value).toFixed(2);
    tip_per_person.textContent = (((parseFloat(bill.value) * tip) / 100) / people.value).toFixed(2);
});
people.addEventListener("input", () => {
    total_per_person.textContent = ((parseFloat(bill.value) + ((parseFloat(bill.value) * tip / 100))) / people.value).toFixed(2);
    tip_per_person.textContent = (((parseFloat(bill.value) * tip) / 100) / people.value).toFixed(2);
});

