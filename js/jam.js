function getJam() {
    var success = 0;
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 0) {
            console.log("not initialized");
        }
        if (xmlhttp.readyState == 1) {
            console.log("connection established");
        }
        if (xmlhttp.readyState == 2) {
            console.log("request received");
        }
        if (xmlhttp.readyState == 3) {
            console.log("processing request");
        }
        if (xmlhttp.readyState == 4) {
            success = xmlhttp.responseText;
            if (success == 0)
            {
            	alert("FUCK");
            }
            else
            {
            	var jamArr = success.split(";");
            	console.log(jamArr);
            	changeJam(jamArr);
            }
        }
    }
    xmlhttp.open("POST", "php/getJam.php", true);
    xmlhttp.send();
}