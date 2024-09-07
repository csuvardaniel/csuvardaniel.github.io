document.addEventListener('DOMContentLoaded', function() {
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
