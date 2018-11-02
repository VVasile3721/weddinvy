function Generator() { };
Generator.prototype.rand = Math.floor(Math.random() * 26) + Date.now();
Generator.prototype.getId = function () {
    return this.rand++;
};
var idGen = new Generator();
var uniqueId = idGen.getId();

$('#form').submit(function (event) {
    event.preventDefault();
    var $form = $(this);
    var formData = {
        TableNo: $form.find('input[name=table]').val(),
        GuestName: $form.find('input[name=guest]').val(),
        CheckIn: `<form><label for="checkbox-mini-${x = idGen.getId()}">Check in</label><input id="checkbox-mini-${x}" type="checkbox" name="checkbox-mini-${x}" data-mini="true" onchange="checkboxes(this.id)"><input id="checkbox-mini-${x}" type="button" data-mini="true" value="Uncheck" onclick="enableCheckbox(this.id)">`
    };
    var guests = JSON.parse(localStorage.getItem("guests"));
    guests.push(formData);
    localStorage.setItem("guests", JSON.stringify(guests));
    window.location = "index.html";
});

const goBack = () => {
    window.location = "index.html";
}