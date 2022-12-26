
export const parseUrlRouters=(()=>{
    

const urll=document.location.hash
const request =urll.slice(1).split('?')[0]
const queary=urll.slice(1).toLowerCase().split("?")

console.log(queary,"n")
const q=queary.length===2?queary[1].split("="):""
console.log(q,"n")


const b=request.split('/')
// console.log(b,"b")
return {
resourse:b[1],
id:b[2],
verbose:b[b],
quearyName:q[1]


}

   
})
