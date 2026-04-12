const storedPottery = [];

export const toSellOrNotToSell = (madePottery) => {
    if (madePottery.cracked == false) {
        if (madePottery.weight >= 6) {
            madePottery.price = 40
        }
        else {
            madePottery.price = 20
        }
        storedPottery.push(madePottery);
    }
    return madePottery
};

export const usePottery = () => {
    return storedPottery.map(pottery => ({...pottery}))
};