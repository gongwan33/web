import {MDCTemporaryDrawer, MDCPersistentDrawer} from '@material/drawer';

const temDrawerEle = document.querySelector('.mdc-drawer--temporary');
const perDrawerEle = document.querySelector('.mdc-drawer--persistent');
const drawer = new MDCTemporaryDrawer(temDrawerEle);
const pdrawer = new MDCPersistentDrawer(perDrawerEle);

const breakpoint = 1024;

function btnDealer() {
    let normalCardWrapper = document.querySelector('.card-wrapper'); 
    let cardGps = document.querySelectorAll('.mdc-card');
    let wrapModSign = false;

    if(cardGps) {
        for(let i = 0; i < cardGps.length; i++) {
            let card = cardGps[i];
            let instruction = card.querySelector('.card-instructions');
            let btnGp = card.querySelector('.mdc-card__actions');

            if(!instruction || !btnGp) {
                continue;
            }

            let instructionRect = instruction.getBoundingClientRect();
            let rectBtnGp = btnGp.getBoundingClientRect();

            if(instructionRect.top + instructionRect.height <= rectBtnGp.top) {
                let btnGps = document.querySelectorAll('.mdc-card__actions');
                for(let j = 0; j < btnGps.length; j++) {
                    let bp = btnGps[j];
                    bp.style.width = rectBtnGp.width + 'px';
                    bp.style.padding = "20px 0 0 0";
                }
                wrapModSign = true;
                break;
            } 
        }

        if(!wrapModSign) {
            let btnGps = document.querySelectorAll('.mdc-card__actions');
            for(let i = 0; i < btnGps.length; i++) {
                let bp = btnGps[i];
                bp.style.width = '';
                bp.style.padding = "8px";
            }

        }
    }
}

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

    btnDealer();
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
    let rectFoot = footEle.getBoundingClientRect();

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

    btnDealer();
} 


