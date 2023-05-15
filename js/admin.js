const addBtn = document.querySelector("#addBtn");
const nameInputs = document.querySelectorAll(".input");
const form = document.querySelector(".form");
let tbody = document.querySelector(".tbody");
const dateInput = document.querySelector("#date");
nameInputs.forEach((input) => {
    let valuePlaceHolder;
    input.addEventListener("focus", () => {
        valuePlaceHolder = input.placeholder;
        input.removeAttribute("placeholder");
        input.previousElementSibling.classList.toggle("visually-hidden");
    });
    input.addEventListener("blur", () => {
        input.setAttribute("placeholder", valuePlaceHolder);
        input.previousElementSibling.classList.add("visually-hidden");
    });
});

const sortNewUser = () => {
    let day, month, year;
    let now = new Date();
    day = now.getDate() < 10 ? "0" + now.getDate() : now.getDay();
    month =
        now.getMonth() < 10 ? "0" + (now.getMonth() + 1) : now.getMonth() + 1;
    year = now.getFullYear();

    let firstName, lastName, mobile_number, livingPlace, birthDate;
    [userName, userSurname, phoneNumber, adress] = nameInputs;

    firstName = userName.value;
    lastName = userSurname.value;
    mobile_number = phoneNumber.value;
    livingPlace = adress.value;
    birthDate = dateInput.value;

    const inputs = document.querySelectorAll("input");
    inputs.forEach((item) => {
        item.value = "";
    });
    addNewUser(
        firstName,
        lastName,
        mobile_number,
        livingPlace,
        birthDate,
        day,
        month,
        year
    );
};

let count = 1;
const addNewUser = (
    user_name,
    user_surname,
    user_phoneNumber,
    user_adress,
    user_birthDate,
    ...add_time
) => {
    let time = add_time.split("-").reverse().join("/");
    count += 1;
    let tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${count}</td>
    <td>${user_name}</td>
    <td>${user_surname}</td>
    <td>${user_phoneNumber}</td>
    <td>${user_adress}</td>
     <td>${user_birthDate}</td>
     <td>${time}</td>
`;
    tbody.appendChild(tr);
};

addBtn.addEventListener("click", () => {
    sortNewUser();
});
