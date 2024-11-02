//              OBJECT
//              -----


/*Syntax
    objectname={}

    
*/
// x=JSON.stringify(objectname)   # to convert object to string
// x=JSON.parse(objectname)    # to convert string to object





// 2 types ofn storage spaces
// Stack                 &               heap
// variables                      array
// string                           etc
// numbers
// boolean etc


// Stack

// CALL BY VALUE

function asd(){
    var a=100
    bsd(a)
    console.log(a);
    
}


asd()


function bsd(b){
    b+=1
    console.log(b);
    
}

/*

Output
-------
101
100
*/

// heap

// CALL BY REFERENCE


function ma(){
    a=[100]
    am(a)
    console.log(a[0]);
    
}


ma()

function am(b){
    b[0]+=1
    console.log(b[0]);
    
}

/*output
101
101



In this case the reference of a is assingning to b so the changes will affect both 
*/


// CLOSURE

function cl(a,b){
    function sur(){
        let c=a+b
        return c
    }
    return sur
}

x=cl(5,3)
y=x()
console.log(y);
