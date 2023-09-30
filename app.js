const colorOne=document.getElementById('color-one');
const colorTwo=document.getElementById('color-two');
const bodybg=document.getElementById('bodybg');
const showData=document.getElementById('show-value');


function setbgColor(){
    bodybg.style.background=`linear-gradient(to right, ${colorOne.value},${colorTwo.value})`;
    showData.textContent= `linear-gradient(to right, ${colorOne.value},${colorTwo.value})`;
}

colorOne.addEventListener('input', setbgColor)
colorTwo.addEventListener('input',setbgColor)