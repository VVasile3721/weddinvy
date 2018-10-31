// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
//$(document).ready(function () {
//});
function Generator() { };
Generator.prototype.rand = Math.floor(Math.random() * 26) + Date.now();
Generator.prototype.getId = function () {
    return this.rand++;
};
var idGen = new Generator();
var uniqueId = idGen.getId();

var guests = [
    {
        "TableNo": `10`,
        "GuestName": `Vasile Vlad`,
        "CheckIn": `<form><label for="checkbox-mini-${x = idGen.getId()}">Check in</label><input id="checkbox-mini-${x}" type="checkbox" name="checkbox-mini-${x}" data-mini="true" onchange="checkboxes(this.id)"><input id="checkbox-mini-${x}" type="button" data-mini="true" value="Uncheck" onclick="enableCheckbox(this.id)">`
    },
    {
        "TableNo": `21`,
        "GuestName": `Mihaila Andra`,
        "CheckIn": `<form><label for="checkbox-mini-${x = idGen.getId()}">Check in</label><input id="checkbox-mini-${x}" type="checkbox" name="checkbox-mini-${x}" data-mini="true" onchange="checkboxes(this.id)"><input id="checkbox-mini-${x}" type="button" data-mini="true" value="Uncheck" onclick="enableCheckbox(this.id)">`
    }
];

const createNew = () => {
    $.mobile.changePage('create.html');
}

$('#form').submit(function (event) {
    event.preventDefault();

    var $form = $(this);
    var formData = {
        TableNo: $form.find('input[name=table]').val(),
        GuestName: $form.find('input[name=guest]').val(),
        CheckIn: `<form><label for="checkbox-mini-${x = idGen.getId()}">Check in</label><input id="checkbox-mini-${x}" type="checkbox" name="checkbox-mini-${x}" data-mini="true" onchange="checkboxes(this.id)"><input id="checkbox-mini-${x}" type="button" data-mini="true" value="Uncheck" onclick="enableCheckbox(this.id)">`
    };
    console.log(formData);
    console.log(guests);
    guests.push({
        "TableNo": formData.TableNo,
        "GuestName": formData.GuestName,
        "CheckIn": `<form><label for="checkbox-mini-${x = idGen.getId()}">Check in</label><input id="checkbox-mini-${x}" type="checkbox" name="checkbox-mini-${x}" data-mini="true" onchange="checkboxes(this.id)"><input id="checkbox-mini-${x}" type="button" data-mini="true" value="Uncheck" onclick="enableCheckbox(this.id)">`
    });
    console.log(guests);
    $('#guest-table').listview('refresh');
});

var tbody = $('#guest-table tbody'),
    props = ["TableNo", "GuestName", "CheckIn"];
$.each(guests, function (i, guest) {
    var tr = $('<tr>');
    $.each(props, function (i, prop) {
        $('<td>').html(guest[prop]).appendTo(tr);
    });
    tbody.append(tr);
});

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