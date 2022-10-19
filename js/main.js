// Add all your JS here
let generateEl=document.getElementById("generate-el")
let inputEl=document.getElementById("input-el")
let displayEl=document.getElementById("display-el")

generateEl.addEventListener("click", function(){
  let baseValue=inputEl.value
displayEl.textContent=`${baseValue} = ${baseValue*baseValue}`
})