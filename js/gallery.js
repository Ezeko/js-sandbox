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
    })
})


function closeImg(){
    document.querySelector('.new-img-background').remove();
}