$('#monitor').html($(window).width());

$(window).resize(function() {
    var viewportWidth = $(window).width();
    $('#monitor').html(viewportWidth);
});
getStories();
function getStories(){
	$.ajax({
	            type : "GET",
	            url : "https://rio.quintype.io/api/v1/stories?limit=25&offset=25",
	            

	            success : function(response) {
	                console.log("default stories");
	                console.log(response);
	               $("#lead_story img").attr("src","http://quintype-01.imgix.net/"+response.stories[0]["hero-image-s3-key"]);
	               $("#lead_story span").html(response.stories[0].sections[0].name);
	               $("#business_img img").attr("src","http://quintype-01.imgix.net/"+response.stories[1]["hero-image-s3-key"]);
	               $("#business span").html(response.stories[1].sections[0].name);       
	                for(var i=2;i<5;i++){
	                	$("#overAllNews").append('<p class="heading"><span class="bottomLine t-upper">'+ response.stories[i].sections[0].name +'</span></p><h4>'+ response.stories[i].headline +'</h4><h6>'+ response.stories[i]["author-name"] +'</h6>')
	                }
	              $("#politics_bg_img").css('background-image', 'url(http://quintype-01.imgix.net/'+response.stories[6]["hero-image-s3-key"]+')'); 
	        	  $("#politics_bg_img p").html(response.stories[6].headline); 

	        	  $("#pol_col_2 img").attr("src","http://quintype-01.imgix.net/"+response.stories[7]["hero-image-s3-key"]);
	        	  $("#pol_col_2 p").html('<div class="pad-10">'+response.stories[7].headline+'</div><p class="pad-10">Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p><p class="pad-10">'+response.stories[7]["author-name"]+'</p>');
	        	  $("#pol_col_22 div").html("Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book");
	        	  $("#pol_col_22 p").html(response.stories[8]["author-name"]);

	        	  for(var i=9;i<17;i++){
	                	$("#over_all_pol_news").append('<p>'+ response.stories[i].headline +'</p><h6>'+ response.stories[i]["author-name"] +'</h6>')
	                }
	              for(var i=18; i<21;i++){
	              	$("#food_list").append('<div class="quintype-shadow col-xs-12 no-padding mar-bot-10"><div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 no-padding clearfix"><img class="width-100 height-150" src="http://quintype-01.imgix.net/' + response.stories[i]["hero-image-s3-key"] + '"></div><div class="col-lg-6 col-md-6 col-sm-6 col-xs-12"><div>'+response.stories[i].headline+'</div><p>'+response.stories[i]["author-name"]+'</p></div></div>')
	              }
	              $("#food_list2").append('<img class="width-100" src="http://quintype-01.imgix.net/'+response.stories[21]["hero-image-s3-key"]+'"><div class="col-xs-12"><h3>'+response.stories[21].headline+'</h3><h4>Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</h4><p>'+response.stories[i]["author-name"]+'</p></div>')
	            
	            for(var i = 21 ; i<25; i++){
	            	$("#recent_stories").append('<div class="col-xs-12 mar-bot-10"><div class="col-lg-4 col-md-4 col-sm-6 col-xs-6"><img class="width-100 height-150" src="http://quintype-01.imgix.net/'+response.stories[i]["hero-image-s3-key"]+'"></div><div class="col-lg-6 col-md-6 col-sm-6 col-xs-6"><h6>'+response.stories[i].sections[0].name+'</h6><h4>'+response.stories[i].headline+'</h4><h6>'+response.stories[i]["author-name"]+'</h6><h6>'+response.stories[i]["author-name"]+'</h6></div></div>');
	            }
	            $("#recent_stories_button").append('<p class="text-center"> <button onclick="load_stories()"> . . . </button></p>');
	            },
	            error : function(response) {
	            }
	            
        });
}

var l = 0;
function load_stories(){
	// alert("load");
	
	$.ajax({
	            type : "GET",
	            url : "https://rio.quintype.io/api/v1/stories?limit=9&offset="+l,
	            success : function(response) {
	            	l = l + 10;
	                console.log("default stories");
	                console.log(response);
	            for(var i = 0 ; i<response.stories.length; i++){
	            	$("#recent_stories").append('<div class="col-xs-12 mar-bot-10"><div class="col-lg-4 col-md-4 col-sm-6 col-xs-6"><img class="width-100 height-150" src="http://quintype-01.imgix.net/'+response.stories[i]["hero-image-s3-key"]+'"></div><div class="col-lg-6 col-md-6 col-sm-6 col-xs-6"><h6>'+response.stories[i].sections[0].name+'</h6><h4>'+response.stories[i].headline+'</h4><h6>'+response.stories[i]["author-name"]+'</h6><h6>'+response.stories[i]["author-name"]+'</h6></div></div>');
	            }
	        },
	            error : function(response) {
	            }
        });
}