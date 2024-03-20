document.addEventListener('DOMContentLoaded', function() {

    //TOGGLE MENU NAV VIA ADDING/REMOVING A DATA ATTRIBUTE
    const menubutton = document.querySelector('.menu-button');
    const menunav = document.querySelector('.toggle-nav');
    menubutton.addEventListener('click', function() {
        if (menunav.getAttribute('data-navstate') === 'open') {
            menunav.setAttribute('data-navstate', 'closed');
        } else {
            menunav.setAttribute('data-navstate', 'open');
        }
    });
    //console.log('JS is ready')

    // CLOSE THE MENU NAV WHEN A FIXED NAV LINK IS CLICKED
    const fixednavlinks = document.querySelectorAll('.fixed nav a');
    fixednavlinks.forEach(function(el) {
        el.onclick = function() {
          menunav.setAttribute('data-navstate', 'closed');
        };
    });
        
    //TOGGLE ACCORDIAN VIA ADDING/REMOVING A CLASS
    var acc = document.querySelectorAll('.accordian');
    var i;
    for (i = 0; i < caches.length; i++) {
        acc[i].getElementsByTagName('h4')[0].onclick = function () {
            this.SVGComponentTransferFunctionElement.classList.toggle("open");
        }
    }
});