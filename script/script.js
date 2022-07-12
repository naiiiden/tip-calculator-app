let tip = 15;
let total_per_person = document.querySelector("#total_per_person");
let tip_per_person = document.querySelector("#tip_per_person");

document.querySelectorAll(".input_container").forEach(input => {
    input.addEventListener("input", () => {
        document.querySelector("#reset").disabled = (this.value === "");
        if (document.querySelector("#bill").value === "" && document.querySelector("#people").value === "") {
            total_per_person.textContent = "$0.00";
            tip_per_person.textContent = "$0.00";
        } else if (document.querySelector("#people").value === "" || document.querySelector("#bill").value === "") {
            document.querySelector("#people").classList.add("error_style");
            document.querySelector("#people").placeholder = "Can't be zero";
            document.querySelector("#bill").classList.add("error_style");
            document.querySelector("#bill").placeholder = "Can't be zero";
        } else if (document.querySelector("#bill").value !== "" && document.querySelector("#people").value === "")  {
            document.querySelector("#people").style.borderColor = "#ff525d";
        } else if (document.querySelector("#people").value === "") {
            document.querySelector("#people").style.borderColor = "#ff525d";
        } else {
            document.querySelector("#bill").style.borderColor = "transparent";
            document.querySelector("#bill").classList.remove("error_style");
            document.querySelector("#bill").placeholder = "0";
            document.querySelector("#people").style.borderColor = "transparent";
            document.querySelector("#people").classList.remove("error_style");
            document.querySelector("#people").placeholder = "0";
            total_per_person.textContent = `$${((parseFloat(bill.value) + ((parseFloat(bill.value) * tip / 100))) / people.value).toFixed(2)}`;
            tip_per_person.textContent = `$${(((parseFloat(bill.value) * tip) / 100) / people.value).toFixed(2)}`;
        }
    });
    input.addEventListener("keypress", e => {
        if (!/[0-9\./]+/.test(e.key)) { //PREVENTS FROM TYPING CHARACTERS WHICH ARE DIFFERENT THAN 0-9 AND .
            e.preventDefault();
        };
    });
});

document.querySelector("#bill").addEventListener("input", () => {
    if (document.querySelector("#people").value === "") {
        document.querySelector("#people").style.borderColor = "#ff525d";
    };
    if (document.querySelector("#bill").value === "") {
        document.querySelector("#bill").style.borderColor = "#ff525d";
    };
    if (document.querySelector("#bill").value === "" && document.querySelector("#people").value === "") {
        document.querySelector("#bill").style.borderColor = "#ff525d";
        document.querySelector("#people").style.borderColor = "#ff525d";
    };
});

document.querySelector("#people").addEventListener("input", () => {
    if (document.querySelector("#people").value === "") {
        document.querySelector("#people").style.borderColor = "#ff525d";
    };
    if (document.querySelector("#bill").value === "") {
        document.querySelector("#bill").style.borderColor = "#ff525d";
        document.querySelector("#bill").classList.add("error_style");
        document.querySelector("#bill").placeholder = "Can't be zero";
    };
    if (document.querySelector("#people").value !== "") {
        document.querySelector("#people").style.borderColor = "transparent";
    };
});

document.querySelector("#people").addEventListener("click", () => {
    if (document.querySelector("#people").value === "") {
        document.querySelector("#people").style.borderColor = "#ff525d";
    }
})

document.querySelector("#custom").addEventListener("click", () => {
    document.querySelector("#custom").style.borderColor = "#26c0ab";
    document.querySelectorAll(".tip").forEach(tipButton => {
        tipButton.checked = false;
    });
});

document.querySelectorAll(".tip").forEach(tipButton => {
    tipButton.addEventListener("click", () => {
        document.querySelector("#custom").style.borderColor = "transparent";
    });
});

