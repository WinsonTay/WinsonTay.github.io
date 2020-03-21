card = document.querySelectorAll('.project-card');
var cnt=1;

card[0].classList.add("show-card");
// for(var i=0; i< card.length; i++){       
//     card[i].onmouseover= function(){
//         this.classList.add("test");
//     }
// };

// for(var i=0; i< card.length; i++){       
//     card[i].onmouseout= function(){
//         this.classList.remove("test");
//     }
// };
setInterval(function(){ 
  card[cnt].classList.add("show-card");
  for (i=0 ; i<card.length; i++){
    //   debugger;
      if (cnt != i) {
        card[i].classList.remove("show-card");
      }
  }

  cnt = cnt+1;
  console.log(cnt);
  if (cnt > card.length-1){
      cnt = 0;
    }  

}, 2500);


// card.onmouseout = function(){
//     card.classList.remove("test");
// }

