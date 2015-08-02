//Movement
var x = 0; 
//robot image
var robot = document.getElementById('imgRobot'); 
//timer
var timerID;

// move the robot to the right 
var moveRobot = function() {
   x += 1; 
   robot.style.left = x + "px";
   //6. After the robot exits on the right, it shall re-enter from the left. 
   if ( x > window.innerWidth) { 
   		x = -robot.width 
   }
} 

// 3. When the Start button is clicked:
var startRobot = function() {
	//the robot shall start moving to the right.
	timerID = setInterval(moveRobot, 1); 
	//the Start button shall become a Stop button.
	document.getElementById('toggleButton').value = "Stop";
	//5.The Start/Stop button shall work repeatedly.
	document.getElementById("toggleButton").onclick = stopRobot;
	
} 

//4. When the Stop button is clicked:
var stopRobot = function () {
	//the robot shall stop moving.
    clearInterval(timerID);
    //the Stop button shall become a Start button.
    document.getElementById("toggleButton").value = "Start";
    //5. The Start/Stop button shall work repeatedly.
    document.getElementById("toggleButton").onclick = startRobot;
}

//events
robot.onload = stopRobot();