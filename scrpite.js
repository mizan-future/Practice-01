let btn = document.getElementById('button');
let button = document.querySelector('.btn');
let body = document.querySelector('body');
function number(){
    let math = Math.random() * 255;
    let fixed = math.toFixed();
    return fixed;
};
btn.addEventListener('click', function(){
    body.style.background = `rgba(${number()}, ${number()}, ${number()})`    
});