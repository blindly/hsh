$(document).ready(function () {

  // State
  $('#state').click(function (e) {
    $('#state_select').show();
  });

  $("#selected_state").change(function () {
    $('#state').css('background-color', 'green');

    $('#state_text').text($('#selected_state').val());
  });

  // Size
  $('#size').click(function (e) {
    $('#size_select').show();
  });

  $("#selected_size").change(function () {
    $('#size').css('background-color', 'green');

    $('#size_text').text($('#selected_size').val());

  });

  // Material
  $('#material').click(function (e) {
    $('#material_select').show();
  });

  $("#selected_material").change(function () {
    $('#material').css('background-color', 'green');

    $('#material_text').text($('#selected_material').val());

  });

  // Finish
  $('#finish').click(function (e) {
    $('#finish_select').show();
  });

  $("#selected_finish").change(function () {
    $('#finish').css('background-color', 'green');

    $('#finish_text').text($('#selected_finish').val());

  });

  // Art
  $('#art').click(function (e) {
    $('#art_select').show();
  });

  $("#selected_art").change(function () {
    $('#art').css('background-color', 'green');

    $('#art_text').text($('#selected_art').val());

  });

});