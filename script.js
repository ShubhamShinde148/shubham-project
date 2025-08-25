// Example JS for Random Website
// Add interactivity to the Get Started button

document.addEventListener('DOMContentLoaded', function() {
    const getStartedBtn = document.querySelector('.hero button');
    if(getStartedBtn) {
        getStartedBtn.addEventListener('click', function() {
            alert('Welcome to Random Web! Enjoy exploring.');
        });
    }
});
