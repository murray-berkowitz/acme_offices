$('.userSubmit').click(function(e){
    var userName = $('input[name="user"]').val();
    $.post('/users', {user:userName})
        .then(function(e){
            addUser(e);
            //renderUserList();
        })
})

$('body').on('click', 'a.userDelete', function(e){
    var userId = $(this).attr('data-delete-value');
    $(`.userCont[data-userid-value = ${userId}]`).remove();
    $.ajax({
        url: `/users/${userId}`,
        dataType: 'json',
        type: 'DELETE'
    })
})