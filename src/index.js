import './style.css'
import { displayHead } from './head'
import { displayTabs } from './tabs'
import { displayFooter } from './footer'

const everyting = document.getElementById("everything")
const head = document.createElement("div")
const tabs = document.createElement("div")
const body = document.createElement("div")
const footer = document.createElement("div")
const mainBody = document.createElement("div")

head.id = "head"
body.id = "body"
mainBody.id = "main-body"
tabs.id = "tabs"
footer.id = "footer"

body.appendChild(mainBody)
displayHead(head)
displayTabs(tabs)
displayFooter(footer)

everyting.appendChild(head)
everyting.appendChild(tabs)
everyting.appendChild(body)
everyting.appendChild(footer)