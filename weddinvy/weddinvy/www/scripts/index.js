// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.

function Generator() { };
Generator.prototype.rand = Math.floor(Math.random() * 26) + Date.now();
Generator.prototype.getId = function () {
    return this.rand++;
};
var idGen = new Generator();
var uniqueId = idGen.getId();

var guestsArr = [
    {
        "TableNo": `10`,
        "GuestName": `Vasile Vlad`,
        "CheckIn": `<form><label for="checkbox-mini-${x = idGen.getId()}">Check in</label><input id="checkbox-mini-${x}" type="checkbox" name="checkbox-mini-${x}" data-mini="true" onchange="checkboxes(this.id)"><input id="checkbox-mini-${x}" type="button" data-mini="true" value="Uncheck" onclick="enableCheckbox(this.id)"><input id="${x}" type="button" data-mini="true" value="DELETE" data-icon="delete" class="deleteBtn">`
    },
    {
        "TableNo": `21`,
        "GuestName": `Mihaila Andra`,
        "CheckIn": `<form><label for="checkbox-mini-${x = idGen.getId()}">Check in</label><input id="checkbox-mini-${x}" type="checkbox" name="checkbox-mini-${x}" data-mini="true" onchange="checkboxes(this.id)"><input id="checkbox-mini-${x}" type="button" data-mini="true" value="Uncheck" onclick="enableCheckbox(this.id)"><input id="${x}" type="button" data-mini="true" value="DELETE" data-icon="delete" class="deleteBtn">`
    }
];
if (localStorage.getItem("guests") == undefined) {
    localStorage.setItem("guests", JSON.stringify(guestsArr));
}

var guests = JSON.parse(localStorage.getItem("guests"));

const createNew = () => {
    window.location = "create.html";
}

$("#guest-table").on('click', '.deleteBtn', function () {
    var currentRow = $(this).closest("tr");
    var col1 = currentRow.find(".item0").text();
    var data = col1;
    // got the table nr
    data = data.split("Table nr.:").pop();

    let someArray2 = JSON.parse(localStorage.getItem("guests"));
    someArray2 = someArray2.filter(el => el.TableNo !== data);
    localStorage.setItem("guests", JSON.stringify(someArray2));
    window.location.reload(true);
    //log("", "destructive filter/reassign " + data + " removed > someArray2 =",
    //    format(someArray2));
    //log(`**someArray2.length ${someArray2.length}`);
    //alert(data);
});

var tbody = $('#guest-table tbody'),
    props = ["TableNo", "GuestName", "CheckIn"];
$.each(guests, function (i, guest) {
    var tr = $('<tr>');
    $.each(props, function (i, prop) {
        $('<td class="item' + i +'">').html(guest[prop]).appendTo(tr);
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