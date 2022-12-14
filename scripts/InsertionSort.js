//color implemetation remaining
import { waitforme } from "./main.js";
let delay=document.querySelector('#speed').value;
delay = 1200-delay;
document.querySelector('#speed').addEventListener('input',()=>{
    delay = document.querySelector('#speed').value;
    delay=1200-delay;
})
export async function insertionSort(divs,lengths){
    divs[0].style.backgroundColor = 'green';
    for(let i=1;i<lengths.length;i++){
        for(let j=i;j>0;j--){
            divs[j].style.backgroundColor='blue';
            await waitforme(delay);
            divs[j-1].style.backgroundColor='cyan';
            if(lengths[j]<lengths[j-1]){
                await waitforme(delay);
                swapLen(j,j-1,lengths);
                swapDiv(j,j-1,divs);
                divs[j].style.backgroundColor='cyan';
                divs[j-1].style.backgroundColor='blue';
                await waitforme(delay);
                divs[j].style.backgroundColor='green';
                divs[j-1].style.backgroundColor='green';
            }else{
                await waitforme(delay);
                divs[j-1].style.backgroundColor='green';
                divs[j].style.backgroundColor='green';
                await waitforme(delay);
                break;
            }
        }
    }
}

function swapLen(i,j,lengths){
    let temp = lengths[i];
    lengths[i] = lengths[j];
    lengths[j] = temp;
}

function swapDiv(i,j,divs){
    let temp = divs[i].style.height;
    divs[i].style.height = divs[j].style.height;
    divs[j].style.height = temp;
}