const displayData = (content)=>{
    result.value  += content
}

const clearcalcscreen = ()=>{
    result.value = ""
}
const evaluateExpr = ()=>{
    try{
        result.value = eval(result.value)
    }catch{
        result.value = "Invalid Expression"
    }

}
const removeLastcalcitem = ()=>{
    result.value = result.value.slice(0,-1)
}