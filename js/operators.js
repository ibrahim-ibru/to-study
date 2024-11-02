/*SYNTAX

if(condition){
    true statement
}
*/
// eg:
a=19

if(a<=18){
    console.log("Eligible");
    
}else{
    console.log("Not Eligible");
    
}




// eg 2:
s=56

if(s%2==0){
    console.log("even");
    
}else{
    console.log("Odd");
    
}


// eg for if else

// mark1=parseInt(prompt("Enter chem mark"))
// mark2=parseInt(prompt("Enter physics mark"))
// mark3=parseInt(prompt("Enter maths mark"))
// tot=300
// sum=mark1+mark2+mark3
// per=(sum/tot)*100

// if(per>=70){
//     console.log("Eligible for Entrence");
//     alert(per+"%"+" " +" Eligible for Entrence");
// }
// else{
//     alert(per+"%"+" " +"Not Eligible");
//     console.log(" Not eligible");
// }

/* NOte:
    Arithematic operator:(+,-,*,/)
    Assignment operator:(=)

        a=a+5     {a+=5}
    Comparison operator:
    (==):double check
            it will check that is equal
            eg:if(a==1){
                log(true)            
            }
    (===):triple check (Strict check)
            it will check the data type too
    
    (!=):Not equal
    (!==): Strict not equal
    (>): greaterthan
    (<): Lessthan

    Logical operator: (&&):and
                      (||):Or
                      (!):Not
                      (a<b && a>b)
                      true and false = false
                      1      *    0 = 0
                      (a<b || a>b)
                      true Or false = True
                      1      +    0 = 1


    Unary operator:(+,-)
        eg:
            5+"5"=55 #(number + string = String)
            5+ +"5"=10 #(number + "string" = number)  #  +"5"=positive number
            5-"5"=0 #(number - string = number)
            5+ -"5"=0 #(number + -"string" = number)  #  -"5": negative number
            5- -"5"=10 #(number - -"string" = number) #   

*/