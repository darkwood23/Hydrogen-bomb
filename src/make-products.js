function makeProducts(contentHolder, name, cost, mass, len, pic) {
    const hold = document.createElement("div")
    const title = document.createElement("h3")
    const price = document.createElement("p")
    const weight = document.createElement("p")
    const leng = document.createElement("p")
    const picture = new Image()
    const div3 = document.createElement("div")

    hold.classList.add("hold")
    title.classList.add("product-title")
    price.classList.add("price")
    weight.classList.add("weight")
    leng.classList.add("length")
    picture.classList.add("product-picture")
    div3.classList.add("div3")

    picture.id = "picture-" + name

    title.textContent = name
    price.textContent = "Price: " + cost
    weight.textContent = "Mass: " + mass
    leng.textContent = "Length: " + len
    picture.src = pic

    div3.appendChild(title)
    div3.appendChild(price)
    div3.appendChild(weight)
    div3.appendChild(leng)

    hold.appendChild(div3)
    hold.appendChild(picture)

    contentHolder.appendChild(hold)
}

export { makeProducts }