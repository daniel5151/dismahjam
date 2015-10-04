window.onload = function () {
    $('#stats-button').click(function(){
        if ($('.jam-stats').height() > 0) {
            $('.jam-stats').height(0);
        } else {
            $('.jam-stats').height("350");
        }
    });

    $('#stats-button').hover(function(){
        if ($('.jam-stats').height() == 0) {
            $('.jam-stats').height("350");
        }
    });

    getJam();

    $("#nah").click(function(){
    	getJam()
        $('.jam-stats').height(0);
        $('.jam-found').height(0);
    })

    $("#yee").click(function(){
    	$('.jam-found').height("350");
        addPopularity($("#j_brand").text(), $("#j_flavor").text());
    })

    $(".tweet-button").click(function () {
        var jam = $("#j_brand").text().capitalize() + " Brand " + $("#j_flavor").text().capitalize() + " Jam"
        var href = ("https://twitter.com/intent/tweet?hashtags=dismahjam,TerribleHack&ref_src=twsrc%5Etfw&text=Mah%20Jam%20was%20"+jam+".%20What's%20yo%20jam%3f%20Find%20out%20at%20dismahjam.xyz&tw_p=tweetbutton")
        window.open(href);
    })
}

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

function changeJam(jamArr) {
    $("body").css("background-image","url(../jams/"+jamArr[0]+"/"+jamArr[1]+".jpg"+")")

    $("#j_brand").text(jamArr[0]);
    $("#j_flavor").text(jamArr[1]);
    $("#j_cost").text(jamArr[2]);
    $("#j_jamminess").text(jamArr[3]);
    $("#j_popular").text(jamArr[4]);

    $(".img-container img").attr("src","jams/"+jamArr[0]+"/"+jamArr[1]+".jpg")
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