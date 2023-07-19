function displayFooter(contentHolder) {
    const contact = document.createElement("h2")
    const email = document.createElement("p")
    const phoneNo = document.createElement("p")

    contact.classList.add("contact")
    email.classList.add("email")
    phoneNo.classList.add("phone-no")

    contact.textContent = "Contact Us"
    email.textContent = "Email: thehimalayanbombs266@protonmail.com"
    phoneNo.textContent = "Phone: (+977) 9742536414"

    contentHolder.appendChild(contact)
    contentHolder.appendChild(email)
    contentHolder.appendChild(phoneNo)
}

export { displayFooter }