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
    let buttons = document.getElementsByClassName('directional');//stores all the toggleable buttons in an array
    
    let buttonFlip = false;
    buttonSwitch();

    rocket.style.position = 'absolute';
    rocket.style.left = '0px';
    rocket.style.bottom = '0px';
    
    let miles = Number(height.innerHTML);
    let rocketH = parseInt(rocket.style.left);//horizontal shift tracker
    let rocketV = parseInt(rocket.style.bottom);//vertical shift tracker
    
    //toggles the buttons
    function buttonSwitch(){
        takeoff.disabled = buttonFlip;
        buttonFlip = !buttonFlip;
        for (const button of buttons){
            button.disabled = buttonFlip;
        }
    }

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
    // A window alert should let the user know "The shuttle is landing. Landing gear engaged."
        buttonSwitch();
        window.alert('The shuttle is landing. Landing gear engaged.');

    // The flight status should change to "The shuttle has landed."
        flightStatus.innerHTML = "The shuttle has landed.";

    // The background color of the shuttle flight screen should change from blue to green.
        shuttleBackground.style.backgroundColor = 'green';

    // The shuttle height should go down to 0.
        miles = 0;
        height.innerHTML = String(miles);
        
        rocketV = 0;
        ready = false;

        rocket.style.left = String(rocketH) + 'px';
        rocket.style.bottom = String(rocketV) + 'px';
    }

    

// When the "Abort Mission" button is clicked, the following should happen:
    abortMission.addEventListener('click', ()=>{
    // A window confirm should let the user know "Confirm that you want to abort the mission." 
        buttonSwitch();
        let abort = window.confirm('Confirm that you want to abort the mission.');

        if (abort){//If the user wants to abort the mission, then add parts b-d.
        // The flight status should change to "Mission aborted."
            flightStatus.innerHTML = "Mission aborted.";

        // The background color of the shuttle flight screen should change from blue to green.
            shuttleBackground.style.backgroundColor = 'green';

        // The shuttle height should go to 0.
            miles = 0;
            height.innerHTML = String(miles);            
        }

        rocketH = 0;
        rocketV = 0;
        rocket.style.left = String(rocketH) + 'px';
        rocket.style.bottom = String(rocketV) + 'px'; 
    });


// When the "Up", "Down", "Right", and "Left" buttons are clicked, the following should happen:
// The rocket image should move 10 px in the direction of the button that was clicked.
// If the "Up" or "Down" buttons were clicked, then the shuttle height should increase or decrease by 10,000 miles
    //added if(ready) to every direction to prevent the user from moving the rocket before taking off

    function goUp(){//used for 'Take Off' and 'Up' clicks
        rocketV += 10;
        rocket.style.bottom = String(rocketV) + 'px';

        miles += 10000;
        height.innerHTML = String(miles);
    }
        
    up.addEventListener('click', goUp);

    down.addEventListener('click', ()=>{
        if (miles === 10000){
            let landWish = window.confirm('Cannot hover any lower. Do you wish to land?');
            if (landWish){
                landShuttle();
            }
        }
        else {
            rocketV -= 10;
            if (rocketV > 0){ 
                miles -= 10000;
                rocket.style.bottom = String(rocketV) + 'px';
                height.innerHTML = String(miles);
            }            
        }
    });

    right.addEventListener('click', ()=>{
        rocketH += 10;
        rocket.style.left = String(rocketH) + 'px';
    });

    left.addEventListener('click', ()=>{
        if (rocketH > 0){  
            rocketH -= 10;
            rocket.style.left = String(rocketH) + 'px';
        }
        else {
            window.alert('Stay on course!')
        }
    });
}

window.addEventListener('load', init);