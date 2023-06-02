let n1=0, n2=1, n3, m=12, e="", e1=" ";

for(let i=0;i<m;i++) {
    e=e+n1+e1;
    // console.log(n1);
    n3=n1+n2;
    n1=n2;
    n2=n3;
}

console.log(`Fibonacci series upto first 12 digits is ${e}`);