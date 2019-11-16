//Run when the page is loaded. Get the date the page was loaded
var start = new Date();

//Function to figure out difference of seconds when the button is pressed
function stopTime(){

//Create a new variable called stop and set it equal to the date when then button was pressed
var stop=new Date();

//Create a new variable called stopMilli and set it equal to the number of milliseconds that have passed since the button was pressed
var stopMilli = stop.getTime();

//Creates a new variable called startMilli and set it equal to the number of milliseconds that have passed since the button was pressed again
var startMilli = start.getTime();

//Subtract the stopped illiseconds from the started milliseconds
var difference= stopMilli - startMilli;

//Divide our milliseconds by 600 to make it a difference in seconds
difference= difference/600;

//Create a pop up to the page with the number of seconds using our difference
alert("It has been: "+difference+" seconds");

}
