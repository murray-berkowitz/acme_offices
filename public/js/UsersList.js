function renderUserList(){
    $.get('/users')
      .then(function(result){
            result.forEach(function(user){
                $('.user-list').append(`<div class='userCont' data-userid-value=${user.id}><h2>${user.name}</h2><a href='#' class='userDelete' data-delete-value=${user.id}>Delete</a><select class='officeDropdown'></select></div>`);
            })
            renderOfficeDropdown();
      })
}

function addUser(user){
    $('.user-list').append(`<div class='userCont' data-userid-value=${user.id}><h2>${user.name}</h2><a href='#' class='userDelete' data-delete-value=${user.id}>Delete</a><select class='officeDropdown'></select></div>`);
    renderOfficeDropdown();
}

function renderOfficeDropdown(){
    var html = '';
    $.get('/office')
      .then(function(result){
          html = '<option>---</option>';
          result.forEach(function(office){
            html += `<option data-office-id=${office.id}>${office.name}</option>`;
           })
           $('.officeDropdown').each(function(){
              $(this).html(html)
           })
      })
}