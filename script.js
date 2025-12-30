let gp1=document.querySelector(".gp1")
let p1=document.querySelector(".p1")
let i1=document.querySelector(".i1")

let error1=document.querySelector(".error1")
let btn1=document.querySelector(".btn1")




let gp2=document.querySelector(".gp2")
let p2=document.querySelector(".p2")
let chance=document.querySelector(".chance")
let i2=document.querySelector(".i2")
let error2=document.querySelector(".error2")
let btn2=document.querySelector(".btn2")
let count =5


btn1.addEventListener("click", function(){
    if(!i1.value){
        error1.innerHTML="Please Enter a value";
    }else if(isNaN(i1.value)){
         error1.innerHTML="Please Enter a Number";

    }else if(!(i1.value<=10 && i1.value>0)){
         error1.innerHTML="Please Enter a Number 1 to 10";

    }else{
        gp1.style.display="none"


        gp2.style.display="block"
        chance.innerHTML=`chance : ${count}`
    }
})





btn2.addEventListener("click", function(){
    if(!i2.value){
        error2.innerHTML="Please Enter a value";
    }else if(isNaN(i2.value)){
         error2.innerHTML="Please Enter a Number";

    }else if(!(i2.value<=10 && i2.value>0)){
         error2.innerHTML="Please Enter a Number 1 to 10";

    }else{
        error2.innerHTML=" "
        if(count>1){
            count--
            chance.innerHTML=`Chance : ${count}`
            if(i1.value==i2.value){
                p2.innerHTML="PLAYER TWO IS WINNER";
                btn2.style.display="none"
                p2.style.color="green"
              
            }
        }else{
            count=0
            chance.innerHTML=`Chance : ${count}`
                 p2.innerHTML="PLAYER TWO IS LOSER";
                btn2.style.display="none"
                p2.style.color="red"

        }
    }
})