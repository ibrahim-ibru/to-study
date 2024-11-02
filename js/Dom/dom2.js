// let btn=document.getElementById("btn")
// btn.addEventListener("mouseover",(event)=>{
//     console.log(`hai`);
    
// })

// document.getElementById("txt").addEventListener("change",(event)=>{
//     console.log(event.target.value);
    
// })

document.getElementById("circle").addEventListener("mousemove",(event)=>{
    document.getElementById("circle").style.top=event.clientY+"px"
    document.getElementById("circle").style.left=event.clientX+"px"
})