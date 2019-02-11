// - Fires when the browser in unloading (Closing).
// - Chrome doesn't show the return message.
// - Chrome updated how it handle the onbeforeunload, the user needs to
//     click inside the frame for the function to be executed.
window.onbeforeunload = function() { return "Would you really like to close your browser?"; }

// Gets the cookie by its name
function getCookie(name) {
    var nameEQ = name + '='
    var ca = document.cookie.split(';')
    for(var i=0; i < ca.length; i++) {
        var c = ca[i]
        while (c.charAt(0)==' ') c = c.substring(1, c.length)
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length)
    }
    return null
}

// Sets cookie by its name with value
function setCookie(name, value, days) {
    var expires = ''
    if (days) {
        var date = new Date()
        date.setTime(date.getTime() + (days*24*60*60*1000))
        expires = '; expires=' + date.toUTCString()
    }
    document.cookie = name + '=' + (value || '')  + expires + '; path=/'
}

// Executes when the DOM is loaded
document.addEventListener('DOMContentLoaded', function(event) {
    // checks for mode cookie
    if (getCookie('mode')) {
        // if it exists then get its value and if == dark
        //     then set body's class to dark (body.dark css styles)
        var mode = getCookie('mode')
        if (mode == "dark") {
            document.body.className = "dark"
        } else {
            document.body.className = ""
        }
    }
// simple stuff, if dark then set the cookie to dark
//    else then set it to darknot
    var btn = document.getElementsByClassName('toggle-btn')
    btn[0].addEventListener('click', function() {
        document.body.classList.toggle('dark')
        if (document.body.className == "dark") {
            setCookie('mode', 'dark')
        } else {
            setCookie('mode', 'darknot')
        }
    })
})
