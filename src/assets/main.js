let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if (!validateInput(input.value)) {
        return false;
    } else {
        attempt++;
    }
}
//implement new functions here

function setHiddenFields() {
    answer.value = (Math.floor(Math.random() * 10000)).toString();
    let k = answer.value.length;
    while (k < 4) {
        answer.value = "0" + answer.value;
        k++;
    }
    attempt = 0;
}

function setMessage(msg) {
    document.getElementById("message").innerHTML = msg;
}

function validateInput(l) {
    if (l.length === 4) {
        return true;
    } else {
        setMessage("Guesses must be exactly 4 characters long.");
        return false;
    }
}