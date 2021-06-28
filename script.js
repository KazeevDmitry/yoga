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

// let morebtns = document.querySelectorAll('.description-btn'),
//     overwind = document.querySelector('.overlay'),
//     closebtn = document.querySelector('.popup-close');

//     for (let i = 0; i < morebtns.length; i++) {
//         morebtns[i].addEventListener('click', function() {
//             overwind.style.display = 'block';
//             this.classList.add('more-splash');
//             document.body.style.overflow = 'hidden';
//         });
//     }
//     closebtn.addEventListener('click', function() {
//         overwind.style.display = 'none';
//         for (let i = 0; i < morebtns.length; i++) {
//                 morebtns[i].classList.remove('more-splash');
//         }
//         document.body.style.overflow = '';
//     });
// });
//ЭТОТ ВАРИАНТ РАБОТАЕТ

//ВТОРОЙ ВРИАНТ


let morebtns = document.querySelectorAll('.description-btn'),
    overwind = document.querySelector('.overlay'),
    closebtn = document.querySelector('.popup-close');

    function overlayshow() {
        overwind.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    }

    for (let i = 0; i < morebtns.length; i++) {
        morebtns[i].addEventListener('click', function() {
            overlayshow.apply(this);
        });
    }


    closebtn.addEventListener('click', function() {
        overwind.style.display = 'none';
        for (let i = 0; i < morebtns.length; i++) {
                morebtns[i].classList.remove('more-splash');
        }
        document.body.style.overflow = '';
    });

// Slider

    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    showSlides(slideIndex);

    function showSlides(n) {

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');
        // for (let i = 0; i < slides.length; i++) {
        //     slides[i].style.display = 'none';
        // }
        dots.forEach((item) => item.classList.remove('dot-active'));

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n) {
        showSlides(slideIndex += n); 
    }
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function() {
        plusSlides(-1);
    });

    next.addEventListener('click', function() {
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', function(event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
                currentSlide(i);
            }
    }
    });

// Calc

    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.innerHTML = 0;
    persons.value = '';
    restDays.value = '';


    persons.addEventListener('change', function() {
        personsSum = 0;
        personsSum = +this.value;
        //globPersonsSum = personsSum;
       
        if(restDays.value == '') {
            totalValue.innerHTML = 0;
            } else {
                total = (daysSum + personsSum)*4000;
                //totalValue.innerHTML = total;
                checkPlace.apply(place);
            }
    });

    restDays.addEventListener('change', function() {
        daysSum = 0;
        daysSum = +this.value;
        //globDaysSum = daysSum;
        //total = (daysSum + personsSum)*4000;

        if(persons.value == '') {
            totalValue.innerHTML = 0;
            } else {
                total = (daysSum + personsSum)*4000;
               // totalValue.innerHTML = total;
                checkPlace.apply(place);
            }
    });

    function checkPlace () {
        if (restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
            } else {
                let a = total;
                totalValue.innerHTML = a * this.options[this.selectedIndex].value;
            }
    }

    place.addEventListener('change', function() {
        checkPlace.apply(this);
    });


});