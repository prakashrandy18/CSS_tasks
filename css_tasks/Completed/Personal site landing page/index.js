const round1 = document.querySelectorAll('#round1');
const line1 = document.querySelectorAll('#line1');

const left1 = document.querySelectorAll('#info-left1');
const right1 = document.querySelectorAll('#info-right1');

const round2 = document.querySelectorAll('#round2');
const line2= document.querySelectorAll('#line2');

const left2 = document.querySelectorAll('#info-left2');
const right2 = document.querySelectorAll('#info-right2');

const social_media = document.getElementById('social-meida');


                                        

function showAnimation1(){
    round1.forEach(e => e.classList.add('round-ani'));
    
    line1.forEach(e => e.classList.add('line-ani'));
    
    left1.forEach(e => e.classList.add('left'));
    
    right1.forEach(e => e.classList.add('right'));
    
}

function showAnimation2(){
    round2.forEach(e => e.classList.add('round-ani'));
    
    line2.forEach(e => e.classList.add('line-ani'));
    
    left2.forEach(e => e.classList.add('left'));
    
    right2.forEach(e => e.classList.add('right'));
    
}



window.addEventListener('scroll', ()=>{
  
    //alert(window.pageYOffset);
    var scrollValue = window.pageYOffset;
    
    if(scrollValue >= 3 && scrollValue <= 300){
        social_media.classList.add('center');
    }
    
    else if(scrollValue >= 370 && scrollValue <= 1000){
      showAnimation1();     
    }
    else if(scrollValue >= 1000 &&scrollValue <= 1530){
        showAnimation2();
    }
//    const { scrollTop, scrollHeight, clientHeight} = document.documentElement;
//    
//    //console.log(scrollTop );
//    
//    //console.log({scrollTop, scrollHeight, clientHeight});
//    if(scrollTop + clientHeight >= scrollHeight - 10){
//      // showAnimation();
//   
//    }
//    
    
});
