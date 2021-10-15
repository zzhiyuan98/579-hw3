/*
* Excercise 1
*
*/

let box = document.getElementById('color-block');
box.addEventListener('click', changeColor);

/*
* Then write a function that changes the text and the color inside the div
*
*/

function changeColor(){
    //Write a condition determine what color it should be changed to
    if(!box.classList.contains('purple')){
        //change the background color using JS
        box.classList.add('purple');
        //Change the text of the color using the span id color-name
        document.getElementById('color-name').textContent = '#F4EEFF';
    }
    else{
        //change the background color using JS
        box.classList.remove('purple');
        //Change the text of the color using the span id color-name
        document.getElementById('color-name').textContent = '#F08080';
    }
}


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/

convert_button = document.getElementById('convertbtn');
convert_button.addEventListener('click', convertTemp);

/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(){
    //Calculate the temperature here
    temperature_F = parseFloat(document.getElementById('f-input').value);
    temperature_C = (temperature_F - 32) * 5 / 9;

    //Send the calculated temperature to HTML
    if(!isNaN(temperature_C)) document.getElementById('c-output').textContent = temperature_C;
}
