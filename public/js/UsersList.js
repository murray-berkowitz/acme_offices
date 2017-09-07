function renderUserList(){
    $.get('/users')
        .then(function(result){
            result.forEach(function(user){
                $('.user-list').append(`<h2 data-value=${user.id}>${user.name}</h2>`);
            })
        })
}

function addUser(user){
    $('.user-list').append(`<h2 data-value=${user.id}>${user.name}</h2>`);
}