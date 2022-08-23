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
