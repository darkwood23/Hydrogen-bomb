import fat from './img/fat.jpg'
import topol from "./img/ground.jpeg"
import trident from './img/trident.jpeg'
import bomb from './img/bomb.jpeg'

import { makeProducts } from './make-products'

function displayProducts(contentHolder) {
    contentHolder.textContent = ""

    const productsHold = document.createElement("div")
    productsHold.classList.add("all-products-holder")

    let productsList = [
        {
            name: "The Vaporizer",
            cost: "$28.7 million",
            mass: "40,000 kg",
            len: "15 feet",
            pic: bomb
        },
        {
            name: "UGM-133 Trident II",
            cost: "$30.9 million",
            mass: "59,000 kg",
            len: "44 feet",
            pic: trident
        },
        {
            name: "Topol-M",
            cost: "$28 million",
            mass: "47,000 kg",
            len: "74 feet",
            pic: topol
        },
        {
            name: "Fat Man",
            cost: "$12.7 million",
            mass: "4,670 kg",
            len: "10.67 feet",
            pic: fat
        }
    ]

    for(let i = 0; i < productsList.length; i++) {
        makeProducts(productsHold, productsList[i].name, productsList[i].cost, productsList[i].mass, productsList[i].len, productsList[i].pic)
    }

    contentHolder.appendChild(productsHold)

}

export { displayProducts }