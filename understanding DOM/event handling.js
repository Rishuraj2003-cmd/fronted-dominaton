/*
 jab bhi aap kisi element par kisi bhi prakaar ka koi action krte hoto 
waha par event by default automatically raise hota hai ab agar aapne koi
 event listener nahi banaya hai to wo event ignore krdiya jaata hai par 
 agar aapne listener banaya hai us event par to wo event ignore nahi kiyà 
 jaayega balki uska listener chalega

 */

 var btn = document.querySelector("button")
 btn.addEventListener("mouseleave",function(){
    btn.textContent="color changed";
    btn.style.backgroundColor="red";
    btn.style.width="100px"
    btn.style.height="50px"
 })
 btn.addEventListener("mouseover",function(){
    btn.textContent="hey"
    btn.style.backgroundColor="white"
    alert("Ok kr bsdk")
 })


//  event object

