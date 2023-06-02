let professor = {  // object 
    name: 'Henry',  // object property 
    age: 36,
    Post: 'Sr.Professor',
    subject: 'Psychology',
    rating: '9',
    degrees:{    // nested object 
        graduation : 'BSC',  // nested object property
        postGraduation : 'MSC',
        Phd :'Human_Nature'
    },
    certificates:['Professional Psychiatrist', 'Certificate in Human Behaviour', 'Certificate in social Psychology'],  
}
console.table(professor.certificates);
function concat(){
    let t='';
    for(const p in professor.degrees){
        t=`${t.concat(professor.degrees[p])} `
}
console.log(`Professor's Total Degrees are: ${t}`);
}
concat();


professor.totalexperience=`14 Years`;

