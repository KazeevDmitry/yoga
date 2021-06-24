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

// Timer 

let deadline = '2021-06-25';

function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
    seconds = Math.floor((t/1000) % 60),
    minutes = Math.floor((t/1000/60) % 60),
    hours = Math.floor((t/(1000*60*60)));

    return {
        'total' : t,
        'hours' : hours,
        'minutes' : minutes,
        'seconds' : seconds
    };
}

function setClock(id, endtime) {
    let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);
        
    function updateClock() {
        let t = getTimeRemaining(endtime);

        function addZero(num){
                    if(num <= 9) {
                        return '0' + num;
                    } else return num;
                };

        hours.textContent = addZero(t.hours);
        minutes.textContent = addZero(t.minutes);
        seconds.textContent = addZero(t.seconds);

        if (t.total <= 0) {
            clearInterval(timeInterval);
            hours.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00';
        }
    }

}

setClock('timer', deadline);

// модальное окно

let morebtns = document.querySelectorAll('.description-btn'),
    overwind = document.querySelector('.overlay'),
    closebtn = document.querySelector('.popup-close');

    for (let i = 0; i < morebtns.length; i++) {
        morebtns[i].addEventListener('click', function() {
            overwind.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });
    }
    closebtn.addEventListener('click', function() {
        overwind.style.display = 'none';
        for (let i = 0; i < morebtns.length; i++) {
                morebtns[i].classList.remove('more-splash');
        }
        document.body.style.overflow = '';
    });
});