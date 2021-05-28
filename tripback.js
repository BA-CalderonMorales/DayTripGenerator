"use-strict"

let destination = ['Nebraska', 'Wyoming', 'Hawaii', 'Alaska'];
let restaurant = ['IHop', 'Taco Bell', 'McDonalds', 'Texas Roadhouse'];
let transportation = ['Car', 'Van', 'SUV', 'Motorcycle'];
let entertainment = ["Salsa lessons", "Scuba Diving", "Formula 1 Racing", "Para-gliding"];

let theFlag = true;

let userDestination;
let userRestaurant;
let userTransportation;
let userEntertainment;


while(theFlag){

    let theDestinationFlag = true;

    while (theDestinationFlag){
        let theChosenDestination = prompt("Choose a destination: Nebraska, Wyoming, Hawaii, Alaska");
        for (let i = 0; i < destination.length; i++){
            if (theChosenDestination === destination[i]){
                userDestination = destination[i];
                theDestinationFlag = false;
                console.log(userDestination);
            }
        }
    }

    let theRestaurantFlag = true;

    while (theRestaurantFlag){
        let theChosenRestaurant = prompt("Choose a restaurant: IHop, Taco Bell, McDonalds, Texas Roadhouse");
        for (let i = 0; i < restaurant.length; i++){
            if (theChosenRestaurant === restaurant[i])
            {
                userRestaurant = restaurant[i];
                theRestaurantFlag = false;
                console.log(userRestaurant);
            }          
        }
    }

    let theTransportationFlag = true;

    while(theTransportationFlag){
        let theChosenTransportation = prompt("Choose a form of transportation: Car, Van, SUV, Motorcycle");
        for (let i = 0; i < transportation.length; i++) {
            if (theChosenTransportation === transportation[i]){
                userTransportation = transportation[i];
                theTransportationFlag = false;
                console.log(userTransportation);
            }
        }
    }

    let theEntertainmentFlag = true;

    while (theEntertainmentFlag){
        let theChosenEntertainment = prompt("Choose the preferred entertainment: Salsa lessons, Scuba Diving, Formula 1 Racing, Para-gliding");
        for (let i = 0; i < entertainment.length; i++){
            if (theChosenEntertainment === entertainment[i]){
                userEntertainment = entertainment[i];
                theEntertainmentFlag = false;
                console.log(userEntertainment);
            }
        }
    }

    theFlag = false;
}