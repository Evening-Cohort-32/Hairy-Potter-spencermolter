import { usePottery } from "./PotteryCatalog.js"

export const PotteryList = () => {
  const itemsForSale = usePottery()
  let htmlString = ""
  for (const item of itemsForSale) {
    htmlString += `
        <section class="pottery" id="pottery--${item.id}">
            <h2 class="pottery__shape">${item.shape}</h2>
            <div class="pottery__properties">
                Item weighs ${item.weight} grams and is ${item.height} cm
            </div>
            <div class="pottery__price">Price is $${item.price}</div>
        </section>`
  }
  return htmlString
}
