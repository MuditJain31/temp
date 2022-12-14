import {bubbleSort} from "./BubbleSort.js";
import {selectionSort} from "./SelectionSort.js";
import {insertionSort} from "./InsertionSort.js";
import { mergeSort } from "./MergeSort.js";
import{quickSort} from "./QuickSort.js";

let divs=new Array();
let lengths=new Array();

export function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

function disableButtons(){
    const buttons = document.querySelectorAll('button');
    const range = document.querySelector('#arraySize');
    buttons.forEach(elem=>{
        elem.classList.remove('hover');
        elem.disabled=true;
        elem.classList.add('disabled');
    });

    range.disabled=true;
}

function createArray(divs,length){
    console.log('inside create array');
    divs.length=0;
    lengths.length=0;
    let cont = document.querySelector('div.showArea');
    cont.innerHTML = '';
    let size = document.getElementById('arraySize').value;
    console.log(size);
    for(let i=0;i<size;i++){
        let temp = Math.floor((Math.random()*size) + 1);
        length.push(temp);
        let elem = document.createElement('div');
        elem.style.marginLeft=`${0.5}%`;
        elem.style.height=`${temp/size * 95}%`;
        elem.style.width=`${100/size - 0.5}%`;
        elem.style.backgroundColor='red';
        divs.push(elem);
        cont.appendChild(elem);
    }
    console.log(divs.length);
}

document.querySelector('#arraySize').addEventListener('input',()=>{
    createArray(divs,lengths);
})

function executeAlgo(button,divs,lengths){
    switch(button.innerText){
        case "Bubble Sort":console.log("invoked successfully");
                            bubbleSort(divs,lengths);
                            break;
        case "Selection Sort":console.log("invoked successfully");
                              selectionSort(divs,lengths);
                              break;
        case "Insertion Sort":console.log("invoked successfully");
                              insertionSort(divs,lengths);
                              break;
        case "Merge Sort":console.log("merge invoked successfully");
                          mergeSort(divs,lengths);
                          console.log(lengths,divs);
                          break;
        case "Quick Sort":console.log("merge invoked successfully");
                          quickSort(divs,lengths);
                          console.log(lengths,divs);
                          break;
    }
}

function main(){
    
    

    createArray(divs,lengths);

    document.querySelector('button.generateNewArray').addEventListener('click',()=>{
        createArray(divs,lengths);
    })

    const buttons = document.querySelectorAll('div.sortingAlgos button');
    console.log(buttons);
    buttons.forEach(element => {
        element.addEventListener('click',()=>{
            disableButtons();
            element.classList.add('clicked');
            console.log("inside event listener");
            executeAlgo(element,divs,lengths);
        })
    });

}
main();


