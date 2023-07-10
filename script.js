let abtMeButton= document.querySelector(".abtMeButton")
let accomplishmentsButton= document.querySelector(".accomplishmentsButton")
let hobbiesButton= document.querySelector(".hobbiesButton")
let plansButton= document.querySelector(".plansButton")
let projectsButton= document.querySelector(".projectsButton")
let contactButton= document.querySelector(".contact")
let homePage= document.querySelector(".homePage")
let abtMePage= document.querySelector(".abtMePage")
let accomplishmentsPage= document.querySelector(".accomplishmentsPage")
let hobbiesPage= document.querySelector(".hobbiesPage")
let careersPage= document.querySelector(".careersPage")
let projectsPage= document.querySelector(".projectsPage")



//HomePage button functions when clicked //
abtMeButton.onclick=function(){
    homePage.style.display="none";
    abtMePage.style.display="block";
}

accomplishmentsButton.onclick= function(){
    homePage.style.display="none";
    accomplishmentsPage.style.display="block";
}
hobbiesButton.onclick= function(){
    homePage.style.display="none";
    hobbiesPage.style.display= "block";
}
careersButton.onclick= function(){
    homePage.style.display="none";
    careersPage.style.display= "block";
}
projectsButton.onclick= function(){
    homePage.style.display="none";
    projectsPage.style.display= "block";
}

contactButton.onclick= function(){
    homePage.style.display="none";

}