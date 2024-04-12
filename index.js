//STRING
let myName = "Joanna"
let about = "I am 21 and from Imo State"
let favColor = "i love yellow"
console.log (myName);
console.log (about);
console.log (favColor);


//NUMBERS
let x = 21
let y = 11+11
let z = 12.5
console.log (x);
console.log (y);
console.log (z);


//BOOLEAN
let isFat = "false"
let isAlive = "true"
let isMale = "false"
console.log (isFat);
console.log (isAlive);
console.log (isMale);


//UNDEFINED
let house = undefined
let old;
let table = undefined
console.log (house);
console.log (table);
console.log (old);


//NULL
let married = null
let handicap = null
let alphabet = null
console.log (married);
console.log (handicap);
console.log (alphabet);


//ARRAY
let ingredients = ["rice and fresh plantain", 25, null]
let _ingredients = ["kegs of vegetable oil", 2, "bags of garri", null ]
console.log (ingredients);
console.log (_ingredients);


//OBJECTS
let $ingredients = {
    rice:"jellof rice",
    maggi: 3,
    tomatoes: "tasty tom",
    meat:["chicken and beef", undefined],
    amount: 28000 }
    console.log ($ingredients);


  //MUTABLE DATATYPES
 //Objects
    let food = {rice:"jellof",
                bread: "White freshly baked bread",
                spag: "Jellof spagetti with meatballs"};
        console.log ("before mutate",food);

    food.rice = "Fried rice"
    food.bread = "buttered bread"
    food.spag =  "stewed spagetti"
    
    console.log ("after mutate", food)

    let Codelab = {address:["Number", 31, "Haruna, off Chidi Street, Oregie-Lagos"],
                   slogan: "Your Sure PATH to becoming a GLOBAL TALENT!",
                   goal: "Training youths to become Global Talents solving Global Issues.",
                   tracks:"DevOps track, Frontend tracks, Backend track,  Algorithm/Data Structure track"};
        console.log ("before mutate", Codelab)

        Codelab.goal = "Training young people to build digital experiences"
                       "Empowering Ambitious Youths, Building Tools and Application for mobile phones and more",
        Codelab.tracks ="Design Pattern Tracks",
                        "Web RTC track"
                        "Transformational Leadership track"
                        "Design Thinking track"
                        "UI/UX track" 
        console.log ("after mutate", Codelab)

    //Array
    let address = ["Number",
                   36,
                   "Dada Onijomo",
                   isCloseToCodelab = true,
                  ]

    console.log ("before mutate", address)

    address[0] = "Num"
    address[1] = 45
    address[2] = "Awodiora Street"
    address[3] = isCloseToCodelab = false

    console.log ("after mutate", address)
        
    