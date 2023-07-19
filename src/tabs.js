import { displayHome } from "./home"

function displayTabs(contentHolder, body) {
    const home = document.createElement("button")
    const products = document.createElement("button")
    const services = document.createElement("button")

    home.classList.add("home")
    products.classList.add("products")
    services.classList.add("services")

    home.textContent = "Home"
    products.textContent = "Products"
    services.textContent = "Services"

    home.classList.add("yellow")
    displayHome(body)

    home.addEventListener("click", function() {
        products.classList.remove("yellow")
        services.classList.remove("yellow")
        home.classList.add("yellow")
        displayHome(body)
    })

    products.addEventListener("click", function() {
        home.classList.remove("yellow")
        services.classList.remove("yellow")
        products.classList.add("yellow")
    })

    services.addEventListener("click", function() {
        home.classList.remove("yellow")
        products.classList.remove("yellow")
        services.classList.add("yellow")
    })

    contentHolder.appendChild(home)
    contentHolder.appendChild(products)
    contentHolder.appendChild(services)
}

export { displayTabs }