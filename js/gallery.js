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
            console.log(windowWidth)
            let width = ((windowWidth - imgWidth)/2) - 450 ;
            let prevBtn = document.createElement('button');
            newBg.appendChild(prevBtn);
            prevBtn.appendChild(document.createTextNode('Prev'));
            prevBtn.setAttribute('id', 'prev-btn');
            prevBtn.style.cssText = `left: ${width}px;`;
            prevBtn.setAttribute('onclick', "changeImage('prev')");

            /**next button */

            let nextBtn = document.createElement('button');
            newBg.appendChild(nextBtn);
            nextBtn.appendChild(document.createTextNode('Next'));
            nextBtn.setAttribute('id', 'prev-btn');
            nextBtn.style.cssText = `right: ${width + 145}px;`;
            nextBtn.setAttribute('onclick', "changeImage('next')");


        })
    })
})


const closeImg = () =>{
    document.querySelector('.new-img-background').remove();
    document.querySelector('#prev-btn').remove();
}

/** function to handle switch of image */

