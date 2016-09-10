$(document).ready(function() {
  $('.find-definitions').on("click", function(){
    //This is where we capture the value
    var term = $('#term_name').val()
    $.getScript({url:"/definitions_controller/search", data: {term: term}})
  })

  $('.find-definitions').on("click", "li", function(){
    var selected_definition = $(this).text()
    $()
  }

  )
})
