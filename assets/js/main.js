//Handler when you click on a menu item
const menuClick = (menu) => {
    //select all menu items and make all inactives
    const menuItems = document.querySelectorAll('li.menu-items');
    menuItems.forEach( menuItem => {
        menuItem.classList.remove('menu-active');
    });
    //select all pages and hide them
    const pages = document.querySelectorAll('div.page');
    pages.forEach( page => {
        page.classList.remove('page-active');
    });

    //make visible the page that have been selected
    const activePage = document.querySelector(`div.${menu}`);
    activePage.classList.add('page-active');

    //make active the menu item that have been clicked on
    const activeMenu = document.getElementById('menu-'+menu);
    activeMenu.classList.add('menu-active');

    menuIconClick();
}

//Handler for clicking on menu Icon
const menuIconClick = () => {
    //toggle menu visibility
    const menu = document.querySelector('.menu');
    if (menu.className === "menu") {
        menu.className += " responsive";
    } else {
        menu.className = "menu";
    }
}