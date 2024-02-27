const n = 20;
const Arr = [];

function Init() {
    for(i=0; i<n; i++) {
        Arr[i] = Math.random();
    }
    showBars();
}

function Play() {
    const copy = [...Arr]
    const swaps = bubbleSort(copy);
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
    }, 100);
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

Init();