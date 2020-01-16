
myName = "Jillian Turman"
console.log(myName);
let allCaps = myName.toUpperCase();

myField = "Future Developer"
console.log(myField);

myDescription = "I am learning how to become a Software Developer."
console.log(myDescription);

let myInterests = ['Tech','Rock Climbing','Vietnamese Food'];{
    console.log(myInterests);
    //console.log this
}
let myPositions =['Bartender at Dread River Distillery', 'Event Lead at Topgolf', 'Photographer at Feel the Beat Entertainment'];{
    console.log(myPositions);
    //console.log this
}

// let mySkills = ['blah', 'blahhh', 'blahhh' ];
// for ( i = 0; i < mySkills.length; i++){
//     console.log( `* ${mySkills}`);
// }
    
    // console.log this 
   

displaySkill('blah', true);
// FOR EACH SKILL
// boolean

function displaySkill(skillHa, isNeat){
    if (isNeat === true) {
    console.log(`* BAM: ${skillHa}`);
    }else {
        console.log(`* ${skillHa}`);
    }
}
