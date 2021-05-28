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

while (theFlag) {

    let theChosenDestination = prompt("Choose a destination: Nebraska, Wyoming, Hawaii, Alaska");
    chooseADestination(theChosenDestination);
    console.log(userDestination);

    let theChosenRestaurant = prompt("Choose a restaurant: IHop, Taco Bell, McDonalds, Texas Roadhouse");
    chooseARestaurant(theChosenRestaurant);
    console.log(userRestaurant);

    let theChosenTransportation = prompt("Choose a form of transportation: Car, Van, SUV, Motorcycle");
    chooseATranspo(theChosenTransportation);
    console.log(userTransportation);

    let theChosenEntertainment = prompt("Choose the preferred entertainment: Salsa lessons, Scuba Diving, Formula 1 Racing, Para-gliding");
    chooseAEntertainment(theChosenEntertainment);
    console.log(userEntertainment);

    theFlag = false;
}

let didUserLikeEverything = prompt("Did you like everything you chose? Please type enter 'yes' or 'no'.");
let areYouSure = true;
let theCurrentChange;

while (areYouSure) {
    switch (didUserLikeEverything) {
        case "yes":
            console.log("complete");
            areYouSure = false;
            break;
        case "no":
            console.log("Sorry!");
            theCurrentChange = prompt("What did you want to change? Please type any of the following: Destination, Restaurant, Transportation, or Entertainment");
            let areYouSure = someChange(theCurrentChange);
            break;
        default:
            console.log("That is not a valid input");
            break;
    }
}

function chooseADestination(userDestinationInput) {
    while (theDestinationFlag) {
        for (let i = 0; i < destination.length; i++) {
            if (userDestinationInput === destination[i]) {
                userDestination = destination[i];
                theDestinationFlag = false;
            }
        }
    }
    return userDestination;
}

function chooseARestaurant(userRestaurantInput) {
    while (theRestaurantFlag) {
        for (let i = 0; i < restaurant.length; i++) {
            if (userRestaurantInput === restaurant[i]) {
                userRestaurant = restaurant[i];
                theRestaurantFlag = false;
            }
        }
    }
    return userRestaurant;
}

function chooseATranspo(userTransportationInput) {
    while (theTransportationFlag) {
        for (let i = 0; i < transportation.length; i++) {
            if (userTransportationInput === transportation[i]) {
                userTransportation = transportation[i];
                theTransportationFlag = false;
            }
        }
    }
    return userTransportation;
}

function chooseAEntertainment(userEntertainmentInput) {
    while (theEntertainmentFlag) {
        for (let i = 0; i < entertainment.length; i++) {
            if (userEntertainmentInput === entertainment[i]) {
                userEntertainment = entertainment[i];
                theEntertainmentFlag = false;
            }
        }
    }
    return userEntertainment;
}

function someChange(change) {
    console.log(change);
    areYouSure = false;
}