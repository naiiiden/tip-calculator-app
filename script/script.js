let tip = 15;
let total_per_person = document.querySelector("#total_per_person");
let tip_per_person = document.querySelector("#tip_per_person");

document.querySelectorAll(".input_container").forEach(input => {
    input.addEventListener("input", () => {
        total_per_person.textContent = ((parseFloat(bill.value) + ((parseFloat(bill.value) * tip / 100))) / people.value).toFixed(2);
        tip_per_person.textContent = (((parseFloat(bill.value) * tip) / 100) / people.value).toFixed(2);
    });
});

document.querySelector("#custom").addEventListener("input", () => {
    total_per_person.textContent = ((parseFloat(bill.value) + ((parseFloat(bill.value) * document.querySelector("#custom").value / 100))) / people.value).toFixed(2);
    tip_per_person.textContent = (((parseFloat(bill.value) * document.querySelector("#custom").value) / 100) / people.value).toFixed(2);
});

document.querySelector("#tip_5").addEventListener("click", () => {
    tip = 5;
    total_per_person.textContent = ((parseFloat(bill.value) + ((parseFloat(bill.value) * tip / 100))) / people.value).toFixed(2);
    tip_per_person.textContent = (((parseFloat(bill.value) * tip) / 100) / people.value).toFixed(2);
});
document.querySelector("#tip_10").addEventListener("click", () => {
    tip = 10;
    total_per_person.textContent = ((parseFloat(bill.value) + ((parseFloat(bill.value) * tip / 100))) / people.value).toFixed(2);
    tip_per_person.textContent = (((parseFloat(bill.value) * tip) / 100) / people.value).toFixed(2);
});
document.querySelector("#tip_15").addEventListener("click", () => {
    tip = 15;
    total_per_person.textContent = ((parseFloat(bill.value) + ((parseFloat(bill.value) * tip / 100))) / people.value).toFixed(2);
    tip_per_person.textContent = (((parseFloat(bill.value) * tip) / 100) / people.value).toFixed(2);
});
document.querySelector("#tip_25").addEventListener("click", () => {
    tip = 25;
    total_per_person.textContent = ((parseFloat(bill.value) + ((parseFloat(bill.value) * tip / 100))) / people.value).toFixed(2);
    tip_per_person.textContent = (((parseFloat(bill.value) * tip) / 100) / people.value).toFixed(2);
});
document.querySelector("#tip_50").addEventListener("click", () => {
    tip = 50;
    total_per_person.textContent = ((parseFloat(bill.value) + ((parseFloat(bill.value) * tip / 100))) / people.value).toFixed(2);
    tip_per_person.textContent = (((parseFloat(bill.value) * tip) / 100) / people.value).toFixed(2);
});

document.querySelector("#reset").addEventListener("click", () => {
    total_per_person.textContent = "$0.00";
    tip_per_person.textContent = "$0.00";
    document.querySelectorAll(".input_container").forEach(input => {
        input.value = "";
    });
});