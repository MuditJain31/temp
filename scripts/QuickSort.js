import { waitforme } from "./main.js";
let delay=document.querySelector('#speed').value;
delay = 1200-delay;
document.querySelector('#speed').addEventListener('input',()=>{
    delay = document.querySelector('#speed').value;
    delay=1200-delay;
})

export async function quickSort(divs,lengths){
    await sorting(divs,lengths,0,divs.length-1);

    console.log(lengths,divs);
}

async function colorRed(i,j,divs){
    for(let k=i;k<j;k++){
        divs[k].style.backgroundColor='red';
    }
}

async function sorting(divs , lengths, i,j){
    if(i>j){
        return;
    }
    await waitforme(delay);
    divs[j].style.backgroundColor = 'orange';
    let idx = await partition(divs,lengths,lengths[j],i,j);
    divs[idx].style.backgroundColor = 'green';
    await waitforme(delay);
    colorRed(idx+1,j+1,divs);
    let leftIdx = await sorting(divs,lengths,i,idx-1);
    let rightIdx = await sorting(divs,lengths,idx+1,j);
    return idx;
}

async function partition(divs,lengths,pivot,l,r){
    let i=l,j=l;

    while(i<=r){
        divs[j].style.backgroundColor='cyan';
        divs[i].style.backgroundColor='blue';
        await waitforme(delay);
        if(lengths[i]<=pivot){
            if(i!=j){
                swap(divs,lengths,i,j);
                divs[i].style.backgroundColor='cyan';
                divs[j].style.backgroundColor='blue';
                await waitforme(delay);
            }
            divs[i].style.backgroundColor='grey';
            divs[j].style.backgroundColor='red';
            j++;
            i++;
        }else{
            divs[i].style.backgroundColor='grey';
            i++;
        }
    }
    return j-1;
}

function swap(divs, lengths, i, j){
    let temp = lengths[i];
    lengths[i] = lengths[j];
    lengths[j] = temp;

    temp = divs[i].style.height;
    divs[i].style.height = divs[j].style.height;
    divs[j].style.height = temp;
}