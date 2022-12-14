import {waitforme} from "./main.js";
let delay=document.querySelector('#speed').value;
delay = 1200-delay;
document.querySelector('#speed').addEventListener('input',()=>{
    delay = document.querySelector('#speed').value;
    delay=1200-delay;
})
export async function mergeSort(divs,lengths){
    await sorting(divs,lengths,0,divs.length-1);
}

async function sorting(divs,lengths,i,j){
    if(i>=j){
        return;
    }
    let mid = i + Math.floor((j-i)/2);
    await sorting(divs,lengths,i,mid);
    await sorting(divs,lengths,mid+1,j);
    await waitforme(delay/5);
    await sortArray(divs,lengths,i,mid,j);
    await waitforme(delay/5);
}

async function sortArray(divs,lengths,l,mid,r){
    let i=l;
    let j=mid+1;
    let tempLengths = [];
    for(let k=l;k<=mid;k++){
        divs[k].style.backgroundColor='blue';
        await waitforme(delay/4);
    }
    for(let k=mid+1;k<=r;k++){
        divs[k].style.backgroundColor='cyan';
        await waitforme(delay/4);
    }
    while(i<=mid && j<=r){
        if(lengths[i]<=lengths[j]){
            tempLengths.push(lengths[i]);
            i++;
        }else{
            tempLengths.push(lengths[j]);
            j++;
        }
    }

    while(i<=mid){
        tempLengths.push(lengths[i]);
        i++;
    }

    while(j<=r){
        tempLengths.push(lengths[j]);
        j++;
    }

    if(l==0 && r==divs.length-1){
        for(let start=l,temp=0; start<=r;temp++,start++){
            lengths[start] = tempLengths[temp];
            await waitforme(delay/5);
            divs[start].style.height = `${tempLengths[temp]/divs.length * 95}%`;
            divs[start].style.backgroundColor='green';
        }
    }else{
        for(let start=l,temp=0; start<=r;temp++,start++){
            lengths[start] = tempLengths[temp];
            await waitforme(delay/5);
            divs[start].style.height = `${tempLengths[temp]/divs.length * 95}%`;
            divs[start].style.backgroundColor='orange';
        }
    }   
}