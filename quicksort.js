async function partition(ele, low, high){
    ele[low].style.background='red'; //pivot element
    let i=low-1;

    for(let j = low; j <= high-1; j++){
        ele[j].style.background = 'blue';
        // pauseChamp
        await wait(delay);
        if(parseInt(ele[j].style.height) < parseInt(ele[high].style.height)){
            i++;
            let temp = ele[i].style.height;
            ele[i].style.height = ele[j].style.height;
            ele[j].style.height = temp;

            ele[i].style.background = 'yellow';
            if(i != j) ele[j].style.background = 'yellow';
            await wait(1000);
        }
        else{
            ele[j].style.background = 'purple';

        }
    }
    i++;
    await wait(1000);
    temp = ele[i].style.height;
    ele[i].style.height = ele[high].style.height;
    ele[high].style.height = temp;

    ele[i].style.background = 'green';
    await wait(1000);

    for(let k = 0; k < ele.length; k++){
        if(ele[k].style.background != 'green'){
            ele[k].style.background = 'whitesmoke';
        }
    }
    return i;
}

async function quicksort(ele, low, high){
    if(low< high){
        let piv = await partition(ele, low, high);
        await quicksort(ele, low ,piv-1);
        await quicksort(ele, piv+1 ,high);
    }
    else{
        if(low >= 0 && high >= 0 && low < ele.length && high < ele.length)
        {
            ele[low].style.background = 'green';
            ele[high].style.background = 'green';
        }
    }
}

const quickSortBtn = document.querySelector('.quickSort');
quickSortBtn.addEventListener('click', async function(){
    let ele = document.querySelectorAll('.bar');
    let s = 0;
    let e = ele.length - 1;
    disableSizeSlider();
    disableSortingBtn();

    document.querySelector('.newArray').disabled = true;
    await quicksort(ele, s, e);
    enableSizeSlider();
    enableSortingBtn();
    document.querySelector('.newArray').disabled = false;
    await wait(5000);
    createNewArray()
})