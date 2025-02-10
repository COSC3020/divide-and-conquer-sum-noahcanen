function divideAndConquerSum(x) {
    if(x.length==0){
        return 0;
    } 
    if(x.length==1){
        return x[0];
    } 
    if(x.length==2){
        return x[0]+x[1];
    } 
    else
    {
        var sum = 0;
        var  mid1 = Math.floor((x.length)/3);  
        var  mid2 = Math.floor(((x.length)/3)*2); 
        const s1= x.slice(0, mid1);
        const s2= x.slice(mid1,mid2);
        const s3= x.slice(mid2);
        sum = divideAndConquerSum(s1)+sum;
        sum = divideAndConquerSum(s2)+sum;
        sum = divideAndConquerSum(s3)+sum;
         
    }
    return sum;
}
