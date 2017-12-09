text = document.getElementById('thankyou_ascii');

xhr = new XMLHttpRequest();
xhr.open("GET", "js/thankyou_ascii.txt");
xhr.send();

xhr.onreadystatechange = function() {
    if (xhr.readyState == 4)               //the readyState if the status of the request 
        text.innerHTML = xhr.responseText; // (http://www.w3schools.com/ajax/ajax_xmlhttprequest_onreadystatechange.asp)
                                           // 4 is a completed request
}