(function(){
    var input = document.getElementById('pac-input');
    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.addListener('place_changed', function() {
        var place = autocomplete.getPlace();
        officeForm(place);
    });
    renderUserList();
})()