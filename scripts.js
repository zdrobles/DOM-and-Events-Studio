// Author: Zachary Robles
function init () {  
    const takeoff = document.getElementById('takeoff');//grab 'Take Off' button
    const land = document.getElementById('landing');//grab 'Land' button
    const abortMission = document.getElementById('missionAbort');//grab 'Abort Mission' button
    const up = document.getElementById('up');//grab 'Up' button
    const down = document.getElementById('down');//grab 'Down' button
    const right = document.getElementById('right');//grab 'Right' button
    const left = document.getElementById('left');//grab 'Left' button
    const rocket = document.getElementById('rocket');//grab rocket img
    const flightStatus = document.getElementById('flightStatus');
    const height = document.getElementById('spaceShuttleHeight');
    const shuttleBackground = document.getElementById("shuttleBackground");
    const buttons = document.getElementsByClassName('directional');//stores all the toggleable buttons in an array
    
    let buttonFlip = false;
    rocket.style.position = 'absolute';
    rocket.style.left = '0px';
    rocket.style.bottom = '0px';
    
    //toggles the buttons
    function buttonSwitch(){
        takeoff.disabled = buttonFlip;
        buttonFlip = !buttonFlip;
        for (const button of buttons){
            button.disabled = buttonFlip;
        }
    }

    buttonSwitch();
//When the "Take off" button is clicked, the following should happen:
    takeoff.addEventListener('click', ()=>{
    // A window confirm should let the user know "Confirm that the shuttle is ready for takeoff." 
        let ready = window.confirm('Confirm that the shuttle is ready for takeoff.');

        if (ready){//If the shuttle is ready for liftoff, then add parts b-d.   
            buttonSwitch();
        // The flight status should change to "Shuttle in flight."
            flightStatus.innerHTML = "Shuttle in flight.";

        // The background color of the shuttle flight screen (id = "shuttleBackground") should change from green to blue.
            shuttleBackground.style.backgroundColor = 'blue';

        // The shuttle height should increase by 10,000 miles.
            goUp();
        }
    });


// When the "Land" button is clicked, the following should happen:
    land.addEventListener('click', landShuttle);
    function landShuttle(){
        buttonSwitch();
    // A window alert should let the user know "The shuttle is landing. Landing gear engaged."
        window.alert('The shuttle is landing. Landing gear engaged.');

    // The flight status should change to "The shuttle has landed."
        flightStatus.innerHTML = "The shuttle has landed.";

    // The background color of the shuttle flight screen should change from blue to green.
        shuttleBackground.style.backgroundColor = 'green';

    // The shuttle height should go down to 0.
        height.innerHTML = 0;
        
        rocket.style.bottom = 0 + 'px';
    }//end landShuttle()
    

// When the "Abort Mission" button is clicked, the following should happen:
    abortMission.addEventListener('click', ()=>{
    // A window confirm should let the user know "Confirm that you want to abort the mission." 
        let abort = window.confirm('Confirm that you want to abort the mission.');

        if (abort){//If the user wants to abort the mission, then add parts b-d.
        // The flight status should change to "Mission aborted."
            flightStatus.innerHTML = "Mission aborted.";

        // The background color of the shuttle flight screen should change from blue to green.
            shuttleBackground.style.backgroundColor = 'green';

        // The shuttle height should go to 0.
            height.innerHTML = 0;      
            
            rocket.style.left = 0 + 'px';
            rocket.style.bottom = 0 + 'px'; 
        }
    });


// When the "Up", "Down", "Right", and "Left" buttons are clicked, the following should happen:
// The rocket image should move 10 px in the direction of the button that was clicked.
// If the "Up" or "Down" buttons were clicked, then the shuttle height should increase or decrease by 10,000 miles
    //added if(ready) to every direction to prevent the user from moving the rocket before taking off

    function goUp(){//used for 'Take Off' and 'Up' clicks
        rocket.style.bottom = parseInt(rocket.style.bottom) + 10 + 'px';
        height.innerHTML = Number(height.innerHTML) + 10000;
    }//end goUp()
        
    up.addEventListener('click', goUp);

    down.addEventListener('click', ()=>{
        if (height.innerHTML === '10000'){
            let landWish = window.confirm('Cannot hover any lower. Do you wish to land?');
            if (landWish){
                landShuttle();
            }
        }
        else {
            rocket.style.bottom = parseInt(rocket.style.bottom) - 10 + 'px';
            height.innerHTML = Number(height.innerHTML) - 10000;         
        }
    });

    right.addEventListener('click', ()=>{
        rocket.style.left = parseInt(rocket.style.left) + 10 + 'px';
    });

    left.addEventListener('click', ()=>{
        if (parseInt(rocket.style.left) > 0){  
            rocket.style.left = parseInt(rocket.style.left) - 10 + 'px';
        } else {window.alert('Stay on course!')}
    });
}

window.addEventListener('load', init);