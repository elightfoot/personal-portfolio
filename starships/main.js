
import { removeChildren, getLastNumber } from "../utils.js"
import { starships } from "../Data/starships.js"

const nav = document.querySelector(".nav")
 
const navList = document.querySelector(".navList")

const shipView = document.querySelector("#main")

const modalDialog = document.querySelector(".modal")

const modalButton = document.querySelector(".modal-close")

const modalMessage = document.querySelector(".dialog-message")

modalButton.addEventListener("click", () => {
    modalButton.classList.toggle("is-active")
})

function populateNav(starships) {
    starships.forEach(starship => {
        let shipAnchor = document.createElement("a")
        shipAnchor.href = "#"
        //shipAnchor.textContent = starship.name
        let listItem = document.createElement("li")
        listItem.textContent = starship.name

shipAnchor.addEventListener("click", event => {
   let shipName = event.target.textcontent
   const foundShip = starships.find(ship => 
   ship.name === shipName )
   console.log(foundShip)
   populateShipView(foundShip)
  


})


shipAnchor.appendChild(listItem)
    navList.appendChild(shipAnchor)
      
        
    });
    
    nav.appendChild(navList)
}

function populateShipView(shipData) {
    removeChildren(shipView)
    let imageNum = getLastNumber(shipData.url)
    let shipImage = document.createElement("img")
    shipImage.src = `https://starwars-visualguide.com/assets/img/starships/${imageNum}.jpg`

    shipImage.addEventListener('error', even => {
        shipImage.hidden = true
        modalDialog.classList.toggle("is-active")
        modalMessage.textContent = `Sorry could not find an image for ${shipData.name}`
    })

    shipView.appendChild(shipImage)

}

populateNav(starships)
