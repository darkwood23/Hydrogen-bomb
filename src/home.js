import bomb from './img/bomb.jpeg'

function displayHome(contentHolder) {
    contentHolder.textContent = ""
    const head = document.createElement("div")
    const aboutUs = document.createElement("h2")
    const div2 = document.createElement("div")
    const about = document.createElement("p")
    const img = new Image()

    aboutUs.classList.add("about-us")
    about.classList.add("about")
    img.classList.add("bomb-img")
    div2.classList.add("div2")
    head.classList.add("real-head")

    aboutUs.textContent = "About Us"
    about.textContent = `Himalayan Bombs is an arms dealing company that provides bombs to it's customers at a reasonable price.
                        We also provide services such as dropping a prefered bomb at a particular location.
                        We provide our products and services to governments all around world regardless of their background.
                        We do not support any country/race/person/political party/religion, we provide our services to anyone
                        who is willing to pay.`
    
    img.src = bomb
    
    div2.appendChild(about)
    div2.appendChild(img)

    head.appendChild(aboutUs)
    head.appendChild(document.createElement("hr"))
    head.appendChild(div2)

    contentHolder.appendChild(head)
}

export { displayHome }