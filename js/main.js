window.onload = function () {
    $('#stats-button').click(function(){
        if ($('.jam-stats').height() > 0) {
            $('.jam-stats').height(0);
        } else {
            $('.jam-stats').height("290");
        }
    })
}