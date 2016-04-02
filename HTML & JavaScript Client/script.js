
// window.onload = function(e){
//     makeAjaxRequest();


// }

function createImageFromString(encodedData){
    return 'data:image/png;base64,' + encodedData;
}

function displayImageFromBase64String(encodedString){
    var imageUrl = createImageFromString(encodedString);
    var imageElement = document.getElementById('result')
    imageElement.setAttribute('src', imageUrl);
}

function makeAjaxRequest(){
    var xReq = new XMLHttpRequest();
    xReq.open("GET", "http://10.16.12.66:1069/wificam",  true)
    
   // xReq.responseType = "text"
    xReq.send(null)
    var response = xReq.response;
    console.log(response)
    var result = document.getElementById('videoDiv')
    //result.innerHTML = response   
  //  console.log('result is = ' + result.innerHTML)
    displayImageFromBase64String(response);
}

setInterval(makeAjaxRequest,  300);


