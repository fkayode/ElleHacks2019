$(document).ready(function() {
    $('#myDiv').keyup(function() {
      var content = $('#myDiv').html();
      var extra = content.match(/.{19}(.*)/)[1];
  
      $('#extra').html(extra);
  
      var newContent = content.replace(extra, "<span class='highlight'>" + extra + "</span>");
      $('#sample').html(newContent);
    });
  });