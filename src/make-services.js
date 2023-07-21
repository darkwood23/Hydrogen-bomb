function makeServices(contentHolder, name, price, description, picture) {
    const service = document.createElement("div")
    const serviceName = document.createElement("h2")
    const servicePrice = document.createElement("p")
    const serviceDescription = document.createElement("p")
    const servicePic = new Image()
    const div4 = document.createElement("dvi")

    service.classList.add("service-holder")
    serviceName.classList.add("service-name")
    servicePrice.classList.add("service-price")
    serviceDescription.classList.add("service-description")
    servicePic.classList.add("service-pic")
    div4.classList.add("div4")

    serviceName.textContent = name
    servicePrice.textContent = "Price: " + price
    serviceDescription.textContent = "Description: " + description
    servicePic.src = picture

    div4.appendChild(serviceName)
    div4.appendChild(servicePrice)
    div4.appendChild(serviceDescription)

    service.appendChild(div4)
    service.appendChild(servicePic)

    contentHolder.appendChild(service)
}

export { makeServices }