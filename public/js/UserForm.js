$('.userSubmit').click(function(e){
    var userName = $('input[name="user"]').val();
    $.post('/users', {user:userName})
        .then(function(e){
            addUser(e);
            //renderUserList();
        })
})