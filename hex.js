const arr=[1,2,3,4,5,6,7,8,9,0,"A","B","C","D","E","F"];
const btn=document.getElementById('btn');
const backg=document.querySelector('.back');
const colorr=document.querySelector('.color');

document.body.style.backgroundColor =  "#F1f5f8";
    colorr.innerText="#F1f5f8"

btn.addEventListener("click",function(){
    
    let clr="#";
    for(i=0;i<6;i++)
    {
        clr+=arr[randomnum()];
    }
    document.body.style.backgroundColor =  clr;
    colorr.innerText=clr;
})

function randomnum()
{
    return Math.floor(Math.random() * arr.length);
}