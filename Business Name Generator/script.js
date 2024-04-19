/*
Create a business name generator by combination of the following

FirstNames:
Crazy
Amazing
Fire

MiddleNames:
Engine
Foods
Style

LastNames:
Bros
Limited
Hub
*/


function nameGenerator() {
    let random = Math.random();
    let FirstName, MiddleName, LastName, businessName;

    //Generating the FirstName
    if (random < 0.33) {
        FirstName = "Crazy";
    }
    else if (random < 0.66 && random >= 0.33) {
        FirstName = "Amazing"
    }
    else {
        FirstName = "Fire"
    }

    //Generating the MiddleName
    if (random < 0.33) {
        MiddleName = "Engine";
    }
    else if (random < 0.66 && random >= 0.33) {
        MiddleName = "Foods"
    }
    else {
        MiddleName = "Style"
    }
    
    //Generating the LastName
    if (random < 0.33) {
        LastName = "Bros";
    }
    else if (random < 0.66 && random >= 0.33) {
        LastName = "Limited"
    }
    else {
        LastName = "Hub"
    }

    businessName = FirstName + MiddleName + LastName;
    alert(`Your Business Name is ${businessName}`);
}
