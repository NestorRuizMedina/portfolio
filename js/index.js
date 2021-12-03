window.onload = () => {
    const header = document.querySelector('#header');



    if (window.innerWidth <= 768) {
        const hamburger = document.querySelector('#hamburger');
        const menu = document.querySelector('#menu');
        const tap = document.querySelector('#tap-to-close');

        hamburger.onclick = () => {
            menu.classList.toggle('menu-open');
            hamburger.style = `
                display: none;
            `;
            tap.style.display = "block";
        }

        menu.onclick = () => {
            menu.classList.toggle('menu-open');
            hamburger.style = `
                display: inline;
            `;
            tap.style.display = "none";
        }
    }

    window.addEventListener('scroll', (e) => {
        if (window.innerWidth > 768) {

            if (window.pageYOffset > 500) {
                header.style = `
                opacity: 0;
            `;
            }
            else if (window.pageYOffset < 500) {
                header.style = `
                opacity: 1; 
             `;
            }
        } else {

        }
    })
}
