// Lesson 146

// Looks for how many elements have the class of .drum
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// Detects button presses by clicks of the mouse
// Putting numberOfDrumButtons in the for loop makes the loop stop when i is less than the numberOfDrumButtions.
for (var i = 0; i < numberOfDrumButtons; i++) {

    // addEventListener(what event to listen to, what it should do)
    // Loops through each buttion that has the class .drum and adds an event listener.
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        //  var buttonInnerHTML = this.innerHTML; gets the HTML markup inside the html element so the letter inside each button in the index.html file
        // this - this is the identity of the button that triggered the event listener. this is inside a function therefore this refers to the querySelectorAll(".drum")[i]. 
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

        // Prints the button object
        // console.log(this);

        // Prints the innerHTML
        // console.log(this.innerHTML);

        // Whenever you click a button it changes the text color to white.
        // this.style.color = "white";

        // Note. The constructor function for the Audio function in javascript might look like
        // function Audio (fileLocation){
        //     this.fileLocation = fileLocation;
        //     this.play = function(){
        //         //Tap into the audio hardware
        //         // Check the file at fileLocation exists
        //         // Check the file at fileLocation is a sound file
        //         // Play the file at fileLocation
        //     }
        // }


    });

    // -------------------------------------------
    // Cut and pasted the switch statement into the makeSound(key) function
    // -------------------------------------------

    // This was the first way I thought of making each button work seperatly before the switch statement. 

    // document.querySelectorAll(".w")[i].addEventListener("click", function () {
    //     console.log(this);
    //     var tom1 = new Audio("sounds/tom-1.mp3");
    //     tom1.play();
    // });
    // document.querySelectorAll(".a")[i].addEventListener("click", function () {
    //     var tom1 = new Audio("sounds/tom-2.mp3");
    //     tom1.play();
    // });
    // document.querySelectorAll(".s")[i].addEventListener("click", function () {
    //     var tom1 = new Audio("sounds/tom-3.mp3");
    //     tom1.play();
    // });
    // document.querySelectorAll(".d")[i].addEventListener("click", function () {
    //     var tom1 = new Audio("sounds/tom-4.mp3");
    //     tom1.play();
    // });
    // document.querySelectorAll(".j")[i].addEventListener("click", function () {
    //     var tom1 = new Audio("sounds/snare.mp3");
    //     tom1.play();
    // });
    // document.querySelectorAll(".k")[i].addEventListener("click", function () {
    //     var tom1 = new Audio("sounds/crash.mp3");
    //     tom1.play();
    // });
    // document.querySelectorAll(".l")[i].addEventListener("click", function () {
    //     var tom1 = new Audio("sounds/kick-bass.mp3");
    //     tom1.play();
    // });
}

// Detects keyboard presses.
// Event listener is added to the whole document to "listen" for any keypresses on the users keyboard using the "keydown" function in javascript. The event in the function is just a variable. the .addEventListener is the higher order function in this situation and the callback function is the anonymous function -> function(event)
document.addEventListener("keydown", function (event) {

    // console logs which key was pressed and gives additional information in the console.
    // console.log(event);

    makeSound(event.key);

    buttonAnimation(event.key);
});

// Function that takes a character and checks in with the switch statement in order to play the right sound and then call it inside the event listener for the key press and the event listener for the drum buttons.

function makeSound(key) {

    // Passes key by calling makeSound(buttonInnerHTMl); inside the for loop / click event listener  and then calling the makeSound(event.key); inside the key press event listener

    switch (key) {
        case "a":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "s":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "d":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "f":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "h":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "l":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        default: console.log(buttonInnerHTML);
            break;
    }
}

// Animation that lights up the button on key press or click
// Active button is found by the currentKey that is pressed, Then add the css pressed class to add the look of the button being pressed, Then Remove the pressed class with the setTimeout function 

function buttonAnimation(currentKey) {

    // Finds the button with the current key
    var activeButton = document.querySelector("." + currentKey);

    // Adds css class pressed 
    activeButton.classList.add("pressed");

    // Remove the above line of code to simulate the animation of the button press
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}

// Adds event listener to the first button.
// document.querySelector("button")[0].addEventListener("click", function () {
//     alert("I got clicked!");

// });

// // Object
// ---------------------------------------------------

// var car = {
//     type: "sedan",
//     company: "audi",
//     colors: ["black", "brown"]
// }

// // Constructor function -  1st letter in the function name is capitalized
// this(object).type = type(type that is given as an input)
// ---------------------------------------------------

// function Car(type, company, colors) {
//     this.type = type;
//     this.company = company;
//     this.colors = colors;
// }

// // Initializing an object
// // The only difference between this syntax and calling a function is the new keyword and the fact that the name of the function is capitalized
// ---------------------------------------------------

// var car = new Car("suv", "Ford", ["Silver", "Black"]);

// Method - A method is a function that is associated with an object or inside an object. In this case provide the name of the function as a new parameter in the object and then put a colon and then put the anonymous function.
// ---------------------------------------------------

// var car = {
//     type: "sedan",
//     company: "audi",
//     colors: ["black", "brown"],
//     // This is a method- name of the function as a new parameter, and then the anonymous function
//     move: function(){
//         alert("Car Moving");
//         move();
//     }
// }
