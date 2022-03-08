'use strict';


//auto gallery

// background img

const gallery=document.querySelector('.gallery');
const galleryUlLi=gallery.querySelectorAll('ul>li');

const galleryBgImg=[];

for(let i=0;i<galleryUlLi.length;i++){
    
    galleryBgImg.push(`url(img/sec1/sec1_img${i}.jpg) no-repeat 50%/cover`);

    galleryUlLi[i].style.background=galleryBgImg[i];

};


// auto gallery ex 

let i=-1;


const items=document.querySelector('.items');
const itemsUl=items.querySelector('ul');   
const itemsUlLi=itemsUl.querySelectorAll('li');  


function autoGallery(){
    i++;
    
    let gap=galleryUlLi[1].offsetLeft-galleryUlLi[0].offsetLeft;   
    let goto=(-gap*i)+'px';
    gallery.style.left=goto;   
    gallery.style.transition='all 0.5s';

    itemsUlLi.forEach((element,index)=>{
        if(i==index){      
            element.classList.add('on')
        }else{
            element.classList.remove('on')
        };
    });

     console.log(galleryUlLi.length);  
    if(i>=galleryUlLi.length-1){
        i=-1;
    };

};

let setIn=setInterval(autoGallery, 3000);



// mouseover, mouseout ex

const overStop=document.querySelectorAll('.overStop');  


overStop.forEach((el,idx)=>{
    el.addEventListener('mouseover',()=>{    
        clearInterval(setIn);  
    });
    el.addEventListener('mouseout',()=>{   
        setIn=setInterval(autoGallery,5000);
    });
});




// li click event

itemsUlLi.forEach((el,idx)=>{
    el.addEventListener('click',()=>{

    let gap=galleryUlLi[1].offsetLeft-galleryUlLi[0].offsetLeft;  
    let goto=(-gap*idx)+'px';  
    gallery.style.left=goto;
    gallery.style.transition='all 0.5s';

    i=idx;
    });
});



// li on click ex

itemsUl.addEventListener('click', function(e){    


    itemsUlLi.forEach((el,idx)=>{
        if(e.target==el){    
                           
            let gap=galleryUlLi[1].offsetLeft-galleryUlLi[0].offsetLeft;
            let goto=(-gap*idx)+'px';
            gallery.style.left=goto;
            gallery.style.transition='all 0.5s';

            el.classList.add('on');  

            i=idx;

        }else{
            el.classList.remove('on'); 
        };

        if(i>=galleryUlLi.length-1) i=-1;        
    });
});




// arrow click event  


const centerBtn=document.querySelector('.center-btn');
const arrowBtn=centerBtn.querySelectorAll('span.arrow');


centerBtn.addEventListener('click', (e)=>{

    const eTarget=e.target;

    arrowBtn.forEach((element,index)=>{
        if(element==eTarget){   
            if(index==0){    
                
                if(i<=0) i=galleryUlLi.length;
                
                i--;
                
                let gap=galleryUlLi[1].offsetLeft-galleryUlLi[0].offsetLeft;
                let goto=(-gap*i)+'px';
                gallery.style.left=goto;
                gallery.style.transition='all 0.4s';
                
                
                itemsUlLi.forEach((element, index)=>{
                    if(i==index){
                        element.classList.add('on')
                    }else{
                        element.classList.remove('on')
                    };
                });


            }else if(index==1){

                if(i>=galleryUlLi.length-1) i=-1; 
                
                i++;

                let gap=galleryUlLi[1].offsetLeft-galleryUlLi[0].offsetLeft;
                let goto=(-gap*i)+'px';
                gallery.style.left=goto;
                gallery.style.transition='all 0.5s';
            

                itemsUlLi.forEach((element, index)=>{
                    if(i==index){
                        element.classList.add('on')
                    }else{
                        element.classList.remove('on')
                    };
    
                });
            };
        };    
    });
});


(()=>{
    autoGallery();
})();



//pop-up

 
const secCon=document.querySelector('.sec-con2');
const secConUl=secCon.querySelector('ul');
const secConUlLi=secConUl.querySelectorAll('li');


const popUp=document.querySelector('.popUp');
const popCon=popUp.querySelector('.pop-con');
const popImg=popCon.querySelector('img');



secConUl.addEventListener('click',(e)=>{
     
    const eTarget=e.target;  
    const cTarget=e.currentTarget;    
    
    const liTag=eTarget.parentElement; 
    const imgEl=liTag.children[0];  
    
    const imgSrc=imgEl.getAttribute('src');
    const imgAlt=imgEl.getAttribute('alt');


    popCon.children[0].setAttribute('src',imgSrc);
    popCon.children[0].setAttribute('alt',imgAlt);

    popUp.style.display="flex";
    popUp.classList.add('popAni');


});

popUp.addEventListener('click',(e)=>{
    // popUp.style.opacity='0';
    popUp.style.display='none';

});