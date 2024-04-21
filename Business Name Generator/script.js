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
    let random = Math.floor(Math.random()*3);
    let FirstName, MiddleName, LastName, businessName;

    //Generating the FirstName
    Switch(random){
        case 0: FirstName = "Crazy";
                MiddleName = "Engine";
                LastName = "Bros";
                break;
        case 1: FirstName = "Amazing";
                MiddleName = "Foods";
                LastName = "Limited";
                break;
        case 2: FirstName = "Fire";
                MiddleName = "Style";
                LastName = "Hub";
                break;
        default: alert('Error');
                 break;
    }

    alert(`Your Business name is ${FirstName} ${MiddleName} ${LastName}`);
}
