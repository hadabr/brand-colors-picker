const root = document.querySelector('html');
const body = document.querySelector('body');
const circles = document.querySelectorAll('circle');
const pHex = document.querySelector('p.hex:first-child');
const pCopy = document.querySelector('p.hex:last-child');
const _hex = () => {
    let rgb = Math.floor(Math.random()*255 + 1);
    rgb = rgb.toString(16);
    if (rgb.length <= 1) {return "0" + rgb.toString(16);}
    else {return rgb.toString(16);}  
}
const setColor = (elem, className) => {
    const temp = `#${_hex()}${_hex()}${_hex()}`;
    const cssVar = `--${className}`;
    root.style.setProperty(cssVar, temp);
    elem.dataset.color = temp;
}
let currentCircle = circles[0];
circles.forEach(elem => {
    setColor(elem, elem.className.baseVal);
    elem.addEventListener("mouseover", (e) => {
        pCopy.innerHTML = "";
        pHex.style = "";
        currentCircle.style = "";
        currentCircle = e.target;
        setTimeout(() => {
            currentCircle.style = "fill: #fff; opacity: .25;"
            pHex.innerHTML = e.target.dataset.color;
            body.style.setProperty('--bg', e.target.dataset.color);
        }, 300)
    });
});
pHex.addEventListener("click", () => {
    if (pHex.innerHTML !== "&nbsp;") {
        navigator.clipboard.writeText(pHex.innerText);
        pHex.style = "opacity: .4; transition: .2s"
        pCopy.innerHTML = "copied!";
    }
})
