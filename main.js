window.onbeforeunload = function() { return "Would you really like to close your browser?"; }
document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    if (sessionStorage.getItem('mode')) {
        var mode = sessionStorage.getItem('mode')
        if (mode == "dark") {
            document.body.className = "dark"
        } else {
            document.body.className = ""
        }
    } else {
        if (document.body.className == "dark")
            sessionStorage.setItem('mode', 'dark')
    }

    var btn = document.getElementsByClassName('toggle-btn')
    btn[0].addEventListener('click', function() {
        document.body.classList.toggle('dark')
        if (document.body.className == "dark") {
            sessionStorage.setItem('mode', "dark")
        } else {
            sessionStorage.setItem('mode', "darknot")
        }
    })
})
