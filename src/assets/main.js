let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
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