// let count = 5
// count = count + 1
// console.log(count)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let saveEl=document.getElementById("save-el")
let countEl=document.getElementById("count-el")
console.log(countEl)
let count=0


//INCREMENT FUNCTION
 function increment(){
   console.log("clicked")
   count=count+1
   countEl.innerText=count
 }

 //decremenT FUNCTION
 function decrement(){
   console.log("clicked")
   count=count-1
   if (count>=0)
   countEl.innerText=count
   else
   count=0
 }

 //SAVE FUNCTION
 // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
function save(){
  let countStr=count+" - " //2
saveEl.innerText+=countStr
console.log(count)
countEl.textContent=0
count=0

}

//RESET FUNCTION
 function reset(){
console.log(count)
saveEl.innerText="PREVIOUS ENTRIES:"
countEl.textContent=0

}


// Google:to find bugs in our programs if any..
// innerText alternative mdn
