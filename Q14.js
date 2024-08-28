 
    //   const input=require("readline-sync");
    //    let n=input.questionInt("enter the number : ");
    //    let a=input.questionInt(`enter the ${1} number : `);
    //    for(let i=2; i<=n; i++){
        
    //        let b=input.questionInt(`enter the ${i} number : `);
    //        if(a>b){
    //         var max=a;
    //         var min=b;
    //        }else{
    //         var max=b;
    //         var min=a;
    //     }
    //         while(min!=0){
    //          let temp = min;
    //          min= max%min;
    //          max = temp;
    //         }
    //         min = b;
    // }
    // console.log(max);
    
            

    const input=require("readline-sync");
    let n=input.questionInt("enter the n number : ");
    let a=input.questionInt("enter the a number : ");
    let i = 2;
    while(i <= n){
        let b=input.questionInt("enter the a number : ");
        if(a > b){
            var max=a;
            var min=b;
        }else{
            var max=b;
            var min=a;
        }

        while(min!=0){
            let temp = min;
            min = max%min;
            max = temp;
        }
        min=b;
        i++;
    }
    console.log(max);