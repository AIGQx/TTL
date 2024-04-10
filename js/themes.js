const themeSwitch = document.getElementById('theme-switch');


themeSwitch.addEventListener('change', function() {
    if(this.checked) {
        document.body.setAttribute('data-theme', 'dark');
    } else {
        document.body.removeAttribute('data-theme');
    }
}   );