window.addEventListener('DOMContentLoaded', function() {
'use strict';
let infoTab = document.querySelectorAll('.info-header-tab'),
    infoTabContent = document.querySelectorAll('.info-tabcontent'),
    infoHeader = document.querySelector('.info-header');

    function hideTabs(a) {
        for (let i = a; i < infoTabContent.length; i++) {
            
            infoTabContent[i].style.display = "none";
        }

    }
hideTabs(1);
    function showTabs(a) {
         infoTabContent[a].style.display = "flex";
    }


infoHeader.addEventListener('click', function(event) {
    let target = event.target;
    if (target && target.classList.contains('info-header-tab')) {
        for (let i = 0; i < infoTab.length; i++) {
            if (target == infoTab[i]) {
                hideTabs(0);
                showTabs(i);
                break;
            }
        }
    }
});

});