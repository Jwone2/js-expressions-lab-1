// ---- Temperature Data ----
const day1TempF = 32;
const day2TempC = 25;
const day3TempF = 70;
const day4TempC = 18;
const day5TempF = 80;
const day6TempC = 15;
const day7TempF = 72;
const day8TempC = 28;
const day9TempF = 68;
const day10TempC = 20;
const day11TempF = 75;
const day12TempC = 23;
const day13TempF = 82;
const day14TempC = 30;
const day15TempF = 65;
const day16TempC = 22;
const day17TempF = 77;
const day18TempC = 26;
const day19TempF = 78;
const day20TempC = 24;
const day21TempF = 73;
const day22TempC = 21;
const day23TempF = 79;
const day24TempC = 27;
const day25TempF = 71;
const day26TempC = 19;
const day27TempF = 74;
const day28TempC = 17;
const day29TempF = 76;
const day30TempC = 29;

// ---- Conversion Functions ----
const toF = c => (c * 9/5) + 32;
const toC = f => (f - 32) * 5/9;

// ---- List Keeping Units ----
const temperatures = [
  { v: day1TempF, u: "F" }, { v: day2TempC, u: "C" },
  { v: day3TempF, u: "F" }, { v: day4TempC, u: "C" },
  { v: day5TempF, u: "F" }, { v: day6TempC, u: "C" },
  { v: day7TempF, u: "F" }, { v: day8TempC, u: "C" },
  { v: day9TempF, u: "F" }, { v: day10TempC, u: "C" },
  { v: day11TempF, u: "F" }, { v: day12TempC, u: "C" },
  { v: day13TempF, u: "F" }, { v: day14TempC, u: "C" },
  { v: day15TempF, u: "F" }, { v: day16TempC, u: "C" },
  { v: day17TempF, u: "F" }, { v: day18TempC, u: "C" },
  { v: day19TempF, u: "F" }, { v: day20TempC, u: "C" },
  { v: day21TempF, u: "F" }, { v: day22TempC, u: "C" },
  { v: day23TempF, u: "F" }, { v: day24TempC, u: "C" },
  { v: day25TempF, u: "F" }, { v: day26TempC, u: "C" },
  { v: day27TempF, u: "F" }, { v: day28TempC, u: "C" },
  { v: day29TempF, u: "F" }, { v: day30TempC, u: "C" }
];

// ---- TOTALS ----
let tot_temperature_in_fahrenheit = 0;
let tot_temperature_in_celsius = 0;

temperatures.forEach(t => {
  if (t.u === "F") {
    tot_temperature_in_fahrenheit += t.v;
    tot_temperature_in_celsius += toC(t.v);
  } else {
    tot_temperature_in_fahrenheit += toF(t.v);
    tot_temperature_in_celsius += t.v;
  }
});

// ---- AVERAGES ----
const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / temperatures.length;
const avg_temperature_in_celsius = tot_temperature_in_celsius / temperatures.length;

console.log("Total in F:", tot_temperature_in_fahrenheit);
console.log("Total in C:", tot_temperature_in_celsius);
console.log("Average in F:", avg_temperature_in_fahrenheit);
console.log("Average in C:", avg_temperature_in_celsius);


