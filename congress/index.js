import { senators } from '../Data/senators.js'
import { representatives } from '../Data/representatives.js'

//this is all about filter, map, reduce

const container = document.querySelector('.conatiner')

const filterSenators = (prop, value) => {

    return senators.filter(senator => senator[prop] === value)

}
console.log(filterSenators('party','R'))
console.log(filterSenators('party','D'))
console.log(filterSenators('party','ID'))