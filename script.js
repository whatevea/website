let h1=document.getElementById("animate_me");
let search_btn=document.getElementById("button-addon2");
function getMediaType(){
   var radioButtons = document.getElementsByName("flexRadioDefault");
  for(var i = 0; i < radioButtons.length; i++)
    {
      if (radioButtons[i].checked===true){
        return radioButtons[i].value;
      }
      
    }
  
}
search_btn.onclick=()=>{
  let query=document.getElementById("query_here").innerText;
let type= getMediaType();
   var url;
 if(type="engish"){
   url=`https://fmovies.to/search?keyword=${query}`;
   }
  if(type="anime")
{
   url=`https://9anime.to/filter?keyword=${query}`;
}
  else{
     url=`https://hindilinks4u.kim/?s=${query}`;
  }
  window.location=url;
 //onclick end 
  
}

setInterval(change,400);

  

function change(){
  console.log("iam inside loop");
  if(!h1.innerText.includes("?????")){
  h1.innerText+="?";
}
  else{
    h1.innerText="What do you want to Watch ?";
  }
}
