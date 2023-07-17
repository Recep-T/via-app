var deferredPrompt;
if("serviceWorker" in navigator){ 
    navigator.serviceWorker  // first we acces to the service worker 
    .register("/serviceworkers.js")// then we call register .register is just a method for service worker/ slash means to make sure we always go to the root folder(public) first and then go to the our sws file name // register actually return a promise.
    .then(function(){ // so service worker API return us a promise if servise worker registered.
        // console.log("Service worker registered");
    })
    .catch(function(err){
     console.log(err);
    })
}    

window.addEventListener("beforeinstallprompt",function(event){
    // console.log("beforeinstallprompt fired");
    event.preventDefault();
    deferredPrompt = event;
    return false;
})

//example for handle async task in javascript
var promise = new Promise(function(resolve,reject){
    setTimeout(function(){
        // resolve("this is executed once the timer is done (after 3 second )!");
        reject({code: 500, message: "An error occurred"});
     },3000);
});
//Send GET HTTP Request
fetch("https://httpbin.org/ip") // We are sending GET request here .but we can send any HTTP request beside GET if needed.
   .then(function(response){
    console.log(response)
    return response.json(); //we need to parse response data always before use it.
   })
   .then(function(data){
    console.log(data)
   })
   .catch(function(err){
    console.log(err)
   });

   //Send POST HTTP Request
   fetch("https://httpbin.org/post",{
    method:"POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({ message: "Does this work?"})
   }) // We are sending GET request here .but we can send any HTTP request beside GET if needed.
   .then(function(response){
    console.log(response)
    return response.json(); //we need to parse response data always before use it.
   })
   .then(function(data){
    console.log(data)
   })
   .catch(function(err){
    console.log(err)
   });


promise.then(function(text){
    return text;
}).then(function(newText){
    console.log(newText);
}).catch(function(err){
    console.log(err.code, err.message);
});
console.log("this is executed right after setTimeout")