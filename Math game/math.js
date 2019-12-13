//Global variables
var calculate;
var counter = 0;//Before game starts counter is set to zero
var operators = '+-*/';
//function for generating numbers
function twoNumbers() {
    var time = new Date();
    var tMilliseconds = time.getMilliseconds();
    var random = Math.ceil(Math.random() * 100) + 100;
    calculate = random + tMilliseconds;
    counter += 1;
    var randomOperators = operators.charAt(Math.floor(Math.random() * operators.length));
    document.querySelector('#fNumber').innerHTML = tMilliseconds;
    document.querySelector('#sNumber').innerHTML = random;
    document.querySelector('#alert').innerHTML = " ";
    document.querySelector('#answer').value = " ";
    document.querySelector('#submit').style.display = "inline";
    document.querySelector('#operators').innerHTML = randomOperators;
}
//function for submit button
function answer() {
    document.querySelector('#submit').style.display = "none";
    var a = parseInt(document.querySelector('#fNumber').textContent);
    var b = parseInt(document.querySelector('#sNumber').textContent);
    var answerField = document.querySelector('#answer').value;
    var total;
    //document.querySelector('#operators').innerHTML
    if (counter == 0) {
        document.querySelector('#alert').innerHTML = "You have not started the game! <br> PRESS PLAY";
    }
    //Math evaluation for multiplication
    if (document.querySelector('#operators').innerHTML == '*') {
        total = a * b;
        if (answerField == total) {
            document.querySelector('#alert').innerHTML = "Congratulations, you got it right";
        }
        else if (answerField !== total) {
            document.querySelector('#alert').innerHTML = "Sorry try again, the correct answer is " + total;
        }
    }
    //Math evaluation for division

    if (document.querySelector('#operators').innerHTML == '/') {
        total = a / b;
        if (answerField == total) {
            document.querySelector('#alert').innerHTML = "Congratulations, you got it right";
        }
        else if (answerField !== total) {
            document.querySelector('#alert').innerHTML = "Sorry try again, the correct answer is " + total;
        }
    }
    //Math evaluation for addition

    if (document.querySelector('#operators').innerHTML == '+') {
        total = a + b;
        if (answerField == total) {
            document.querySelector('#alert').innerHTML = "Congratulations, you got it right";
        }
        else if (answerField !== total) {
            document.querySelector('#alert').innerHTML = "Sorry try again, the correct answer is " + total;
        }
    }
    if (document.querySelector('#operators').innerHTML == '-') {
        total = a - b;
        if (answerField == total) {
            document.querySelector('#alert').innerHTML = "Congratulations, you got it right";
        }
        else if (answerField !== total) {
            document.querySelector('#alert').innerHTML = "Sorry try again, the correct answer is " + total;
        }
    }

}