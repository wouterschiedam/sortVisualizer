async function bubbleSort(){
    const ele = document.querySelectorAll(".bar");
    for(var i = 0; i < ele.length; i++){
        for(var j = 0; j<ele.length -i-1; j++){
            ele[j].style.background = '#f00cc6';
            ele[j+1].style.background = '#f00cc6';
            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height))
            {
                await wait(delay);
                var temp = ele[j].style.height;
                ele[j].style.height = ele[j+1].style.height;
                ele[j+1].style.height = temp;
            }
            ele[j].style.background = '#FFFF00';
            ele[j+1].style.background = '#FFFF00';
        } 
        ele[ele.length-1-i].style.background = '#17f00c';   
    }
    ele[0].style.background = '#17f00c';
}
const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    document.querySelector('.newArray').disabled =  true;
    await bubbleSort();
    enableSizeSlider();
    enableSortingBtn();
    document.querySelector('.newArray').disabled = false;
})