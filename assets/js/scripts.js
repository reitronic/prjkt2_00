var askBtn = document.querySelector("#askBtn");
var result = document.querySelector("#result");
var eachArtist = document.querySelector("#aDis").children;
var random = Math.floor(Math.random() * eachArtist.length);

askBtn.addEventListener("click", function(){
  who()
  result.innerHTML = who().innerHTML;
  askBtn.innerHTML = "book" + " " + "with" + "<br>" +  "<span class=''>" + 
  who().id +" " + "!" + "</span>";
  askBtn.classList.add("bookNow");
})

function who(){
  console.log(eachArtist[random]);
  return eachArtist[random];
};


