import './style.css'
import { displayHead } from './head'
import { displayTabs } from './tabs'
import { displayFooter } from './footer'

const everyting = document.getElementById("everything")
const head = document.createElement("div")
const tabs = document.createElement("div")
const body = document.createElement("div")
const footer = document.createElement("div")

head.id = "head"
body.id = "body"
tabs.id = "tabs"
footer.id = "footer"

displayHead(head)
displayTabs(tabs, body)
displayFooter(footer)

everyting.appendChild(head)
everyting.appendChild(tabs)
everyting.appendChild(body)
everyting.appendChild(footer)