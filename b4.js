    //   test(1)

const input=require("readline-sync");
let a=input.questionInt("enter the 1 number : ");
let b=input.questionInt("enter the 2 number : ");
let c=input.questionInt("enter the 3 number : ");
let p;
if(a==b && b==c){
   p=a*b*c;
   console.log(p);
}else if(a==b || b==c){
    let sum1=a+b;
    let sum2=b+c;
    let r1=sum1%c;
     r1=sum2%a;
    console.log(r1);
}else{
    if(a>b && a>c){
       let t= a**2;
        console.log(t);
    }else if(b>c && b>a){
       let  t1 = b**2;
        console.log(t1);
    }else{
       let t2 = c**2;
        console.log(t2);
    }
}
    