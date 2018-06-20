import {MDCTemporaryDrawer} from '@material/drawer';

let drawer = new MDCTemporaryDrawer(document.querySelector('.mdc-drawer--temporary'));

document.querySelector('.menu').addEventListener('click', () => {
    if(drawer.open) {
        drawer.open = false;
    } else {
        drawer.open = true;
    }
});

let oldEvent = window.onresize;
window.onresize = function(event) {
    if(oldEvent) {
        oldEvent(event);
    }

    let menuDrawerContent = document.querySelector('.side-bar-drawerable');
    let menuDrawer = document.querySelector('.mdc-drawer');
    let menuDCntDisplay = menuDrawerContent.style.display ? menuDrawerContent.style.display : getComputedStyle(menuDrawerContent, null).display;

    if(menuDCntDisplay == 'none') {
        menuDrawer.style.display = 'none';
    } else {
        menuDrawer.style.display = '';
    }
}
