import {MDCTemporaryDrawer, MDCPersistentDrawer} from '@material/drawer';

const temDrawerEle = document.querySelector('.mdc-drawer--temporary');
const perDrawerEle = document.querySelector('.mdc-drawer--persistent');
const drawer = new MDCTemporaryDrawer(temDrawerEle);
const pdrawer = new MDCPersistentDrawer(perDrawerEle);

const breakpoint = 1024;

document.querySelector('.menu').addEventListener('click', () => {
    let width = document.body.clientWidth;
    if(width < breakpoint) {
        if(drawer.open) {
            drawer.open = false;
        } else {
            drawer.open = true;
        }
    } else {
        if(pdrawer.open) {
            pdrawer.open = false;
        } else {
            pdrawer.open = true;
        }
    }
});

let oldEvent = window.onresize;
window.onresize = function(event) {
    if(oldEvent) {
        oldEvent(event);
    }
    
    let width = document.body.clientWidth;
    if(width < 1024) {
        perDrawerEle.style.display = 'none';
        temDrawerEle.style.display = '';
        pdrawer.open = false;
    } else {
        temDrawerEle.style.display = 'none';
        perDrawerEle.style.display = '';
        pdrawer.open = true;
        drawer.open = false;
    }
}

oldEvent = window.onload;
window.onload = function() {
    if(oldEvent) {
        oldEvent(event);
    }

    let width = document.body.clientWidth;
    if(width < 1024) {
        perDrawerEle.style.display = 'none';
        pdrawer.open = false;
        temDrawerEle.style.display = '';
        drawer.open = false;
    } else {
        temDrawerEle.style.display = 'none';
        drawer.open = false;
        perDrawerEle.style.display = '';
        pdrawer.open = true;
    }

    let winHeight = window.innerHeight;
    let footEle = document.querySelector('.foot-bar-sub');
    var rectFoot = footEle.getBoundingClientRect();

    if(rectFoot.top + rectFoot.height < winHeight) {
        let originMarginTop = footEle.style.marginTop ? footEle.style.marginTop : window.getComputedStyle(footEle).marginTop;
        originMarginTop = originMarginTop.replace("px", '');

        if(!originMarginTop) {
            originMarginTop = 0;
        }

        let targetTop = winHeight - rectFoot.height - rectFoot.top + Number(originMarginTop) - 25;
        if(targetTop > 66) {
            footEle.style.marginTop = targetTop + 'px'; 
        }
    }

} 


