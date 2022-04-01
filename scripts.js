// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init () {
    //When the "Take off" button is clicked, the following should happen:
    const takeoff = document.getElementById('takeoff');
    const land = document.getElementById('landing');
    const abortMission = document.getElementById('missionAbort');
    const up = document.getElementById('up');
    const down = document.getElementById('down');
    const right = document.getElementById('right');
    const left = document.getElementById('left');
    const rocket = document.getElementById('rocket');
    rocket.style.position = 'absolute';
    rocket.style.left = '0px';
    rocket.style.bottom = '0px';


    const flightStatus = document.getElementById('flightStatus');
    const height = document.getElementById('spaceShuttleHeight');
    const shuttleBackground = document.getElementById("shuttleBackground");
    let miles = Number(height.innerHTML);
    let rocketV = 0;
    let rocketH = 0;
    let ready = false;

    takeoff.addEventListener('click', ()=>{
        // A window confirm should let the user know "Confirm that the shuttle is ready for takeoff." If the shuttle is ready for liftoff, then add parts b-d.
        ready = window.confirm('Confirm that the shuttle is ready for takeoff.');

        if (ready){
    // The flight status should change to "Shuttle in flight."
            flightStatus.innerHTML = "Shuttle in flight.";


    // The background color of the shuttle flight screen (id = "shuttleBackground") should change from green to blue.
            
            shuttleBackground.style.backgroundColor = 'blue';

    // The shuttle height should increase by 10,000 miles.
            miles += 10000;


            
            height.innerHTML = String(miles);
        }
    });

    // When the "Land" button is clicked, the following should happen:
    land.addEventListener('click', ()=>{
// A window alert should let the user know "The shuttle is landing. Landing gear engaged."
        window.alert('The shuttle is landing. Landing gear engaged.');

    // The flight status should change to "The shuttle has landed."
        flightStatus.innerHTML = "The shuttle has landed.";

    // The background color of the shuttle flight screen should change from blue to green.
        shuttleBackground.style.backgroundColor = 'green';

    // The shuttle height should go down to 0.
        miles = 0;
        height.innerHTML = String(miles);

        rocketH = 0;
        rocketV = 0;
        rocket.style.left = String(rocketH) + 'px';
        rocket.style.bottom = String(rocketV) + 'px';
    });
    

    // When the "Abort Mission" button is clicked, the following should happen:
    abortMission.addEventListener('click', ()=>{
// A window confirm should let the user know "Confirm that you want to abort the mission." If the user wants to abort the mission, then add parts b-d.
        let abort = window.confirm('Confirm that you want to abort the mission.');

        if (abort){
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

        
        up.addEventListener('click', ()=>{
            if (ready){
            rocketV += 10;
            rocket.style.bottom = String(rocketV) + 'px';

            miles += 10000;
            height.innerHTML = String(miles);
            }
        });

        down.addEventListener('click', ()=>{
            if (ready){
            rocketV -= 10;
            if (rocketV >= 0){
                rocket.style.bottom = String(rocketV) + 'px';

                miles -= 10000;
                height.innerHTML = String(miles);
            }
            else {
                window.alert('Stay on course.')
            }
        }
        });

        right.addEventListener('click', ()=>{
            if (ready){
            rocketH += 10;
            rocket.style.left = String(rocketH) + 'px';
            }
        });

        left.addEventListener('click', ()=>{
            if (ready){
            rocketH -= 10;
            if (rocketH >= 0){
                rocket.style.left = String(rocketH) + 'px';
            }
            else {
                window.alert('Stay on course.')
            }
        }
        });


        



}

window.addEventListener('load', init);