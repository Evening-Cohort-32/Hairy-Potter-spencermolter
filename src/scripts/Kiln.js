export const firePottery = (madePottery, temp) => {
    madePottery.fired = true;
    if (temp > 2200) {
        madePottery.cracked = true
    }
    else {
        madePottery.cracked = false
    }
    return madePottery
};