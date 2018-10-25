// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
//$(document).ready(function () {
//});
const checkboxes = id => {
    var checkedGuests = document.querySelectorAll('input[type="checkbox"]:checked').length;
    var totalGuests = document.querySelectorAll('input[type="checkbox"]').length;
    var leftGuests = totalGuests - checkedGuests;
    document.getElementById("guests").innerHTML = '<p> Total guests: <b>' + totalGuests + '</b></p><p> Arrived: <b>' + checkedGuests + '</b></p><p> Left: <b>' + leftGuests;
    if (document.getElementById(id).checked == true) {
        document.getElementById(id).disabled = true;
    }
}

const enableCheckbox = id => {
    console.log('should enable back');
    $('#' + id).prop('disabled', false).checkboxradio('refresh');
}




//(function () {
//    "use strict";

//    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

//    function onDeviceReady() {
//        // Handle the Cordova pause and resume events
//        document.addEventListener( 'pause', onPause.bind( this ), false );
//        document.addEventListener( 'resume', onResume.bind( this ), false );
        
//        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
//        var parentElement = document.getElementById('deviceready');
//        var listeningElement = parentElement.querySelector('.listening');
//        var receivedElement = parentElement.querySelector('.received');
//        listeningElement.setAttribute('style', 'display:none;');
//        receivedElement.setAttribute('style', 'display:block;');
//        //navigator.vibrate(2000);

//    };

//    function onPause() {
//        // TODO: This application has been suspended. Save application state here.
//    };

//    function onResume() {
//        // TODO: This application has been reactivated. Restore application state here.
//    };
//} )();