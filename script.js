const Arr = [];
//const n = 20;

function Init() {
    const num = document.querySelector("#number").value;
    //const delay = document.querySelector("#delay").value;

    for(i=0; i<num; i++) {
        Arr[i] = Math.random();
    }
    showBars();
}

function Play() {
    const copy = [...Arr];
    const algo = document.querySelector("#algo").value;
    let swaps = [];

    switch (algo) {
        case "bubble":
            swaps = bubbleSort(copy);
            break;
        case "insertion":
            swaps = insertionSort(copy);
            break;
        default:
            throw new Error("No algo matches");
    }
    //const swaps = bubbleSort(copy);
    Animate(swaps); 
}

function Animate(swaps) {
    if(swaps.length == 0){
        showBars();
        return;
    } 
    const [i, j] = swaps.shift();
    [Arr[i], Arr[j]] = [Arr[j], Arr[i]];
    showBars([i, j]);
    setTimeout( () => {
        Animate(swaps);
    }, 200);
}

function showBars(ind) {
    container.innerHTML="";

    for(i=0; i<Arr.length; i++) {
        const bar = document.createElement("div");
        bar.style.height=Arr[i]*100+"%";
        bar.classList.add("bar");

        if(ind && ind.includes(i)){
            bar.style.backgroundColor="pink";
        }

        container.appendChild(bar);
    }
}

function bubbleSort(arr) {
    let swaps = [];
    do {
        var swapped = false;
        for(i = 1; i<Arr.length; i++){
            if(arr[i] < arr[i-1]){
                swapped = true;
                [arr[i], arr[i-1]] = [arr[i-1], arr[i]];
                swaps.push([i-1, i]);
            }
        }
    } while(swapped);
    return swaps;
}


function insertionSort(arr) {
    let swaps = [];
    for (i=1; i<Arr.length; i++ ) {
        const index = arr[i];
        let j = i-1;
        while(arr[j] > index &&  j >= 0) {
            arr[j+1] = arr[j];
            swaps.push([j+1, j])
            j--;
        }
        arr[j+1] = index;
    }
    return swaps;
}


Init();