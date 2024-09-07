document.addEventListener('DOMContentLoaded', function() {
    // Detect if the user is on mobile and load appropriate CSS
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const stylesheet = document.getElementById('stylesheet');
    const deviceTypeElement = document.getElementById('deviceType'); // The device type element

    if (/android|iPad|iPhone|iPod/.test(userAgent.toLowerCase())) {
        stylesheet.setAttribute('href', 'mobile.css'); // Load mobile CSS
        deviceTypeElement.textContent = "You are using a Mobile Device."; // Display mobile device info
    } else {
        stylesheet.setAttribute('href', 'pc.css'); // Load desktop CSS
        deviceTypeElement.textContent = "You are using a Desktop Device."; // Display desktop device info
    }

    // Copy to clipboard functionality for email
    const copyBtns = document.querySelectorAll('.copy-btn');
    
    copyBtns.forEach(button => {
        button.addEventListener('click', function() {
            const email = button.getAttribute('data-email');
            navigator.clipboard.writeText(email).then(() => {
                button.textContent = 'Copied!';
                button.classList.add('copied');
                
                setTimeout(() => {
                    button.textContent = 'Copy';
                    button.classList.remove('copied');
                }, 3000);
            }).catch(err => {
                console.error('Failed to copy', err);
            });
        });
    });
});
