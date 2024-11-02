

// // mark1=parseInt(prompt("Enter chem mark"))
// // mark2=parseInt(prompt("Enter physics mark"))
// // mark3=parseInt(prompt("Enter maths mark"))
// // tot=300
// // sum=mark1+mark2+mark3
// // per=(sum/tot)*100

// // if(per>=70){
// //     console.log("Eligible for Entrence");
// //     alert(per+"%"+" " +" Eligible for Entrence");
// // }
// // else{
// //     alert(per+"%"+" " +"Not Eligible");
// //     console.log(" Not eligible");
// // }

// // a=1

// // do
// // {
// //     console.log(a);
// //     a++;
    
// // }while(a<10);

// // console.log("for loop");


// // for(i=2;i<=10;i+=2){

// //     console.log(i);

    
// // }
// // function hei(){
// //     if (true) {
// //         var a=10;
// //         console.log("inside block"+ a);
        
// //     }
// //     console.log("inside function"+a);
    
// // }

// // hei()

// // console.log("outside function"+a);
// // a=102
// // b=16
// // c=23

// // if(a>b){
// //     if(a>c){
// //         console.log("a is big");
        
// //     }else{
// //         console.log("c is big");
        
// //     }
// // }else if(b>c){
// //     console.log("b is big");
    
// // }else{
// //     console.log("c is big");
    
// // }

// //  // Outer loop for rows
// //  for (int i = 1; i <= rows; i++) {
// //     // Print spaces before the stars
// //     for (int j = 1; j <= rows - i; j++) {
// //         printf(" ");
// //     }
    
// //     // Print stars
// //     for (int k = 1; k <= i; k++) {
// //         printf("* ");
// //     }
    
// //     printf("\n");
// // for(i=1;i<=5;i++){
// //     str=''
// //     for(j=1;j<=5-i;j++){
// //         str+='    '
// //     }
// //     for(k=1;k<=i;k++){
// //         str+='   *    '
// //     }
// //     console.log(str);
// // }
// // for(i=1;i<=4;i++){
// //     str=''
// //     for(j=3;j>=4-i;j--){
// //         str+='    '
// //     }
// //     for(k=i;k<=4;k++){
// //         str+='   *    '
// //     }
// //     console.log(str);
// // }

// // i=parseInt(prompt("enter the number"))

// // function fact(x){

// //     if(x==0){
// //         return 1
// //     }else{
// //         return x*fact(x-1)
// //     }
// // }

// // y=fact(i)
// // console.log(`factorial of ${i} = ${y}`);

// // function fibonacci(n) {
// //     if (n <= 1) {
// //         return n;
// //     }
// //     return fibonacci(n - 1) + fibonacci(n - 2);
// // }

// // function printFibonacciSeries(num) {
// //     console.log("Fibonacci Series:");
// //     str=''
// //     for (let i = 0; i < num; i++) {
// //          if(i<=1){
// //             str+= i
// //         }else{

// //             str+=((i-1)+(i-1))
// //         }
// //     }
// //     console.log(str);
// // }

// // // Get the number of terms from the user
// // const num = parseInt(prompt("Enter the number of terms in the Fibonacci series: "));
// // printFibonacciSeries(num);



// // x=(a)=>{
// //     str=''
// //     for(i=0;i<=a;i++){
// //         if(i<=1){
// //             return i
// //         }else{
// //             str=(i-1)+(i-2)
// //             return str
// //         }
// //     }
// // }

// // a=parseInt(prompt("Enter the number"))
// // y=x(a)
// // console.log(y);


// // let a=[];

// // for(i=0;i<=100;i++){

// //     if(i%3==0&&i%5==0){
        
// //         a[i]="fizzbuzz";
// //     }else if(i%3==0){
// //         a[i]="fizz"
// //     }else if(i%5==0){
// //         a[i]="buzz"
// //     }else{
// //         a[i]=i;
// //     }
// // }
// // a.shift()
// // console.log(a);

