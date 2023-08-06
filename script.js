var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove('active-links')
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove('active-skills')
    } event.currentTarget.classList.add('active-links')
    document.getElementById(tabname).classList.add('active-skills')

}

var sidemenu = document.getElementById('class-menu')

function openmenu() {
    sidemenu.style.right = '0';
}
function closemenu() {
    sidemenu.style.right = "-200px"
}

