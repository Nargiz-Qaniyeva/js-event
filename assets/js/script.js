const buttons = document.querySelectorAll(".btn");
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      let giftImg = document.getElementById(`${btn.dataset.targetId}`);
      giftImg.style.filter = "none";
      btn.style.opacity = "0";
      btn.setAttribute("disabled", "true");
    });
  });

// const button=document.querySelector("btn");
// const img=document.querySelector("img");
// img.style.display="none";

// button.onclick = () =>{
//   if(img.style.display==="none"){
//     img.style.display = 'block';
//   }
//   else{
//     img.style.display="none";
//   }
// // };
// function open (){
// document.getElementById("#btn").click(function(){
//   document.querySelector(".button").show;
// }
// )};
// document.querySelector(".giftimg").click(function(){
//   document.querySelector(".button").ariaHidden();
//   document.querySelector("#btn"+$(this).attr("button").show());
// });
const toggleButtons = document.getElementsByClassName("btn");

for (var i = 0; i < toggleButtons.length; i++) {
	toggleButtons[i].onclick = btn;
}		
function btn() { 
  if (this.getAttribute("aria-checked") == "true") {
      this.setAttribute("aria-checked", "false");
  } else {
      this.setAttribute("aria-checked", "true");
  }
};


  //   function w3_open() {
//     document.getElementById("mySidebar").style.display = "block";
//   }
  
//   function w3_close() {
//     document.getElementById("mySidebar").style.display = "none";
//   }
 
// function btn_open(){
//     document.getElementById("btn1").style.display="block";
// }
// function btn_close() {
//     document.getElementById("btn1").style.display="none";
// }
  

