document.getElementById("mul").addEventListener("click",(event)=>{
    x=parseInt(document.getElementById("num1").value)
    str=``
    for(i=1;i<=10;i++){
        str+=` ${i} x ${x} = ${i*x} \n`
    }
    document.getElementById("result").textContent=`${str}`
    
    
})
document.getElementById("clr").addEventListener("click",(event)=>{
    document.getElementById("num1").value=" "
    // document.getElementById("num2").textContent=" "
    document.getElementById("result").textContent=" "
})