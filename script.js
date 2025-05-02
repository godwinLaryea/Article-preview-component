const popUpMobile = document.querySelector(".pop-up-mobile");

const popUpDesktop = document.querySelector(".pop-up-desktop");

const shareLink = document.getElementById("share-link");

const authorProfile = document.querySelector(".author-profile-image");

popUpMobile.style.display = "none";

popUpDesktop.style.display = "none";

function mobileView(){
  if ((popUpMobile.style.display === "none")) {
    popUpMobile.style.display = "flex"; 
    authorProfile.style.display = "none";
    document.querySelector(".author-socials").style.backgroundColor = "hsl(219, 19%, 35%)";
    document.querySelector("#share-text").style.color = "hsl(214, 17%, 51%)";
    document.querySelector(".share-image").style.backgroundColor = "hsl(212, 23%, 69%)";
  } else{
    popUpMobile.style.display = "none";
    authorProfile.style.display = "flex";
    document.querySelector(".author-socials").style.backgroundColor = "";
    document.querySelector(".share-image").style.backgroundColor = ""
  }
};


function largeScreen() {
  if(popUpDesktop.style.display === "none"){
    popUpDesktop.style.display = "flex";
    document.querySelector("#share-text-lg").style.color = "hsl(214, 17%, 51%)";
  }else{
    popUpDesktop.style.display = "none"; 
  }
}


if (window.matchMedia("(max-width: 39rem)").matches){
  shareLink.addEventListener("click", mobileView);
}


if(window.matchMedia("(min-width: 40rem)").matches){
  shareLink.addEventListener("click", largeScreen);
}