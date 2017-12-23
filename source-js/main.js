jQuery(document).ready(function (event) {
  jQuery('.add-task').on('click', function () {
    var valueTask = jQuery('.input-task').val()
    if (!valueTask) {
      alert('Please, enter your text')
      return false
    }

    jQuery('.todo-container').append("<li> <span>" + valueTask + "</span> <button class='delete'>×</button><button class='change'>change</button></li>")
    jQuery('.input-task').val('')


    jQuery(".delete").on('click', function () {
      jQuery(this).parent().remove()
    })
  })
})

