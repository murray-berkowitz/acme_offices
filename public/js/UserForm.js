$('.userSubmit').click(function(e){
    var userName = $('input[name="user"]').val();
    $.post('/users', {user:userName})
        .then(function(e){
            addUser(e);
            //renderUserList();
        })
})

$(window).on('click', '.userDelete', function(e){
    var userId = $(this).attr('data-delete-value');
    alert('clicked', userId);
    $.ajax({
        url: `/users/${userId}`,
        type: 'DELETE',
        success: function(result) {
            $(`[data-delete-value = '${userId}']`).remove();
        }
    })
})