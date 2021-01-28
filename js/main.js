let name = document.getElementById("nameForm");
let surname = document.getElementById("surnameForm");
let phone = document.getElementById("phoneForm");

let button = document.querySelector('button');

let paragraph1 = document.getElementById("name");
let paragraph2 = document.getElementById("surname");
let paragraph3 = document.getElementById("phone");

function putIntoParagraph(input1, input2, input3){
    paragraph1.textContent = input1.value;
    paragraph2.textContent = input2.value;
    paragraph3.textContent = input3.value;

    console.log(input1.value);
    console.log(input2.value);
    console.log(input3.value);
}

button.onclick = function() {
    putIntoParagraph(name, surname, phone);
}