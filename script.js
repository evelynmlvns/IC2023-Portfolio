//HomePage button functions when clicked (first Page) //

function aboutPageClick() {
    console.log("check");
    let abtMePage= document.querySelector(".abtMePage")
    let homePage= document.querySelector(".homePage")

    homePage.style.display="none";
    abtMePage.style.display="block";
}

function accomplishmentsClick() {
    let homePage= document.querySelector(".homePage")
    let accomplishmentsPage= document.querySelector(".accomplishmentsPage")

    homePage.style.display="none";
    accomplishmentsPage.style.display="block";
}

function hobbiesClick() {
    let homePage= document.querySelector(".homePage")
    let hobbiesPage= document.querySelector(".hobbiesPage")

    homePage.style.display="none";
    hobbiesPage.style.display= "block";
}

function careersClick() {
    let homePage= document.querySelector(".homePage")
    let careersPage= document.querySelector(".careersPage")

    homePage.style.display="none";
    careersPage.style.display= "block";
}

function projectsClick() {
    let homePage= document.querySelector(".homePage")
    let projectsPage= document.querySelector(".projectsPage")

    homePage.style.display="none";
    projectsPage.style.display= "block";
}

// function contactClick(){

//     homePage.style.display="none";
// }




//navigation bars function so they arent blocked//

function homeBarClick() {
    let homePage= document.querySelector(".homePage")
    let abtMePage= document.querySelector(".abtMePage")
    let accomplishmentsPage= document.querySelector(".accomplishmentsPage")
    let hobbiesPage= document.querySelector(".hobbiesPage")
    let careersPage= document.querySelector(".careersPage")
    let projectsPage= document.querySelector(".projectsPage")

    homePage.style.display="block"
    abtMePage.style.display="none"
    accomplishmentsPage.style.display="none"
    hobbiesPage.style.display="none"
    careersPage.style.display="none"
    projectsPage.style.display="none"
}

function accomplishBarClick() {
    let homePage= document.querySelector(".homePage")
    let abtMePage= document.querySelector(".abtMePage")
    let accomplishmentsPage= document.querySelector(".accomplishmentsPage")
    let hobbiesPage= document.querySelector(".hobbiesPage")
    let careersPage= document.querySelector(".careersPage")
    let projectsPage= document.querySelector(".projectsPage")

    homePage.style.display="none"
    abtMePage.style.display="none"
    accomplishmentsPage.style.display="block"
    hobbiesPage.style.display="none"
    careersPage.style.display="none"
    projectsPage.style.display="none"
}

function abtMeBarClick() {
    let homePage= document.querySelector(".homePage")
    let abtMePage= document.querySelector(".abtMePage")
    let accomplishmentsPage= document.querySelector(".accomplishmentsPage")
    let hobbiesPage= document.querySelector(".hobbiesPage")
    let careersPage= document.querySelector(".careersPage")
    let projectsPage= document.querySelector(".projectsPage")

    homePage.style.display="none"
    abtMePage.style.display="block"
    accomplishmentsPage.style.display="none"
    hobbiesPage.style.display="none"
    careersPage.style.display="none"
    projectsPage.style.display="none"
}
function hobbiesBarClick() {
    let homePage= document.querySelector(".homePage")
    let abtMePage= document.querySelector(".abtMePage")
    let accomplishmentsPage= document.querySelector(".accomplishmentsPage")
    let hobbiesPage= document.querySelector(".hobbiesPage")
    let careersPage= document.querySelector(".careersPage")
    let projectsPage= document.querySelector(".projectsPage")

    homePage.style.display="none"
    abtMePage.style.display="none"
    accomplishmentsPage.style.display="none"
    hobbiesPage.style.display="block"
    careersPage.style.display="none"
    projectsPage.style.display="none"
}

function careersBarClick() {
    let homePage= document.querySelector(".homePage")
    let abtMePage= document.querySelector(".abtMePage")
    let accomplishmentsPage= document.querySelector(".accomplishmentsPage")
    let hobbiesPage= document.querySelector(".hobbiesPage")
    let careersPage= document.querySelector(".careersPage")
    let projectsPage= document.querySelector(".projectsPage")

    homePage.style.display="none"
    abtMePage.style.display="none"
    accomplishmentsPage.style.display="none"
    hobbiesPage.style.display="none"
    careersPage.style.display="block"
    projectsPage.style.display="none"
}

function projectsBarClick() {
    let homePage= document.querySelector(".homePage")
    let abtMePage= document.querySelector(".abtMePage")
    let accomplishmentsPage= document.querySelector(".accomplishmentsPage")
    let hobbiesPage= document.querySelector(".hobbiesPage")
    let careersPage= document.querySelector(".careersPage")
    let projectsPage= document.querySelector(".projectsPage")

    homePage.style.display="none"
    abtMePage.style.display="none"
    accomplishmentsPage.style.display="none"
    hobbiesPage.style.display="none"
    careersPage.style.display="none"
    projectsPage.style.display="block"
}