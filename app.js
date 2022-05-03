







for(data of student){

console.log(`

    Name:       ${data.name}
    Class:      ${data.className}
    Roll No:    ${data.roll}
    =====================================================================================================
    Subject         Marks            Gpa                                    Grade                    CGPA                   
    Bangla          ${data.bn}          ${gpaCal(data.bn)}           ${gradeCal(data.bn)}    ${(gpaCal(data.bn)+gpaCal(data.en)+gpaCal(data.math)+gpaCal(data.s)+gpaCal(data.ss)+gpaCal(data.rel))/6}         
    English         ${data.en}          ${gpaCal(data.en)}          ${gradeCal(data.en)}            
    Math            ${data.math}        ${gpaCal(data.math)}        ${gradeCal(data.math)}          
    Science         ${data.s}           ${gpaCal(data.s)}           ${gradeCal(data.s)}         
    Social-Science  ${data.ss}          ${gpaCal(data.ss)}          ${gradeCal(data.ss)}            
     Religion        ${data.rel}         ${gpaCal(data.rel)}         ${gradeCal(data.rel)}        


`);
}