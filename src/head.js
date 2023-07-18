import logos from './logo.jpeg'

function displayHead(contentHolder) {
    const div1 = document.createElement("div")
    const heading = document.createElement("h1")
    const logo = new Image()
    const slogan = document.createElement("p")

    heading.classList.add("heading")
    logo.classList.add("logo")
    slogan.classList.add("slogan")
    div1.classList.add("div1")

    heading.textContent = "The Himalayan Bombs"
    slogan.textContent = "We guarantee the most casualties"
    logo.src = logos

    div1.appendChild(heading)
    div1.appendChild(slogan)

    contentHolder.appendChild(div1)
    contentHolder.appendChild(logo)
}

export { displayHead }