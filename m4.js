   const input=require("readline-sync");
   let a=input.questionInt("enter the number :");
   let b=input.questionInt("enter the number :");
   let c=input.questionInt("enter the number :");
   let d=input.questionInt("enter the number :");
   let e=input.questionInt("enter the number :");
   let f=input.questionInt("enter the number :");
   let g=input.questionInt("enter the number :");
   let h=input.questionInt("enter the number :");

   if(a>b){
    m1=a;
    s1=b;
   }else{
    m1=b;
    s1=a;
   }
   if(c>d){
    m2=c;
    s2=d;
   }else{
    m2=d;
    s2=c;
   }
   if(e>f){
    m3=e;
    s3=f;
   }else{
    m3=f;
    s3=e;
   }
   if(g>h){
    m4=g;
    s4=h;
   }else{
    m4=h;
    s4=g;
   }
   if(m1>m2){
    max1=m1;
    min1=m2;
    r=s1;
   }else{
    max1=m2;
    min1=m1;
    r=s2;
   }
   if(m3>m4){
    max2=m3;
    min2=m4;
    r1=s3;
   }else{
    max2=m4;
    min2=m3;
    r1=s4;
   }
   if(max1>max2){
    b1=max1;
    b2=max2;
    b3=min1;
   }else{
    b1=max2;
    b2=max1;
    b3=min2;
   }
   if(r>r1){
    p1=r;
    p2=r1;
   }
   else{
    p1=r1;
    p2=r;
   }
   if(b2>b3){
    l=b2;
    sl=b3;
   }else{
    l=b3;
    sl=b2;
   }
   if(p1>l){
    console.log(p1);
   }else{
    console.log(l);
   }