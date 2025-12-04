/*
    Name: Gabriel Roldan 
    C0965649
    Course: Web Development (CSD310)
    Product: Circular Saws
*/

/*
    Hamburger Botton Function 
 */

function hamburger() {
    body = document.querySelector('body');
    menu = document.getElementById('hamburger');
    menuItems = document.getElementById('menu-items');

    if (menu.classList.contains('close-button')) {
        menu.classList.remove('close-button');
        menuItems.classList.remove('mobile-menu-options');
        body.classList.remove('prevent-scroll');
        
        menuItems.classList.add('desktop-tablet');
    } else {
        menu.classList.add('close-button');
        menuItems.classList.add('mobile-menu-options');
        body.classList.add('prevent-scroll');

        menuItems.classList.remove('desktop-tablet');
    }
}