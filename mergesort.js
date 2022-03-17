async function merge(ele, low, mid, high){
    const n1 = mid-low+1;
    const n2 = high-mid;

    //Create temp array
    let L = new Array(n1);
    let R = new Array(n2);

    //Copy data to temp arrays
    for(var i=0; i < n1; i++){
        await wait(delay);
        // color
        ele[low + i].style.background = 'orange';
        L[i] = ele[low + i].style.height;
    }
    for(var i = 0; i < n2; i++){
        await wait(delay);
        // color
        ele[mid + 1 + i].style.background = 'yellow';
        R[i] = ele[mid + 1 + i].style.height;
    }
    await wait(delay);
    let p = 0;
    let j = 0;
    let k = low;
    
    while(p < n1 && j < n2){
        await wait(delay);
        if(parseInt(L[p]) <= parseInt(R[j])){
            if((n1 + n2) === ele.length)
            {
                ele[k].style.background = 'green';
            }
            else
            {
                ele[k].style.background = 'red';
            }
            
            ele[k].style.height = L[p];
            p++;
            k++;
        }
        else{
            // color
            if((n1 + n2) === ele.length)
            {
                ele[k].style.background = 'green';
            }
            else{
                ele[k].style.background = 'red';
            } 
            ele[k].style.height = R[j];
            j++;
            k++;
        }
    }

    while(p < n1){
        wait(delay);
        // color
        if((n1 + n2) === ele.length)
        {
            ele[k].style.background = 'green';
        }
        else
        {
            ele[k].style.background = 'red';
        }
        ele[k].style.height = L[p];
        p++;
        k++;
    }
    while(j < n2)
    {
        await wait(delay);

        // color
        if((n1 + n2) === ele.length){
            ele[k].style.background = 'green';
        }
        else{
            ele[k].style.background = 'red';
        }
        ele[k].style.height = R[j];
        j++;
        k++;
    }
}
async function mergeSort(ele, l,r){
    if(l >= r)
    {
        return;
    }
    const m = l + Math.floor((r - l) / 2);
    
    await mergeSort(ele, l, m);
    await mergeSort(ele, m + 1, r);
    await merge(ele, l, m, r);
}

const mergeSortBtn = document.querySelector('.mergeSort');
mergeSortBtn.addEventListener('click', async function(){
    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = parseInt(ele.length) - 1;
    disableSortingBtn();
    disableSizeSlider();
    document.querySelector(".newArray").disabled = true;
    await mergeSort(ele, l, r);
    enableSortingBtn();
    enableSizeSlider();

    document.querySelector(".newArray").disabled = false;
    await wait(5000);
    createNewArray()
})