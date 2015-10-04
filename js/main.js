window.onload = function () {
    $('#stats-button').click(function(){
        if ($('.jam-stats').height() > 0) {
            $('.jam-stats').height(0);
        } else {
            $('.jam-stats').height("290");
        }
    })
}

function switchDiv(num){
	switch(num){
		case 1: $(".login").show();
				$(".signup").hide();
				break;
		case 2: $(".login").hide();
				$(".signup").show();
				break;
	}
}