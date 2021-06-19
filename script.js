const arr=["red","green","blue","yellow"];
const btn=document.getElementById('btn');
const backg=document.querySelector('.back');
const colorr=document.querySelector('.color');

document.body.style.backgroundColor =  "#F1f5f8";
    colorr.innerText="#F1f5f8"

btn.addEventListener("click",function(){
    console.log("clicked");
    const randomn = randomnum();
    document.body.style.backgroundColor =  arr[randomn];
    colorr.innerText=arr[randomn]
})

function randomnum()
{
    return Math.floor(Math.random() * arr.length);
}