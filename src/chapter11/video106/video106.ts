export{}
console.log("video 106")

const btnElemnt = document.getElementById("myBtn")
const inputElemnt = document.getElementById("name") as HTMLInputElement

btnElemnt?.addEventListener("click",()=>{
    alert(inputElemnt?.value)
})