import { products } from "./Data.js"



const Homescren = {
    render: () => {
        console.log(products)
        return `
    ${products.map((x) => (

`
 <a href="/#/product/${x.id}">${x.name}hhh</a>
 <a href="/#/product/${x.id}">${x.study}</a>
 <a href="/#/product/${x.id}?name=${x.name}">hhhaa</a>

            `










        ))
            }
        

    

    
    
    `
    }



}
export default Homescren