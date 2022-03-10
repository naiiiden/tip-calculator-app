let tip = 15;
let bill = parseFloat(document.querySelector("#bill").value);
let total_per_person = document.querySelector("#total_per_person");
let tip_per_person = document.querySelector("#tip_per_person");
let people = parseInt(document.querySelector("#people").value);

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

console.log((((bill * tip) / 100) / people).toFixed(2));

tip_per_person.textContent = (((bill * tip) / 100) / people).toFixed(2);
total_per_person.textContent = ((bill + (bill * tip / 100)) / people).toFixed(2);

// total_per_person.textContent = (parseFloat(bill + tip) / people).toFixed(2);
// tip_per_person.textContent = ((total_per_person.textContent) / people).toFixed(2);

