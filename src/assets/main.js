let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if (answer.value == '' || attempt.value == '') {
        setHiddenFields();
    }
    if (!validateInput(input.value)) {
        return false;
    } else {
        attempt.value += 1;
    }

    if (getResults(input.value)) {
        setMessage("You Win! :)");
    } else if (attempt.value >= 10) {
        setMessage("You Lose! :(");
    } else {
        setMessage("Incorrect, try again.");
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
    attempt.value = 0;
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

function getResults(input) {
    let count = 0;
    let htmltag = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';
    for (i = 0; i < input.length; i++) {
        if (input.charAt(i) == answer.value.charAt(i)) {
            htmltag += '<span class="glyphicon glyphicon-ok"></span>';
            count++;
        } else if (answer.value.indexOf(input.charAt(i)) > -1) {
            htmltag += '<span class="glyphicon glyphicon-transfer"></span>';
        } else {
            htmltag += '<span class="glyphicon glyphicon-remove"></span>';
        }
    }
    htmltag += '</div></div>';
    document.getElementById('results').innerHTML += htmltag;
    if (count == 4) {
        return true;
    }
    return false;
}

function showAnswer(tof) {
    let code = document.getElementById("code");
    if (tof) {
        code.className += ' success';
    } else {
        code.className += ' failure';
    }
    code.innerHTML = answer.value;
}

function showReplay() {
    document.getElementById("guessing-div").style.display = "none";
    document.getElementById("replay-div").style.display = "display";
}