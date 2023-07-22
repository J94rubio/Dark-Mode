
document.addEventListener('DOMContentLoaded', ()=>{

    const switcherTheme = document.querySelector('.main_check');
    const root = document.documentElement;

    if(root.getAttribute('data-theme') === 'dark'){
        switcherTheme.checked = true;
    }

    switcherTheme.addEventListener("click", toggleTheme);

    function toggleTheme(){
        const setTheme = switcherTheme.checked ? 'dark' : 'light';
        
        root.setAttribute('data-theme', setTheme);
        localStorage.setItem('theme', setTheme)
    }

});