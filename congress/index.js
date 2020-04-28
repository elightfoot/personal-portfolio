import { senators } from '../data/senators.js'

// this is all about filter, map, reduce

const container = document.querySelector('.container')

const filterSenators = (prop, value) => {
    return senators.filter(senator => senator[prop] === value)
}


function simplifiedSenators(senatorArray) {
    
    return senatorArray.map(senator => {
        let middleName = senator.middle_name ? ` ${senator.middle_name} ` : ` `
        return {
            id: senator.id,
            name: `${senator.first_name}${middleName}${senator.last_name}`,
            imgURL: `https://www.govtrack.us/static/legislator-photos/${senator.govtrack_id}-200px.jpeg`,
            seniority: parseInt(senator.seniority, 10),
            votesWithPartyPct: senator.votes_with_party_pct
        }
    })
}

function populateContainer(smallSenatorsArray) {
    return smallSenatorsArray.forEach(senator => {
        
        let senFigure = document.createElement('figure')
        let figImg = document.createElement('img')
        let figCaption = document.createElement('figcaption')

        figImg.src = senator.imgURL
        figCaption.textContent = senator.name

        senFigure.appendChild(figImg)
        senFigure.appendChild(figCaption)
        container.appendChild(senFigure)
        
    })
}
function removeChildren(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
      }
}
const republicans = filterSenators('party', 'R')
const democrats = filterSenators('party', 'D')

const mostSeniority = simplifiedSenators(republicans).reduce(
    (acc, senator) => {
        return acc.seniority > senator.seniority ? acc : senator
    }
)

let republicansButton = document.querySelector('#republicans')
let democratsButton = document.querySelector('#Democrats')

democratsButton.addEventListener("click", function( event){
    removeChildren(container)
    populateContainer(simplifiedSenators(democrats))
  
})
republicansButton.addEventListener("click", function( event){
    removeChildren(container)
    populateContainer(simplifiedSenators(republicans))

})


let loyalArray = []

const mostLoyal = simplifiedSenators(democrats).reduce((acc, senator) => {
    if (senator.votesWithPartyPct === 100){
        loyalArray.push(senator)
    }
    return acc.votesWithPartyPct > senator.votesWithPartyPct ? acc : senator})

console.log(mostSeniority)
console.log(loyalArray)



populateContainer(simplifiedSenators())