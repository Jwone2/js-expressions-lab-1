// Fahrenheit temperatures
const day1TempF = 32
const day3TempF = 70
const day5TempF = 80
const day7TempF = 72
const day9TempF = 68
const day11TempF = 75
const day13TempF = 82
const day15TempF = 65
const day17TempF = 77
const day19TempF = 78
const day21TempF = 73
const day23TempF = 79
const day25TempF = 71
const day27TempF = 74
const day29TempF = 76

// Celsius temperatures
const day2TempC = (25*9/5) + 32
const day4TempC = (18*9/5) + 32
const day6TempC = (15*9/5) + 32
const day8TempC = (28*9/5) + 32
const day10TempC = (20*9/5) + 32
const day12TempC = (23*9/5) + 32
const day14TempC = (30*9/5) + 32
const day16TempC = (22*9/5) + 32
const day18TempC = (26*9/5) + 32
const day20TempC = (24*9/5) + 32
const day22TempC = (21*9/5) + 32
const day24TempC = (27*9/5) + 32
const day26TempC = (19*9/5) + 32
const day28TempC = (17*9/5) + 32
const day30TempC = (29*9/5) + 32
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
// total temperature in fahrenheit
const totalFahrenheit = day1TempF + celsiusToFahrenheit(day2TempC) + day3TempF + celsiusToFahrenheit(day4TempC) + day5TempF + celsiusToFahrenheit(day6TempC) + day7TempF + celsiusToFahrenheit(day8TempC) + day9TempF + celsiusToFahrenheit(day10TempC) + day11TempF + celsiusToFahrenheit(day12TempC) + day13TempF + celsiusToFahrenheit(day14TempC) + day15TempF + celsiusToFahrenheit(day16TempC) + day17TempF + celsiusToFahrenheit(day18TempC) + day19TempF + celsiusToFahrenheit(day20TempC) + day21TempF + celsiusToFahrenheit(day22TempC) + day23TempF + celsiusToFahrenheit(day24TempC) + day25TempF + celsiusToFahrenheit(day26TempC) + day27TempF + celsiusToFahrenheit(day28TempC) + day29TempF + celsiusToFahrenheit(day30TempC);
console.log("Total Temperature in Fahrenheit:", totalFahrenheit);
// total temperature in celsius
const totalCelsius = ((day1TempF - 32) * 5/9) + day2TempC + ((day3TempF - 32) * 5/9) + day4TempC + ((day5TempF - 32) * 5/9) + day6TempC + ((day7TempF - 32) * 5/9) + day8TempC + ((day9TempF - 32) * 5/9) + day10TempC + ((day11TempF - 32) * 5/9) + day12TempC + ((day13TempF - 32) * 5/9) + day14TempC + ((day15TempF - 32) * 5/9) + day16TempC + ((day17TempF - 32) * 5/9) + day18TempC + ((day19TempF - 32) * 5/9) + day20TempC + ((day21TempF - 32) * 5/9) + day22TempC + ((day23TempF - 32) * 5/9) + day24TempC + ((day25TempF - 32) * 5/9) + day26TempC + ((day27TempF - 32) * 5/9) + day28TempC + ((day29TempF - 32) * 5/9) + day30TempC
console.log("Total Temperature in Celsius:", totalCelsius);
// average temperature in fahrenheit
const averageFahrenheit = totalFahrenheit / 30;
console.log("Average Temperature in Fahrenheit:", averageFahrenheit);
// average temperature in celsius
const averageCelsius = totalCelsius / 30;
console.log("Average Temperature in Celsius:", averageCelsius);



module.exports = {
    // tot_temperature_in_fahrenheit,
    // tot_temperature_in_celsius,
    // avg_temperature_in_fahrenheit,
    // avg_temperature_in_celsius
};







