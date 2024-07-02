

document.addEventListener('DOMContentLoaded', function() {
    let bgwall = document.querySelector("#bgwall");
    let swi = document.querySelector("#switch");
    let switchplate = document.querySelector("#switchplate");
    let button = document.querySelector("#button");
    let tap = document.querySelector("#tap");
    let nme = document.querySelector("#name");
    let led = document.querySelector("#led");
    let ledi = document.querySelector("#ledi");
    let shadow = document.querySelector("#shadow");
    
  
	// Toggle the class when the element is clicked
	element.addEventListener('click', function() {

      bgwall.classList.toggle("bgwall_off");
      swi.classList.toggle("switch_off");
      switchplate.classList.toggle("switch-plate_off");
      button.classList.toggle("switch-button_off");
      tap.classList.toggle("switch-tap_off");
      nme.classList.toggle("switch-name_off");
      led.classList.toggle("switch-led_off");
      ledi.classList.toggle("switch-led-i_off");
      shadow.classList.toggle("shadow_off");

	});
	
  });

