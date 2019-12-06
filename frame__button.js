const iframe = document.querySelector('.iframe');
iframe.style.cssText = 'position: absolute; top: 0; bottom: 0; margin: 0; padding: 0;';

const buttons = document.createElement('div');
buttons.style.cssText = 'position: fixed; top: 50%; right: 5px; display: flex; flex-direction: column; align-item: space-betwwen;';

const back = document.createElement('button');
back.innerHTML = 'back';
back.style.cssText = `width: 70px; height: 50px; margin: 10px; background: #999999bb; color: #ffffff;
  border: 0; border-radius: 50%; zIndex: 100; outline: none;`;

const size = document.createElement('button');
size.innerHTML = 'Mobile'
if (window.innerWidth < 375) size.style.display = 'none';

size.style.cssText = `width: 70px; height: 50px; margin: 10px; background: #999999bb; color: #ffffff;
border: 0; border-radius: 50%; z-Index: 100; outline: none;`;

buttons.appendChild(size);
buttons.appendChild(back);
document.body.appendChild(buttons);
document.body.style.background = '#999999';
document.body.setAttribute('style', 'overflow-X: hidden; margin: 0;');

// тут запутался !
window.addEventListener('resize', () => {
    size.innerHTML = (iframe.offsetWidth <= 400) ? 'Desktop' : 'Mobile';
    size.style.visibility = (window.innerWidth < 400) ? 'hidden' : 'visible ';
    console.log(iframe.offsetWidth)
});



back.addEventListener('click', () => document.location.href = 'index.html');

size.addEventListener('click', () => {
    if (iframe.offsetWidth > 400) {
        iframe.setAttribute('style','width: 400px; position: absolute; left: 50%; transform: translateX(-50%);');
        size.innerHTML = (size.innerHTML === 'Mobile') ? 'Desktop' : 'Mobile';
        
    } else {
        iframe.setAttribute('style','width: 100%; position: absolute; left: 0; right: 0;');
        size.innerHTML = (size.innerHTML === 'Mobile') ? 'Desktop' : 'Mobile';
    }

});