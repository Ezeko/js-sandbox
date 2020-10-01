let body = document.body;
let allImages = document.querySelectorAll("#thumbnail img");
let currentImage;
let windowWidth = window.innerWidth;

allImages.forEach( function(image, index){
    image.addEventListener('click', function(){
        //make extra background
        let newBg = document.createElement('div');
        body.appendChild(newBg);
        newBg.setAttribute('class', 'new-img-background');
        newBg.setAttribute('onclick', 'closeImg()');
        currentImage = index + 1;

        /** add image to the new div */
        let newImg = document.createElement('img');
        newImg.setAttribute('src', `/images/img/img${currentImage}.jpeg`);
        newImg.setAttribute('class', 'new-img');

        newBg.appendChild(newImg);

        //add next and prev buttons to page
        
        newImg.onload = ( ()=>{
            let imgWidth = this.width;
            //console.log(windowWidth)
            let width = ((windowWidth - imgWidth)/2) - 450 ;
            let prevBtn = document.createElement('button');
            body.appendChild(prevBtn);
            prevBtn.appendChild(document.createTextNode('Prev'));
            prevBtn.setAttribute('id', 'prev-btn');
            prevBtn.setAttribute('class', 'prev-btn');
            prevBtn.style.cssText = `left: ${width}px;`;
            prevBtn.setAttribute('onclick', "changeImage('prev')");

            /**next button */

            let nextBtn = document.createElement('button');
            body.appendChild(nextBtn);
            nextBtn.appendChild(document.createTextNode('Next'));
            nextBtn.setAttribute('id', 'prev-btn');
            nextBtn.setAttribute('class', 'next-btn');
            nextBtn.style.cssText = `right: ${width + 145}px;`;
            nextBtn.setAttribute('onclick', "changeImage('next')");


        })
    })
})


 function closeImg(){
    let prevBtns = document.querySelectorAll('.prev-btn')
    let nextBtns = document.querySelectorAll('.next-btn')

    prevBtns.forEach((prevBtn) => prevBtn.remove()); //remove all prev buttons
    nextBtns.forEach((nextBtn) => nextBtn.remove()); //remove all next buttons
    document.querySelector('.new-img-background').remove();
    
}

/** function to handle switch of image */

const changeImage = (status) => {
    
    //alert(`${status} button clicked`)
    let imgTag = document.querySelector('.new-img');
    let imageNum;

    if (status == 'next'){
        //if last image
        if ( currentImage === allImages.length){
            imageNum = 1;
        } else{
            imageNum = currentImage + 1;
        }
        //set image to next
        currentImage = imageNum;
        imgTag.setAttribute('src', `/images/img/img${imageNum}.jpeg`);
       
    }else {
        //if first image
        if ( currentImage === 1){
            imageNum = allImages.length;
        } else{
            imageNum = currentImage - 1;
        }
        //set image to next
        currentImage = imageNum;
        imgTag.setAttribute('src', `/images/img/img${imageNum}.jpeg`);
    }
}