// Todos=[]

// while(true){
//     const choice=prompt("[1] Add Todo \n [2] Display Todo \n[3] Edit Todo\n [4] Delete Todo \n [5] Exit ")
//     if(choice==1){
//         const todo=prompt("Add Todo")
//         Todos.push(todo)
//     }
//     else if(choice==2){
//         str=``
//         for(i=0;i<Todos.length;i++){
//             str+=`[${i+1}] ${Todos[i]} \n`
//         }
//         alert(str);
//     }
//     else if(choice==3){
//         str=``
//         for(i=0;i<Todos.length;i++){
//             str+=`[${i+1}] ${Todos[i]} \n`
//         }
//         const index=prompt(`${str} \n Enter Choice`)
//         const edit=prompt("Enter new value to update")
//         Todos[index-1]=edit;
//         alert("Successfully Updated :)")
//     }
//     else if(choice==4){
//         str=``
//         for(i=0;i<Todos.length;i++){
//             str+=`[${i+1}] ${Todos[i]} \n`
//         }
//         const index=prompt(`${str} \n Select the Choice to Delete`)
//         Todos.splice(index-1,1);
//         alert("#Deleted :)\n\n check if there is any problem")
//     }
//     else if(choice==5){
//         break;
//     }else{
//         alert("Invalid Choice!!!")
//     }
// }

// studs=[
//     {name:"alen",age:12,cls:6,address:"home"},
//     {name:"alan",age:13,cls:6,address:"home"},
//     {name:"peter",age:11,cls:6,address:"home"},
// ]
// // stud={name:"alen",age:12,cls:6,address:"home"};
// // console.log(stud);
// // console.log(stud.name);

// for(i=0;i<=studs.length;i++){
//     console.log(studs[i].name);
    
// }



Todos=[]

while(true){
    const choice=prompt("[1] Add Todo \n [2] Display Todo \n[3] Edit Todo\n [4] Delete Todo \n [5] Search Contact  \n [6] Exit")
    if(choice==1){
        let name=prompt("Add name")
        let num=prompt("add num")
        if(num.length<10 || num.length>10){
            alert(`Enter the valid number`)
            continue;
        }
        else{

            Todos.push({name,num})
        }
    }
    else if(choice==2){
        str=``
        for(i=0;i<Todos.length;i++){
            str+=`[${Todos[i].name}] : ${Todos[i].num} \n`
        }
        alert(str);
    }
    else if(choice==3){
        str=``
        for(i=0;i<Todos.length;i++){
            str+=` [${i+1}] [${Todos[i].name}] ${Todos[i].num} \n`
        }
        const index=prompt(`${str} \n Enter Choice`)
        const name=prompt(`Enter the new name to update`)
        const num=prompt("Enter new number to update")
        if(num.length<10 || num.length>10){
            alert(`Enter the valid number`)
        }
        else{
            Todos[index-1]={name,num};
            alert("Successfully Updated :)")
        }
    }
    else if(choice==4){
        str=``
        for(i=0;i<Todos.length;i++){
            str+=`[${i+1}] ${Todos[i].name} ${Todos[i].num} \n`
        }
        const index=prompt(`${str} \n Select the Choice to Delete`)
        Todos.splice(index-1,1);
        alert("#Successfully Deleted :)\n\n check if there is any problem")
    }
    else if(choice==5){
        let search=prompt(`Enter the name to search`)
        str=``
        a=1
        for(i=0;i<Todos.length;i++){
            if(Todos[i].name==search){
                str+=` [${a}] ${Todos[i].name} :\n \t ${Todos[i].num} `
            }
        }
        if(str.length==0){
            alert(`Can't find a contact with the name ${search}`)
        }else{
            alert(str)
        }
    }
    else if(choice==6){
        break;
    }else{
        alert("Invalid Choice!!!")
    }
}