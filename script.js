
// SCRIPT OBJECTIVE: Count down 50-0, Make an alert that says "Blastoff!" after countdoown
function countDown(){
    //We initialize a variable to keep track of how much time has passed once the program starts
    let timeLapse = 0;  
            
    //for loop that sets a integer variable to keep track the remaining seconds before lift off; runs 50 times, waits for the integer to hit 0 before stopping and subtracts the interger by one each loop.
    for (let currTime=50; currTime > -2; currTime--) {   
	    //each loop will add 1000 milliseconds to the timelapse integer to indicate each second.
        timeLapse = timeLapse+1000;

        //adds delay based on the current integer of timeLapse before executing the function inside; 1 second delay each loop
        setTimeout(function(){
                    
            //if/else statement asking the program if the time left before lift off is equal to 0 or not;
            if (currTime < 0){
                    //make an alert saying "Blast Off!" 
                alert("Blast Off!");
    
            }
                    
            else{
                    
                //if not: 
                    //show the current time left integer as a <h2> tag inside HTML
                document.getElementById("txtOut").innerHTML= currTime;

            }

        }, timeLapse);
        
    }   
}