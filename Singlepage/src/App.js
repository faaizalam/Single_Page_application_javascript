import Errorpage from "./Error.js"
import Homescren  from "./Home.js"
import productScreen from "./Product.js"
import { parseUrlRouters } from "./Utils.js"


console.log("hello from Single page")

const routes={
    "/":Homescren,
    "/product/:id":productScreen,
    "/product/:id?name":""
}

const router=()=>{
    const parse=parseUrlRouters()
    // console.log((parse.verbose?`?${parse.verbose}`:"nnn"))
  const parsurl=(parse.resourse?`/${parse.resourse}`:"/")+(parse.id?"/:id":"")+(parse.verbose?`?${parse.verbose}`:"")

  const screen=routes[parsurl]?routes[parsurl]:Errorpage
  const main=document.getElementById("main-cont")
  main.innerHTML=screen.render()


   
}


window.addEventListener("load",router)
window.addEventListener("hashchange",router)

