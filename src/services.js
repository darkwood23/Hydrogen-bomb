import { makeServices } from "./make-services"
import drop from "./img/drop.jpeg"
import ground from './img/ground.jpeg'
import submarine from './img/submarine.jpeg'

function displayServices(contentHolder) {
    contentHolder.textContent = ""
    const mainServiceHolder = document.createElement("div")
    let services = [
        {
            name: "Plane Drop",
            price: "$5.8 million",
            description: "A bomb of your desire will be dropped at a specific location.",
            picture: drop
        },
        {
            name: "Submarine Strike",
            price: "$6.6 million",
            description: "A nuclear submarine will be used to deploy a desired bomb targeted at a specific location.",
            picture: submarine
        },
        {
            name: "Ground Strike",
            price: "$3.2 million",
            description: "The desired bomb will be launched from a specific location using a vehicle targeted at a specific location",
            picture: ground
        }
    ]

    for(let i = 0; i < services.length; i++) {
        makeServices(mainServiceHolder, services[i].name, services[i].price, services[i].description, services[i].picture)
    }

    mainServiceHolder.id = "main-service-holder"

    contentHolder.appendChild(mainServiceHolder)
}

export { displayServices }