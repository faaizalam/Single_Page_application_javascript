const display=document.querySelector("#display")
 const show=document.querySelector("#show")
// console.log(show)
 let intervaldis 

   const start =document.querySelector(".start")
    const readys=(()=>{

   
         

        let min=Number(document.getElementById("getmin").value||"")
        let sec=Number(document.getElementById("getsec").value||"")
        
    // }
    // const seconds=document.querySelector("#seconds")
 
      
    if (!min.toString().trim()||!sec.toString().trim()) {
        // window.alert("kindly give minutes and seconds ")

        return
    }else{
        if (min!==0&&sec!==0) {
            
            console.log("gg")
           
          intervaldis =setInterval(()=>{
              
              
    if (sec===0&&min===0) {
        clearInterval(intervaldis)
        
    }else{
        sec=sec-1
        if (sec<=0&&min!==0) {
                 sec=60
                 min=min-1
            
        }



    }
   

           display.innerHTML=`${min+":"+sec}`
           show.innerHTML=`${min+":"+sec}`
           document.getElementById('getsec').value=sec
           document.getElementById('getmin').value=min
        
           
           
           
         
          },1000)
          
          return()=>clearInterval(interval)
          
           
        }




    }




   



    
})
start.addEventListener("click",readys)

//  export const reset=(params)=> {
    export const reset=document.getElementById("reset").addEventListener("click",(()=>{
      

    clearInterval(intervaldis)
    display.innerHTML=`00:00`
    show.innerHTML=`00:00`
}))


    
// }


// // clearInterval(intervaldis)


export const pasuse=document.getElementById("pause").addEventListener("click",(()=>{
    clearInterval(intervaldis)
   

}))

    


console.log("hello")

const n = document.getElementById("n").addEventListener("click",(()=>{
    console.log("click",window.location.hash)

}))

const resume=document.querySelector(".starts").addEventListener("click",(()=>{
    clearInterval(intervaldis)
   readys()

}))
export default {n,start,reset,pasuse,resume}