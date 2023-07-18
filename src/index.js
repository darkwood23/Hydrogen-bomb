import './style.css'
import { displayHead } from './head'

const everyting = document.getElementById("everything")
const head = document.createElement("div")
const tabs = document.createElement("div")
const body = document.createElement("div")
const mainBody = document.createElement("div")

head.id = "head"
body.id = "body"
mainBody.id = "main-body"
tabs.id = "tabs"

body.appendChild(mainBody)
displayHead(head)

everyting.appendChild(head)
everyting.appendChild(tabs)
everyting.appendChild(body)