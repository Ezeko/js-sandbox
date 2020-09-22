function toggle(){
    let bar = document.querySelector(".fa-bars");
    let asideSpan = document.querySelector("aside ul li span");
    let asideUl = document.querySelector("aside ul");
    let aside = document.querySelector("aside")
    
    if( !bar.classList.contains('shown')){
        asideUl.style.visibility= 'visible';
        aside.style.width = "252px";
        bar.classList.add('shown');
        asideSpan.style.opacity = "0.5"

    }else{
        asideUl.style.visibility= 'hidden';
        bar.classList.remove('shown');
        aside.style.width = "50px";
    }

}