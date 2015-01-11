$(function() {
    $('.checkbox').on('click', function() {
        if(this.checked) {
            $(this).parent().addClass( "selected" );
        } else {
            $(this).parent().removeClass( "selected" );
        }
        $('.number').html( $(':checked').size());
    })
});

$('#score').affix({
  offset: 208,
})