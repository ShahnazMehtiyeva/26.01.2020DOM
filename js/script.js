// let tag=document.querySelectorAll('.container div:first-child')[0];

// tag.innerText='Hello Neptun';
// //or

// let tag1=document.querySelectorAll('.container div');

// //tag.innerText='Hello Neptun';// bele deyismir for etmek lazimdi

// for (let i = 0; i < tag1.length; i++) {
//     tag1[i].style.color="red";
//     tag1[i].style.backgroundColor="yellow";
//     tag1[i].innerHTML="<b>Hello Neptun</b>";
    
// }

// let tor=document.querySelectorAll('.tor')[0];
// tor.classList.add('active')

// if(tor.classList.contains('active')){
//     alert('exist')



// let item=document.getElementsByTagName('li');
// for (let i = 0; i < item.length; i++) {
//     item[i].onclick= addactive;
// }

// function addactive(){
//     for (let i = 0; i < item.length; i++) {
//         item[i].classList.remove('active');
   
//     }
//     this.classList.add("active");
// }


//second way

// let item=document.getElementsByTagName('li');
// for (let i = 0; i < item.length; i++) {
//     item[i].addEventListener("click",function(){
//     for (let i = 0; i < item.length; i++) {
//         item[i].classList.remove('active');
   
//     }
//     this.classList.add("active");
// }



// let icon=document.getElementsByTagName('i')[0];
// icon.onclick=changeicon;
// function changeicon() {
//     if(this.classList.contains('fa-arrow-up')){
//         this.classList.replace('fa-arrow-up','fa-arrow-down')
//     }else{
//         this.classList.replace('fa-arrow-down','fa-arrow-up')
//     }
// }



// let headers=document.querySelectorAll('.header');
// let ptag=document.querySelectorAll('.content p');
// let icons=document.querySelectorAll('.header i');
// let lastActiveIndex;
// for (let k  = 0; k < headers.length; k++) {

//     headers[k].addEventListener('click',function () {
//         for (let h = 0; h < ptag.length; h++) {
//             if(lastActiveIndex!=k){
//                 ptag[h].classList.remove('active2');
//                 icons[h].classList.replace('fa-minus','fa-plus')
//             }
//         }
//         if(ptag[k].classList.contains('active2')){
//             ptag[k].classList.remove('active2');
//             icons[h].classList.replace('fa-minus','fa-plus')
//         }else{
//             lastActiveIndex=k;
//             ptag[k].classList.add('active2');
//             icons[k].classList.replace('fa-plus','fa-minus')
//         }
    
//     });
    
// }


let icons=document.querySelectorAll('.content i');
let texts=document.querySelectorAll('.text');

let lastindex;
for (let i = 0; i < icons.length; i++) {
    icons[i].addEventListener('click',function(){

        for (let h = 0; h < texts.length; h++) {
            if(i!=lastindex){
                texts[h].classList.remove('active3');
            }
        }

        if(texts[i].classList.contains('active3')){
            texts[i].classList.remove('active3');
        }else{
            lastindex=i;
            texts[i].classList.add('active3'); 
        }

    });
    
}