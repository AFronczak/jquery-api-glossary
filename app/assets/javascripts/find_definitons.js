// $(document).ready(function() {
//   $('.find-definitions').on("click", function(){
//     //This is where we capture the value
//     var term = $('#term_name').val()
//     $.getScript({url:"/definitions_controller/search", data: {term: term}})
//   })
//
//   $('.find-definitions').on("click", "li", function(){
//     var selected_definition = $(this).text()
//     $()
//   }
//
//   )
// })

// Write Javascript here to handle the click for that button/link
$(document).ready(function() {

  $(".find-definitions").on("click", function() {
    // Get the term from the form
    var term = $("#term_name").val()
    $.getScript({ url: "/definitions_controller/search", data: { term: term } })
  })

  $(".found-definitions").on("click", "li", function() {
    var selected_def = $(this).text()
    $('#term_definition').val(selected_def)
  })
})
