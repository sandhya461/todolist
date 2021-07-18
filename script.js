// ONE WAY S
// let allItems = document.getElementById("parent");
// // adda common class to all the buttons
// let deleteBtn = document.getElementsByClassName("done_btn");
// // converting html collection to array, to use array methods
// Array.prototype.slice.call(deleteBtn).forEach(function(item) {
//   // iterate and add the event handler to it
//   item.addEventListener("click", function(e) {
//     e.target.parentNode.remove()
// //     const el = done_btn[0];
//     if(allItems.childElementCount==0){
//       allItems.appendChild(document.createTextNode("Ooops! List is empty"));
//   }

//   });
// })
// // ONE WAY E
 
// second way s
const allItems = document.getElementById("parent");

var allSubjectName = document.querySelectorAll(".child");
for (var index = 0; index <allSubjectName.length; index++){
   allSubjectName[index].addEventListener("click", function(){
      this.classList.toggle("active");
   });
   allSubjectName[index].querySelector("button").addEventListener("click",
   function(){
      this.closest(".child").remove();
      if(allItems.childElementCount==0){
             allItems.appendChild(document.createTextNode("Ooops! List is empty"));
         }
        
   });
}
// second way e