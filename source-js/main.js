jQuery(document).ready(function () {
  jQuery('.add-task').on('click', addItem)
  jQuery('.todo-container').on('change','.checkbox', completeItem)
  jQuery('.todo-container').on('click', '.delete', deleteItem)

  jQuery('.input-task').on('keypress', function(event) {
    if (event.which === 13) {
      addItem();
      event.preventDefault()
    }
  })

  function addItem(event) {
    var valueTask = jQuery('.input-task').val()
    if (!valueTask) {
      alert('Please, enter your text')
      return false
    }

    var appendValue = ("<li><span>" + valueTask + "</span><input type='checkbox' class='checkbox'><button class='delete'>×</button></li>")
    jQuery('.todo-container').append(appendValue)
    jQuery('.input-task').val('')
  }


  function deleteItem(event) {
    jQuery(this).parent().remove()
  }

  function completeItem(event) {
    jQuery(this).parent().toggleClass('done')
  }
})