/* <!-- -----------------about------------- --> */

var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabname){
    for( tabLink of tabLinks ){
        tabLink.classList.remove("active-link");
    }
    for( tabcontent of tabContents ){
        tabcontent.classList.remove("active-tab");

    }
    document.getElementById(tabname).classList.add("active-tab");
    // Event.cuurentTarget.classList.add("active-link");
    
}

