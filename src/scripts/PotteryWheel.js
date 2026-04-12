let pottID = 1;

export const makePottery = (shape, weight, height) => {
    const newPott = {
        shape: shape,
        weight: weight,
        height: height,
        id: pottID
    }
    pottID ++
    return newPott
};

