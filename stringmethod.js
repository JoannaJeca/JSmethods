//STRING METHODS
/*let VarName ="  these are strings methods , these are the methods i learnt today , 
today i was able to learn indexOf , lastIndexOf , Split and Slice "
 
 
 /*question one: get the first index position 
 of "today"*/
 let bbb ="  these are strings methods , these are the methods i learnt today , today i was able to learn indexOf , lastIndexOf , Split and Slice "
 console.log (bbb.indexOf("today"))
 console.log ("")

/**question two:remove the white spaces from VarName*/
let jjj ="  these are strings methods , these are the methods i learnt today , today i was able to learn indexOf , lastIndexOf , Split and Slice "
console.log (jjj.trim ());
console.log ("")


/** question three: get the substring "today i was able to learn IndexOf ," from VarName*/
let aaa = "  these are strings methods , these are the methods i learnt today , today i was able to learn indexOf , lastIndexOf , Split and Slice "
let kkk = aaa.slice (69,104)
console.log ("slice", kkk)
console.log ("")


/** question four: get the total number of values(characters) from VarName*/
let ccc = "  these are strings methods , these are the methods i learnt today , today i was able to learn indexOf , lastIndexOf , Split and Slice "
console.log (ccc.length)


/* question five: split by "today"*/
let ggg = "  these are strings methods , these are the methods i learnt today , today i was able to learn indexOf , lastIndexOf , Split and Slice "
console.log (ggg.split("today"));


 /*question six: split by "these"*/
let sss = "  these are strings methods , these are the methods i learnt today , today i was able to learn indexOf , lastIndexOf , Split and Slice "
console.log (sss.split ("these"));


 /*question seven: get the first index position of "e" in the first "these" in VarName*/

 let angel = "  these are strings methods , these are the methods i learnt today , today i was able to learn indexOf , lastIndexOf , Split and Slice "
 console.log (angel.slice(1,7).indexOf("e"),)
 
 /*question eight: make research and read extensively on six other strings methods*/

// padStart
 let qqq = "hydra"
let kkr= qqq.padStart(3,"the ")
console.log ("padStart", kkr)

// padEnd
let ppp = "The hydra"
let www = ppp.padEnd(33, " is very dangerous")
console.log ("padEnd", www)


//concat/
let vvv= "mango"
let yyy = vvv.concat(" dyjuluikf")
console.log ("concat", yyy)

//substring/
let zzz = "Godwin"
let rrr= zzz.substring(2,5)
console.log ("substring", rrr)
// charAt
let xxx = "happy"
let ooo = xxx.charAt (4)
console.log ("charAt", ooo)

//charCodeAt/
let fff= "fisherman"
let mmm= fff.charCodeAt("m")
console.log("charCodeAt", mmm)

//substr/
let ttt = "Godwin"
let eee= zzz.substr(0,4)
console.log ("substr", eee)

let a = "water"
console.log(a.length)
/* question nine: make a post on Facebook of the assignments and explain what you have
 learnt too as the caption. submit nefore 10pm thursday*/