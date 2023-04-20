let openMenu = document.querySelector('.openMenu');
let closeMenu = document.querySelector('.closeMenu');
let menu = document.querySelector('.menu');

openMenu.onclick=()=>{
	menu.style.height='150px';
}
menu.onclick=()=>{
	menu.style.height='0px';
}
// let ads= document.querySelector('.ads')
// let body=document.querySelector('.body')
// let closseMenu= document.querySelector('.closseMenu')
// let close= document.querySelector('.close')
// setTimeout(()=>{
//       ads.style.display='flex'
      
// },500)
// setTimeout(()=>{
//       ads.style.opacity='5'
//       body.style.opacity='0.1'

// },500)

// closseMenu.onclick=()=>{
//   ads.style.display='none'
//   body.style.opacity='1'
//  }


// let nextBtn = document.querySelector('.next-btn')
// let prevBtn = document.querySelector('.prev-btn')
// let slider = document.querySelector('.slider')
// let slider1= document.querySelector('.slider1')
// let slider2= document.querySelector('.slider2')
// let slider3= document.querySelector('.slider3')
// step=0
// nextBtn.onclick=()=>{
// 	if(step<slider.length -1){
// 		slider[step].style.opacity=0
// 		step++;
// 		slider[step].style.opacity=1
// 	}else{
// 		slider[step].style.opacity=0;
// 		step= 0;
// 		slider[step].style.opacity=1;
// 	}
// }


// prevBtn.onclick=()=>{
// 	if(step>0){
// 		slider[step].style.opacity=0;
// 		step--;
// 		slider[step].style.opacity=1;
// 	}else{
// 		slider[step].style.opacity=0;
// 		step=slider.length-1;
// 		slider[step].style.opacity=1;
// 	}
// }

let slider = document.querySelector('.slider');
let slider1 = document.querySelector('.slider1');
let slider2 = document.querySelector('.slider2');
let slider3 = document.querySelector('.slider3');


setTimeout(()=>{
     slider1.style.display='block'
     slider1.style.transition='2s'   
},500);

setTimeout(()=>{
     slider1.style.display='none'
      
},2300);
setTimeout(()=>{
     slider2.style.display='block'
      
},2200);

setTimeout(()=>{
     slider2.style.display='none'
      
},4300);

setTimeout(()=>{
     slider3.style.display='block'
      
},4200);
setTimeout(()=>{
     slider3.style.display='none'
      
},6500);
setTimeout(()=>{
     slider1.style.display='block'
      
},6400);

