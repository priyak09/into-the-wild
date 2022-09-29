
/* hide loader on page load */
function hideLoader() {
  $('#loading').hide();
}

$('#title-1').ready(hideLoader);


/* data cursor */
$(document).ready(function() {
    $(document).on('mousemove', function(e) {
      $('#circularcursor').css({
        left: e.pageX,
        top: e.pageY
      });
    $('.card').on('mouseover', function() {
      $('#circularcursor').css({
        height: '70px',
        width: '70px',
      });
    });
    $('.card').on('mouseleave', function() {
      $('#circularcursor').css({
        height: '20px',
        width: '20px',
      });
    });
  });
});






