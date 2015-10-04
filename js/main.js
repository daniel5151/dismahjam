window.onload = function () {
    $('#stats-button').click(function(){
        if ($('.jam-stats').height() > 0) {
            $('.jam-stats').height(0);
        } else {
            $('.jam-stats').height("350");
        }
    });

    changeJam();

    $("#nah").click(function(){
    	changeJam()
    })
}

function changeJam() {
	var jamArr = {
    	brand:"smuckers",
    	flavor:"strawberry", 
    	cost:"$170000000 ZWL",
    	jamminess: "jammy",
    	popular: 0
    };

    $("#j_brand").text(jamArr.brand);
    $("#j_flavor").text(jamArr.flavor);
    $("#j_cost").text(jamArr.cost);
    $("#j_jamminess").text(jamArr.jamminess);
    $("#j_popular").text(jamArr.popular);

    $(".img-container img").attr("src","jams/"+jamArr.brand+"/"+jamArr.flavor+".jpg")
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