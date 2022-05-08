





for(data of student){


    let final=(data.bn) >=33 &&(data.en)>=33 &&(data.math)>=33&&(data.s)>=33&&(data.ss)>=33&&(data.rel)>=33?finals='Pass':finals='Fail';
    let cgpa=(gpaCal(data.bn)+gpaCal(data.en)+gpaCal(data.math)+gpaCal(data.s)+gpaCal(data.ss)+gpaCal(data.rel))
cgpa=cgpa/6;

final=='Fail'?cgpa=0:cgpa,
console.log(`


    Name:       ${data.name}
    Class:      ${data.className}
    Roll No:    ${data.roll}
    ===========================================================================================================================>
    Subject         Marks             Gpa         Grad                CGPA                  Final Result 

    Bangla          ${data.bn}                  ${gpaCal(data.bn)}           ${gradeCal(data.bn)}                   ${cgpa}                     ${final}  
    English         ${data.en}                 ${gpaCal(data.en)}          ${gradeCal(data.en)}            
    Math            ${data.math}                 ${gpaCal(data.math)}        ${gradeCal(data.math)}          
    Science         ${data.s}                 ${gpaCal(data.s)}           ${gradeCal(data.s)}         
    Social-Science  ${data.ss}                 ${gpaCal(data.ss)}          ${gradeCal(data.ss)}            
     Religion        ${data.rel}                ${gpaCal(data.rel)}         ${gradeCal(data.rel)}        


`);
}