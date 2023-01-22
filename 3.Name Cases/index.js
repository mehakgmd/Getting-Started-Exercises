name01 = "mehak";
console.log(name01.toUpperCase());
console.log(name01.toLowerCase());
function TitleCase(n){
return  n.split(' ')
        .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
         .join(' ');
       
}

console.log(TitleCase(name01));