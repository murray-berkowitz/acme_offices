/*autocomplete.addListener('place_changed', function() {
    var place = autocomplete.getPlace();
    console.log(place);
    $.post('/office', {name:place.formatted_address, lat:place.geometry.location.lat(), lng:place.geometry.location.lng()})
        .then(function(office){
            addOffice(office);
        })
});*/

function officeForm(place){
    $.post('/office', {name:place.formatted_address, lat:place.geometry.location.lat(), lng:place.geometry.location.lng()})
        .then(function(office){
            addOffice(office);
        })
}