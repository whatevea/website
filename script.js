let h1=document.getElementById("animate_me");

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
