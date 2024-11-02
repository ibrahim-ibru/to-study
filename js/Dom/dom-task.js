// function squareNumber(){
//     let x=parseInt(document.getElementById("num").value)
//     let sq=x*x
//     document.querySelector(".res").innerHTML=`<h1>${sq}</h1>`
//     // document.getElementById("num").value=`${sq}`   
// }

// TASK2
// _______________________________________________________________________________


document.getElementById("add").addEventListener("click",(event)=>{
    let num1=parseInt(document.getElementById("num1").value)
    let num2=parseInt(document.getElementById("num2").value)
    
    document.getElementById("result").textContent=`sum of ${num1} and ${num2} = ${num1+num2}`
})

document.getElementById("sub").addEventListener("click",(event)=>{
    let num1=parseInt(document.getElementById("num1").value)
    let num2=parseInt(document.getElementById("num2").value)
    
    document.getElementById("result").textContent=`diffrence of ${num1} and ${num2} = ${num1-num2}`
})

document.getElementById("mul").addEventListener("click",(event)=>{
    let num1=parseInt(document.getElementById("num1").value)
    let num2=parseInt(document.getElementById("num2").value)
    
    document.getElementById("result").textContent=`product of ${num1} and ${num2} = ${num1*num2}`
})

document.getElementById("di").addEventListener("click",(event)=>{
    let num1=parseInt(document.getElementById("num1").value)
    let num2=parseInt(document.getElementById("num2").value)
    
    document.getElementById("result").textContent=`coitent of ${num1} and ${num2} = ${num1/num2}`
})

document.getElementById("clr").addEventListener("click",(event)=>{
    document.getElementById("num1").value=" "
    document.getElementById("num2").value=" "
    document.getElementById("result").textContent=" "
})