import { parseUrlRouters } from "./Utils.js"




const productScreen = {
     
    

    
    
    
    
    render: () => {
        const {quearyName}=parseUrlRouters()
        console.log(quearyName)
        // console.log(products)
        return `
        ${
        quearyName==="faaiz"? (`<div>Admin</div>`):(`<div>user</div>`)
        
        
        }

            

`
    }



}
export default productScreen