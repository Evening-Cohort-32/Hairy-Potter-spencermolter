// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell } from "./PotteryCatalog.js";
import { PotteryList } from "./PotteryList.js";
// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 1, 2);
let plate = makePottery("plate", 2, 1);
let vase = makePottery("vase", 4, 5);
let charger = makePottery("charger", 3, 1);
let bowl = makePottery("bowl", 2, 4);


// Fire each piece of pottery in the kiln
mug = firePottery(mug, 1900);
plate = firePottery(plate, 2050);
vase = firePottery(vase, 2400);
charger = firePottery(charger, 1850);
bowl = firePottery(bowl, 2200);
console.log(mug, plate, vase, charger, bowl);

// Determine which ones should be sold, and their price
toSellOrNotToSell(mug);
toSellOrNotToSell(plate);
toSellOrNotToSell(vase);
toSellOrNotToSell(charger);
toSellOrNotToSell(bowl);

import { usePottery } from "./PotteryCatalog.js";
console.log(usePottery());

// Invoke the component function that renders the HTML list
const elementHTML = document.querySelector(".potteryList");
elementHTML.innerHTML = PotteryList();