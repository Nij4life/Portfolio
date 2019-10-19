const wrapper = document.querySelector('.wrapper');

const buttons = document.createElement('div');
buttons.style.cssText = `position: fixed; top: 50%; right: 0;
 display: flex; flex-direction: column; justify-content: space-between; width: 90px; height: 120px`;

const back = document.createElement('button');
back.innerHTML = 'back';
back.style.cssText = 'width: 70px; height: 50px; background: #999999dd; color: #ffffff;  border: 0; border-radius: 50%; zIndex: 100; outline: none;';

const size = document.createElement('button');
size.innerHTML = 'Desctop'
if (window.innerWidth < 375) size.style.display = 'none';

size.style.cssText = 'width: 70px; height: 50px; background: #999999dd; color: #ffffff; border: 0; border-radius: 50%; z-Index: 100; outline: none;';

buttons.appendChild(size);
buttons.appendChild(back);
document.body.appendChild(buttons);



window.addEventListener('resize', () => {
    size.innerHTML = (window.innerWidth < 640) ? 'Mobile' : 'Desctop';
    size.style.display = (window.innerWidth < 370) ? 'none' : 'block';
    console.log(window.innerWidth < 640);
});

back.addEventListener('click', () => document.location.href = '../../index.html');

size.addEventListener('click', () => {
    if (wrapper.offsetWidth > 600) {
        document.body.setAttribute('style','width: 400px');
        document.body.style.margin = 'auto';
        wrapper.setAttribute('style','height: 640px; overflow: scroll;');

        
    } else {
        document.body.setAttribute('style','width: 100%');
        wrapper.setAttribute('style','height: 100%;');
    }

});