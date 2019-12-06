export default function Slider() {
    let items = document.querySelectorAll('.item');
    let currentItem = 0;
    let isEnabled = true;

    const showDescription = document.querySelectorAll('.description__show');
    showDescription.forEach( el => {
        el.addEventListener('click', (e) => {
            e.target.closest('.description').querySelector('.description__text').classList.toggle('visible')
        });
    })

    function changeCurrentItems(n) {
        currentItem = (n + items.length) % items.length;
    }

    function hideItem(direction) {
        isEnabled = false;
        items[currentItem].classList.add(direction);
        items[currentItem].addEventListener('animationend', function () {
            this.classList.remove('active', direction);
        });
    }

    function showItem(direction) {
        items[currentItem].classList.add('next', direction);
        items[currentItem].addEventListener('animationend', function () {
            this.classList.remove('next', direction);
            this.classList.add('active');
            isEnabled = true;
        });
    }

    function prevItem(n) {
        hideItem('to-right');
        changeCurrentItems(n - 1);
        showItem('from-left');
    }

    function nextItem(n) {
        hideItem('to-left');
        changeCurrentItems(n + 1);
        showItem('from-right');
    }

    const swipe = (el) => {
        const swiper = el;
        let startX = 0;
        let startY = 0;
        let distX = 0;
        let distY = 0;
        let startTime = 0;
        let elapsedTime = 0;

        let threshold = 150;
        let restraint = 100;
        let allowedTime = 700;

        swiper.addEventListener('mousedown', (e) => {
            startX = e.pageX;
            startY = e.pageY;
            startTime = new Date().getTime();
            e.preventDefault();
        }, false);

        swiper.addEventListener('mouseup', (e) => {
            distX = e.pageX - startX;
            distY = e.pageY - startY;
            elapsedTime = new Date().getTime() - startTime;
            if (elapsedTime <= allowedTime) {
                if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
                    if ((distX > 0)) {
                        if (isEnabled) {
                            prevItem(currentItem);
                        }
                    } else {
                        if (isEnabled) {
                            nextItem(currentItem);
                        }
                    }
                }
            }
            e.preventDefault();
        }, false);

        swiper.addEventListener('touchstart', (e) => {
            if (e.target.classList.contains('arrow') || e.target.classList.contains('control')) {
                if (e.target.classList.contains('left')) {
                    if (isEnabled) {
                        prevItem(currentItem);
                    }
                } else {
                    if (isEnabled) {
                        nextItem(currentItem);
                    }
                }
            }

            const touch = e.changedTouches[0];
            startX = touch.pageX;
            startY = touch.pageY;
            startTime = new Date().getTime();
            e.preventDefault();

        }, false);

        swiper.addEventListener('touchmove', e => e.preventDefault());

        swiper.addEventListener('touchend', (e) => {
            const touch = e.changedTouches[0];
            distX = touch.pageX - startX;
            distY = touch.pageY - startY;
            elapsedTime = new Date().getTime() - startTime;

            if (elapsedTime <= allowedTime) {
                if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
                    if ((distX > 0)) {
                        if (isEnabled) {
                            prevItem(currentItem);
                        }
                    } else {
                        if (isEnabled) {
                            nextItem(currentItem);
                        }
                    }
                }
            }

            e.preventDefault();
        });


        swiper.addEventListener('click', (e) => {
            if(e.pageX !== startX)  e.preventDefault();
         });

    }

    const el = document.querySelector('.carousel');
    swipe(el);

    document.querySelector('.control.left').addEventListener('click', function () {
        if (isEnabled) prevItem(currentItem);
    });

    document.querySelector('.control.right').addEventListener('click', function () {
        if (isEnabled) nextItem(currentItem);
    });

  

}
