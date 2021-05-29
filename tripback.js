"use-strict"


/* #region Arrays to be Used */
let destination = ['Nebraska', 'Wyoming', 'Hawaii', 'Alaska'];
let restaurant = ['IHop', 'Taco Bell', 'McDonalds', 'Texas Roadhouse'];
let transportation = ['Car', 'Van', 'SUV', 'Motorcycle'];
let entertainment = ["Salsa lessons", "Scuba Diving", "Formula 1 Racing", "Para-gliding"];
/* #endregion */


/* #region User choices */
let userDestination;
let userRestaurant;
let userTransportation;
let userEntertainment;
/* #endregion */


/* #region Boolean flags to help with flow control */
let theFlag = true;
let theDestinationFlag = true;
let theRestaurantFlag = true;
let theTransportationFlag = true;
let theEntertainmentFlag = true;
/* #endregion */


/* #region Random number generator to help with prompting things to the user. */
let randomOne = randomNumber(destination);
let randomTwo = randomNumber(restaurant);
let randomThree = randomNumber(transportation);
let randomFour = randomNumber(entertainment);
/* #endregion */


/* #region Starts the Day Trip program (or restarts, depending on user) */
chooseADayTrip(theFlag); // Starts the program
function chooseADayTrip(someBoolean) {
    while (someBoolean) {

        /* #region With Random Selection */

        let randomDestination = destination[randomOne];
        //console.log(randomDestination);
        let theChosenDestination = prompt("Do you like this destination: "
            + randomDestination + "? Type 'yes' or 'no'.");
        userDestination = chooseADestination(theChosenDestination, randomDestination);

        let randomRestaurant = restaurant[randomTwo];
        //console.log(randomRestaurant);
        let theChosenRestaurant = prompt("Do you like this restaurant: "
            + randomRestaurant + "? Type 'yes' or 'no'.");
        userRestaurant = chooseARestaurant(theChosenRestaurant, randomRestaurant);

        let randomTransportation = transportation[randomThree];
        //console.log(randomTransportation);
        let theChosenTransportation = prompt("Do you like this form of transportation: "
            + randomTransportation + "? Type 'yes' or 'no'.");
        userTransportation = chooseATranspo(theChosenTransportation, randomTransportation);

        let randomEntertainment = entertainment[randomFour];
        //console.log(randomEntertainment);
        let theChosenEntertainment = prompt("Do you like this form of entertainment: "
            + randomEntertainment + "? Type 'yes' or 'no'.");
        userEntertainment = chooseAEntertainment(theChosenEntertainment, randomEntertainment);

        /* #endregion */

        someBoolean = false;
    }
}
/* #endregion */


/* #region With Random Selection, functions (Optional replay prompt)*/

function chooseADestination(userDestinationInput, randomlyGeneratedDestination) {
    while (theDestinationFlag) {
        if (userDestinationInput === 'yes') {
            userDestination = randomlyGeneratedDestination;
            theDestinationFlag = false;
        }
        else {
            anotherRandomNumber = randomNumber(destination);
            let anotherDestination = destination[anotherRandomNumber];
            // console.log("What about " + anotherDestination);
            let replayPrompt = prompt("What about " + anotherDestination 
            + "Do you like this destination? Type 'yes' or 'no'.")
            chooseADestination(replayPrompt, anotherDestination);
        }
    }
    return userDestination;
}

function chooseARestaurant(userRestaurantInput, randomlyGeneratedRestaurant) {
    while (theRestaurantFlag) {
        if (userRestaurantInput === 'yes') {
            userRestaurant = randomlyGeneratedRestaurant;
            theRestaurantFlag = false;
        }
        else {
            anotherRandomNumber = randomNumber(restaurant);
            let anotherRestaurant = restaurant[anotherRandomNumber];
            //console.log("What about " + anotherRestaurant);
            let replayPrompt = prompt("What about " + anotherRestaurant 
            + "Do you like this restaurant? Type 'yes' or 'no'.");
            chooseARestaurant(replayPrompt, anotherRestaurant);
        }
    }
    return userRestaurant;
}

function chooseATranspo(userTransportationInput, randomlyGeneratedTranspo) {
    while (theTransportationFlag) {
        if (userTransportationInput === 'yes') {
            userTransportation = randomlyGeneratedTranspo;
            theTransportationFlag = false;
        }
        else {
            anotherRandomNumber = randomNumber(transportation);
            let anotherTranspo = transportation[anotherRandomNumber];
            //console.log("What about " + anotherTranspo);
            let replayPrompt = prompt("What about " + anotherTranspo 
            + "Do you like this form of transportation? Type 'yes' or 'no'.");
            chooseATranspo(replayPrompt, anotherTranspo);
        }
    }
    return userTransportation;
}

function chooseAEntertainment(userEntertainmentInput, randomlyGeneratedEntertainment) {
    while (theEntertainmentFlag) {
        if (userEntertainmentInput === 'yes') {
            userEntertainment = randomlyGeneratedEntertainment;
            theEntertainmentFlag = false;
        }
        else {
            anotherRandomNumber = randomNumber(entertainment);
            let anotherEntertainment = entertainment[anotherRandomNumber];
            //console.log("What about " + anotherEntertainment);
            let replayPrompt = prompt("What about " + anotherEntertainment 
            + "Do you like this form of entertainment? Type 'yes' or 'no'.");
            chooseAEntertainment(replayPrompt, anotherEntertainment);
        }
    }
    return userEntertainment;
}

/* #endregion */


/* #region Random number generator to help with prompting things to the user. */

function randomNumber(theArray) {
    let theRandomNumber = Math.floor(Math.random() * theArray.length);
    return theRandomNumber;
}
/* #endregion */


/* #region Asks users if they are sure about all their selections */
let didUserLikeEverything = prompt("Did you like everything you chose? Please type 'yes' or 'no'.");
let areYouSure = true;
verifyInput(areYouSure, didUserLikeEverything);
function verifyInput(userValidation, enterYesNo) {
    while (userValidation) {
        switch (enterYesNo) {
            case "yes":
                console.log("Your day trip is complete!");
                console.log("Here are the details to your trip: \n"
                    + "Your destination is: " + userDestination
                    + "\nYour restaurant is: " + userRestaurant
                    + "\nYour transportation is: " + userTransportation
                    + "\nYour entertainment is: " + userEntertainment);
                userValidation = false;
            break;
            case "no":
                console.log("Okay. We'll go ahead and start over.");
                aNewFlag = true;
                chooseADayTrip(aNewFlag);
                userValidation = false;
                let userYesOrNo = prompt("Did you like everything you chose? Please type 'yes' or 'no'.");
                let reValidate = true;
                verifyInput(reValidate, userYesOrNo);
                
            break;
            default:
                console.log("That is not a valid input");
            break;
        }
    }
}
/* #endregion */