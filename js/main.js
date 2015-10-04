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

    $("#yee").click(function(){
    	$('.jam-found').height("350");
    })

    $(".tweet-button").click(function () {
        var jam = $("#j_brand").text().capitalize() + " Brand " + $("#j_flavor").text().capitalize() + " Jam"
        var href = ("https://twitter.com/intent/tweet?hashtags=dismahjam&ref_src=twsrc%5Etfw&text=Mah%20Jam%20was%20"+jam+".%20What's%20yo%20jam%3f%20Find%20out%20at%20dismahjam.xyz&tw_p=tweetbutton")
        window.open(href);
    })
}

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
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