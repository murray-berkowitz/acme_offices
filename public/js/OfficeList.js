function renderOfficeList(){
    $.get('/office')
        .then(function(result){
            result.forEach(function(office){
                $('.office-list').append(`<p>${office.name}<br/>${office.lat} ${office.lng}</p>`);
            })
        })
}
function addOffice(office){
    $('.office-list').append(`<p>${office.name}<br/>${office.lat} ${office.lng}</p>`);
}