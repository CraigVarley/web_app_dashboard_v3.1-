// DOM VARIABLES //
const trafChart = document.getElementById('chart-button'); // for line chart/button changes
const buttons = trafChart.getElementsByTagName('BUTTON'); // all buttons in the chart

/* EVENT LISTENERS */
// top line chart buttons, changes format of buttons and adds new chart below
// by calling lineChart(), see chart.js for function code 

trafChart.addEventListener('click', (e) => {
    b = e.target;
    if (b.tagName === ('BUTTON')) {
        for (let i=0; i<buttons.length;i++) {
        buttons[i].setAttribute('id', 'chart');
        buttons[i].classList.remove('chart-clicked');
        }
        if (b.innerHTML === 'Weekly') {
            b.removeAttribute('id');
            b.classList.add('chart-clicked');
            lineChart(weeklyLine, weeklyData);
        }
        else if (b.innerHTML === 'Daily') {
            b.removeAttribute('id');
            b.classList.add('chart-clicked');
            lineChart(dailyLine, dailyData);
        }
        else if (b.innerHTML === 'Hourly') {
            b.removeAttribute('id');
            b.classList.add('chart-clicked');
            lineChart(hourlyLine, hourlyData);
        }
        else {
            b.removeAttribute('id');
            b.classList.add('chart-clicked');
            lineChart(monthlyLine, monthlyData);
        }
    }
});

// x on alert to close
const alert1 = document.getElementById('alert');
const close = document.getElementById('close-x');
// event to close when clicked
alert1.addEventListener('click', (e) => {
    if (e.target === close) {
    alert1.style.display = 'none';
    }
});


// // notification button dropdown 
const head = document.getElementById('head');
const dropdown = head.querySelector('#icon-bell');
const dropdownContent = head.querySelector('#dropdown-content');
head.addEventListener('click', (e) => {
    if (e.target === dropdown) {
        dropdownContent.classList.toggle('dropdown-visible');
    }
});

// notification close on x out 
const closebtns = document.getElementsByClassName('xout');
/* Loop through the elements, and hide the parent, when clicked on */
for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
  this.parentElement.style.display = 'none'; }
)};



// SETTINGS AND LOCAL STORAGE

// dropdown variable
const timezone = document.getElementById('timezone');
// switch variables
const emailButton = document.getElementById('emailSwitch');
const profileButton = document.getElementById('profileSwitch');
// save button listen variable
const settings = document.getElementById('settings');
const saveButton = settings.querySelector('#savebutton');
const cancelButton = settings.querySelector('#cancelbutton');
// save button event listener
settings.addEventListener('click', (e) => {
    // listen for change if save clicked + upate local storage in browser
    if (e.target === saveButton) {
        localStorage.setItem('email', emailButton.checked); // set email switch
        localStorage.setItem('profile', profileButton.checked); // set profile switch
        localStorage.setItem('timezone', timezone.options[timezone.selectedIndex].value); // set value of timezone 
    }
    if (e.target === cancelButton) {
        localStorage.removeItem('email');
        localStorage.removeItem('profile');
        localStorage.removeItem('timezone');
    }
});

// function for load to use user local storage values on page reload and change
function loadSettings() {
    if (localStorage.length !== 0) {
        // get all the localstorage settings on load
        let emailSetting = localStorage.getItem('email');
        let profileSetting = localStorage.getItem('profile');
        let timezoneSetting = localStorage.getItem('timezone');
        // update values
        emailButton.checked = JSON.parse(emailSetting);
        profileButton.checked = JSON.parse(profileSetting);
        timezone.value = timezoneSetting;
    }
    else {
        emailButton.checked = JSON.parse(false);
        profileButton.checked = JSON.parse(false);
        timezone.value = 'Select Timezone';
    }
}


// message send validate before + display confirmation
const messageUser = document.getElementById('message-user');
const messageButton = document.querySelector('#sendbutton');
const messageMember = document.querySelector('#member');
const messageText = document.getElementById('messagetext');
messageUser.addEventListener('click', (e) => {
    if (e.target === messageButton) {
        if ((!messageText.value) || (!messageMember.value)) {
            return alert("Please enter both name and message.");
        }
        else {
            messageText.value = ' ';
            messageMember.value = ' ';
            messageText.value = 'MESSAGE SENT SUCCESSFULLY!';
            setTimeout(function(){
                messageText.value = '';
            }, 2000);
        }
    }
});


window.onload = () => {
// initial function call for line chart on page load
lineChart(monthlyLine, monthlyData);
// load local storage
loadSettings();
}