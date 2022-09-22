"use strict";
// // URL for the instructions: 
// // https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
exports.__esModule = true;
// // Part 1: Declare (5) Variables With Type
// let spacecraftName: string = "Determination"
// let speedMph: number = 17500
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
// let milesPerKilometer: number = 0.621
// // Part 2: Print Days to Mars
// let milesToMars:number = kilometersToMars * milesPerKilometer
// let hoursToMars: number = milesToMars / speedMph
// let daysToMars:number = hoursToMars / 24
// // Code an output statement here (use a template literal):
// console.log(`${spacecraftName} would take ${daysToMars} days to get to Mars.`)
// // Part 3: Create a Function ("getDaysToLocation")
// function getDaysToLocation(kilometersAway:number):number {
//     let milesAway:number = kilometersAway * milesPerKilometer;
//     let hoursToLocation: number = milesAway / speedMph;
//     let daysToLocation:number = hoursToLocation / 24;
//     return daysToLocation
// }
// // Move your output statement from part 2 here. Update the template literal to call
// // the function and print the outputs for a Mars trip and a moon trip.
// console.log(`${spacecraftName} would take ${getDaysToLocation(kilometersToMars)} days to get to Mars.`)
// console.log(`${spacecraftName} would take ${getDaysToLocation(kilometersToTheMoon)} days to get to Mars.`)
// Part 4: Create a Spacecraft Class
// class Spacecraft{
//     milesPerKilometer: number = 0.621;
//     name: string
//     speedMph: number
//     constructor(name: string,speedMph: number){
//         this.name = "Determination"
//         this.speedMph = 17500
//     }
//     getDaysToLocation(kilometersAway:number):number {
//         let milesAway:number = kilometersAway * this.milesPerKilometer;
//         let hoursToLocation: number = milesAway / this.speedMph;
//         let daysToLocation:number = hoursToLocation / 24;
//         return daysToLocation
//     }
// }
// // Create an instance of the class here:
// let spaceShuttle = new Spacecraft('Determination', 17500);
// // Move your output statements from part 3 here. Update the template literals use the
// // instance of the class.
// console.log(`${spaceShuttle.name} would take ${spaceShuttle.getDaysToLocation(kilometersToMars)} days to get to Mars.`)
// console.log(`${spaceShuttle.name} would take ${spaceShuttle.getDaysToLocation(kilometersToTheMoon)} days to get to Moon.`)
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
var SpaceLocation_1 = require("./SpaceLocation");
// Add the printDaysToLocation function to the Spacecraft class.
var Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.name = "Determination";
        this.speedMph = 17500;
    }
    Spacecraft.prototype.getDaysToLocation = function (kilometersAway) {
        var milesAway = kilometersAway * this.milesPerKilometer;
        var hoursToLocation = milesAway / this.speedMph;
        var daysToLocation = hoursToLocation / 24;
        return daysToLocation;
    };
    Spacecraft.prototype.printDaysToLocation = function (location) {
        console.log("".concat(this.name, " would take ").concat(this.getDaysToLocation(location.kilometersAway), " days to get to ").concat(location.name, "."));
    };
    return Spacecraft;
}());
var spaceShuttle = new Spacecraft('Determination', 17500);
// Paste in the code from step 6 here:
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('the Moon', kilometersToTheMoon));
