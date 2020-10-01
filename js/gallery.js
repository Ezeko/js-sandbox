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
        newBg.setAttribute('onclick', 'closeImg()')
    })
})


function closeImg(){
    document.querySelector('.new-img-background').remove();
}