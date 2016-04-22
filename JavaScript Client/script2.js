// var ipAddress = '';
// var portNumber = 0;

window.onload = function(){
   var ipAddress = window.prompt('Please enter the IP Address as indicated by IoTWifiCam on your phone!');
   var portNumber = parseInt(window.prompt('Please enter the port number:'));
    setInterval(
        function(){
            makeAjaxRequest(ipAddress, portNumber);
        }
        ,  100);
}

function createImageFromString(encodedData){
    return 'data:image/png;base64,' + encodedData;
}

function displayImageFromBase64String(encodedString){
    var imageUrl = createImageFromString(encodedString);
    var imageElement = document.getElementById('result')
    imageElement.setAttribute('src', imageUrl);
}

function makeRequestUrl(ipAddress, portNumber){
        return "http://" + ipAddress + ":" + portNumber;
}


function makeAjaxRequest(ipAddress, portNumber){
    var xReq = new XMLHttpRequest();
    console.log('Ip Address = ' + ipAddress)
    console.log('Port number = ' + portNumber)
    xReq.onreadystatechange = function(){
	if(xReq.readyState == 4 && xReq.status == 200){
	    var response = xReq.response;
    	    console.log('obtained the response')
	    displayImageFromBase64String(response);	
    	}
    }
    var requestUrl = makeRequestUrl(ipAddress, portNumber);
    xReq.open("GET", requestUrl,  true)	// should be asynchronous
    xReq.send();
}

