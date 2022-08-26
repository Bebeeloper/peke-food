var myCheckbox = document.getElementById('toggle-sun-moon');
var logo = document.getElementById('logo-peke-food');

myCheckbox.addEventListener('click', (event) => {
    if(myCheckbox.checked == false) {
        console.log('check value: ' + myCheckbox.checked);
        document.getElementById('toggle-mode').href='./ligth-mode.css';
        logo.src = './images/logo/Logo.png';
    } else {
        console.log('check value: ' + myCheckbox.checked);
        document.getElementById('toggle-mode').href='./dark-mode.css';
        logo.src = 'images/logo/Logo-dark-mobile.png';
    }
});

function myFunction(x) {
    if (x.matches) { // If media query matches
    //   document.body.style.backgroundColor = "yellow";
    document.getElementById("slide1").src = './images/resources/health-food-middle.png';
    document.getElementById("slide2").src = './images/resources/breakfast-middle.png';
    document.getElementById("slide3").src = './images/resources/restaurant-middle.png';
    } else {
    //   document.body.style.backgroundColor = "pink";
    document.getElementById("slide1").src = './images/resources/health-food-mobile.png';
    document.getElementById("slide2").src = './images/resources/breakfast-mobile.png';
    document.getElementById("slide3").src = './images/resources/restaurant-mobile.png';
    }
  }
  
  var x = window.matchMedia("(min-width: 429px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes
