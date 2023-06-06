let s=`How are you mate`;
let t=s.split(` `), s1=``, s2=``, s3=``, final=``; emp=` `;
for(var i=0; i<t.length; i++){
    s1=t[i];
    s2=s1.substring(0,1).toUpperCase();
    s3=s1.substring(s1.length-1,s1.length).toUpperCase(); 
    final =final+s2+s1.substring(1,s1.length-1)+s3+emp; 
}
console.log(`Given string is: `)
console.log(s);

console.log(`String after captialising first and last alphabet of each word is: `);
console.log(final);