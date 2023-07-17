var deferredPrompt;
if("serviceWorker" in navigator){
    navigator.serviceWorker
    .register("/serviceworkers.js")// / slash means to make sure we allways go to the root folder(public) first and then go to the our sws file name // register actually return a promise.
    .then(function(){
        console.log("Service worker registered");
    })
}    

window.addEventListener("beforeinstallprompt",function(event){
    console.log("beforeinstallprompt fired");
    event.preventDefault();
    deferredPrompt = event;
    return false;
})