document.querySelector("#custom").addEventListener("input", () => {
    if (document.querySelector("#bill").value === "" && document.querySelector("#people").value === "") {
        total_per_person.textContent = "$0.00";
        tip_per_person.textContent = "$0.00";
    } else {
        total_per_person.textContent = `$${((parseFloat(bill.value) + ((parseFloat(bill.value) * document.querySelector("#custom").value / 100))) / people.value).toFixed(2)}`;
        tip_per_person.textContent = `$${(((parseFloat(bill.value) * document.querySelector("#custom").value) / 100) / people.value).toFixed(2)}`;
    }
});

document.querySelector("#tip_5").addEventListener("click", () => {
    tip = 5;
    if (document.querySelector("#bill").value === "" && document.querySelector("#people").value === "") {
        total_per_person.textContent = "$0.00";
        tip_per_person.textContent = "$0.00";
    } else {
        total_per_person.textContent = `$${((parseFloat(bill.value) + ((parseFloat(bill.value) * tip / 100))) / people.value).toFixed(2)}`;
        tip_per_person.textContent = `$${(((parseFloat(bill.value) * tip) / 100) / people.value).toFixed(2)}`;
    }
});
document.querySelector("#tip_10").addEventListener("click", () => {
    tip = 10;
    if (document.querySelector("#bill").value === "" && document.querySelector("#people").value === "") {
        total_per_person.textContent = "$0.00";
        tip_per_person.textContent = "$0.00";
    } else {
        total_per_person.textContent = `$${((parseFloat(bill.value) + ((parseFloat(bill.value) * tip / 100))) / people.value).toFixed(2)}`;
        tip_per_person.textContent = `$${(((parseFloat(bill.value) * tip) / 100) / people.value).toFixed(2)}`;
    }
});
document.querySelector("#tip_15").addEventListener("click", () => {
    tip = 15;
    if (document.querySelector("#bill").value === "" && document.querySelector("#people").value === "") {
        total_per_person.textContent = "$0.00";
        tip_per_person.textContent = "$0.00";
    } else {
        total_per_person.textContent = `$${((parseFloat(bill.value) + ((parseFloat(bill.value) * tip / 100))) / people.value).toFixed(2)}`;
        tip_per_person.textContent = `$${(((parseFloat(bill.value) * tip) / 100) / people.value).toFixed(2)}`;
    }
});
document.querySelector("#tip_25").addEventListener("click", () => {
    tip = 25;
    if (document.querySelector("#bill").value === "" && document.querySelector("#people").value === "") {
        total_per_person.textContent = "$0.00";
        tip_per_person.textContent = "$0.00";
    } else {
        total_per_person.textContent = `$${((parseFloat(bill.value) + ((parseFloat(bill.value) * tip / 100))) / people.value).toFixed(2)}`;
        tip_per_person.textContent = `$${(((parseFloat(bill.value) * tip) / 100) / people.value).toFixed(2)}`;
    }
});
document.querySelector("#tip_50").addEventListener("click", () => {
    tip = 50;
    if (document.querySelector("#bill").value === "" && document.querySelector("#people").value === "") {
        total_per_person.textContent = "$0.00";
        tip_per_person.textContent = "$0.00";
    } else {
        total_per_person.textContent = `$${((parseFloat(bill.value) + ((parseFloat(bill.value) * tip / 100))) / people.value).toFixed(2)}`;
        tip_per_person.textContent = `$${(((parseFloat(bill.value) * tip) / 100) / people.value).toFixed(2)}`;
    }
});

document.querySelector("#reset").addEventListener("click", () => {
    tip = 15;
    document.querySelector("#tip_15").checked = true;
    total_per_person.textContent = "$0.00";
    tip_per_person.textContent = "$0.00";
    document.querySelector("#bill").placeholder = "0";
    document.querySelector("#bill").classList.remove("error_style");
    document.querySelector("#people").placeholder = "0";
    document.querySelector("#people").classList.remove("error_style");
    document.querySelector("#people").style.borderColor = "transparent";
    document.querySelector("#bill").style.borderColor = "transparent";
    document.querySelector("#custom").style.borderColor = "transparent";
    document.querySelectorAll(".input_container").forEach(input => {
        input.value = "";
    });
    document.querySelector("#reset").disabled = true;
});
