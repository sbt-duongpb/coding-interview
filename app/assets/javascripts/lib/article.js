console.log($('.article'))

$(document).on('turbolinks:load', function() {
  console.log($('.article'))
});