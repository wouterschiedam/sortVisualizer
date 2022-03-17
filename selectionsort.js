async function selectionSort(){
    const ele = document.querySelectorAll('.bar');

    for(let i = 0; i < ele.length; i++){
        let min = i;

        ele[i].style.background = 'yellow';
        for(let j = i+1; j< ele.length; j++){
            ele[j].style.background = 'blue';
            await wait(delay);
            if(parseInt(ele[j].style.height) < parseInt(ele[min].style.height)){
                if(min !== i){
                    ele[min].style.background = 'whitesmoke';
                }
                min = j;
            }
            else{
                ele[j].style.background = 'whitesmoke';
            }
        }
        await wait(1000);
        //swap
        let temp = ele[min].style.height;
        ele[min].style.height = ele[i].style.height;
        ele[i].style.height = temp;

        ele[min].style.background = 'whitesmoke';
        ele[i].style.background = 'green';
    }
}

const selectionSortBtn = document.querySelector('.selectionSort');
selectionSortBtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();

    document.querySelector('.newArray').disabled = true;

    await selectionSort();

    enableSortingBtn();
    enableSizeSlider();

    document.querySelector('.newArray').disabled = false;
})