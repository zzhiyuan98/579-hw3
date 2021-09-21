/*
* Excercise 1
*
*/

let count = 0;
let box = document.getElementById('color-block');
box.addEventListener('click', changeColor());

/*
* Then write a function that changes the text and the color inside the div
*
*/

function changeColor(){
    count++;
    console.log(count);
    //Write a condition determine what color it should be changed to
    if(count == 1){
        //change the background color using JS
        box.style.backgroundColor = 'lightgreen';
        //Change the text of the color using the span id color-name
        document.getElementById('color-name').textContent = box.style.backgroundColor;
    }
    else{
        //change the background color using JS
        box.style.backgroundColor = '#F08080';
        //Change the text of the color using the span id color-name
        document.getElementById('color-name').textContent = box.style.backgroundColor;
    }
}


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/

convert_button = document.getElementById('convertbtn');
convert_button.addEventListener('click', convertTemp());

/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(){
    //Calculate the temperature here
    temperature_F = parseFloat(document.getElementById('f-input').value);
    temperature_C = (temperature_F - 32) * 5 / 9;

    //Send the calculated temperature to HTML
    document.getElementById('c-output').textContent = temperature_C;

}


