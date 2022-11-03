/*  

👉 Write your kata here!
 Scenario:
Oh, no a zombie virus has broken out but fortunately you live in the safehaven of Codeville.😪 

You are the border guard checking that the people entering are not infected with the zombie virus. You have a list of names of people and their details that want to enter Codeville. Look for any suspicious details that may suggest they are secretly infected!

Watch out, Zombies are really bad at spelling their names. They also tend to come from the capital of Zombieland & have a special letter in their blood type.

Example entryList:
[
        {personfile: {name: "Dani$l", city: "Zombieville", bloodType:"OZ-negative"}},
        {personfile: {name:"Andrea", city:"Austin", bloodType:"O-positive"}},
]

*/
//👉 Write the function your CodeWarriors will start with below here:

export function getHumans(entryList){
    let humans = [];
    for (let i = 0; i < entryList.length; i++){
        let name = entryList[i].personfile.name 
        let pattern = /[^a-zA-Z]+/g;
        let result = pattern.test(name);
        let city = entryList[i].personfile.city;
        let bloodType = entryList[i].personfile.bloodType;
        let zPattern = /[zZ]+/g;
        let bloodResult = zPattern.test(bloodType);
            if ( result == false){
                if ( city !== 'Zombieville') { 
                    if ( bloodResult == false) {
                    humans.push(entryList[i]) 
                    }
                }
            }


        }
        return humans
 }
