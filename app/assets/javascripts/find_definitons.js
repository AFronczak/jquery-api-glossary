$(document).ready(function() {

  $(".find-definitions").on("click", function() {
    var term = $("#term_name").val()
    $.getScript({ url: "/definitions_controller/search", data: {term: term} })
    console.log()
  })

  $(".found-definitions").on("click", "li", function() {
    var selected_def = $(this).text()
    $('#term_definition').val(selected_def)
  })
})
