
document.addEventListener('DOMContentLoaded', function() {
	var element = document.getElementById('btname');
	let bgwall = document.querySelector("#bgwall");
	let swi = document.querySelector("#switch");
	let plate = document.querySelector("#plate");
	let button = document.querySelector("#button");
	let tap = document.querySelector("#tap");
	let led = document.querySelector("#led");
	let ledi = document.querySelector("#ledi");
  
	// Toggle the class when the element is clicked
	element.addEventListener('click', function() {
	  element.classList.toggle('switch-off');
	  element.classList.toggle('switch-off');
	  bgwall.classList.toggle("bgwall-off");
	  swi.classList.toggle("bkp_off");
	  plate.classList.toggle("plate_off");
	  button.classList.toggle("btn_off");
	  tap.classList.toggle("tap_off");
	  led.classList.toggle("led_off");
	  ledi.classList.toggle("light_off");

	});
	
});


// Goldmedal logo
  document.addEventListener('DOMContentLoaded', () => {
    const image = document.getElementById('toggleLogo');
    const button = document.getElementById('button');

    let isImage1 = true;

    button.addEventListener('click', () => {
        if (isImage1) {
            image.src = 'assets/logos/logo_on.png';
        } else {
            image.src = 'assets/logos/logo_off.png';
        }
        isImage1 = !isImage1;
    });
});

// Audio Click 
document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('button');
    const clickSound = document.getElementById('clickSound');

    // Dynamically set the source of the audio file
    clickSound.src = 'assets/switch.mp3';

    button.addEventListener('click', () => {
        clickSound.play();
    });
});



