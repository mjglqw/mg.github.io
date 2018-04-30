text = document.getElementById('logo_ascii');

logoascii = new XMLHttpRequest();
logoascii.open("GET", "js/logo_ascii.txt");
logoascii.send();

logoascii.onreadystatechange = function() {
    if (logoascii.readyState == 4)               //the readyState if the status of the request 
        text.innerHTML = logoascii.responseText; // (http://www.w3schools.com/ajax/ajax_xmlhttprequest_onreadystatechange.asp)
                                           // 4 is a completed request
}