document.addEventListener('DOMContentLoaded', function() {
    // Detect if the user is on mobile and load appropriate CSS
    const userAgent = navigator.userAgent.toLowerCase();
    const stylesheet = document.getElementById('stylesheet');

    // Load mobile or desktop stylesheet based on the user agent
    if (/android|ipad|iphone|ipod/.test(userAgent)) {
        stylesheet.setAttribute('href', 'mobile.css');
    } else {
        stylesheet.setAttribute('href', 'pc.css');
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
