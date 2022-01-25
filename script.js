var result = document.querySelector("#result");
var parameters = new URLSearchParams(window.location.search);

var inputName = parameters.get('name');
var inputEmail = parameters.get('email');
var inputTime = parameters.get('time');
var inputPersons = parameters.get('persons');
var inputFamily = parameters.get('family');
var inputLocation = parameters.get('location');
var inputDiets = parameters.get('diets');

result.innerHTML = 'Welcome ' + inputName + '! The ' + inputLocation + ' is confirmed for you.';


//change background color green if all the persons come from the same family otherwise red
if (inputFamily == 'on') {
 document.body.style.backgroundColor = 'green';
} else {
 document.body.style.backgroundColor = 'red';
}
