function getQuotes() {
	$.ajax({
		type: "GET",
		url: "https://talaikis.com/api/quotes/random/",
		success: function(msg) {
			console.log(msg);
			if(msg) {
				if(msg.quote) {
					var tempDiv = '';
					tempDiv += '<div class="container jumbotron thumpnail-image" style="padding:20px; font-family: Sofia">';
					tempDiv += '<h5>' + msg.quote + '</h5>';
					tempDiv += '<h6 style = "float:right;"> -' + msg.author+ '</h6>';
					tempDiv += '</div>';
					$('#quoteBox').html(tempDiv);
				}
			} else {
				alert("Unable to load News");
			}
		}
	});	
}

function getNews() {

	$.ajax({
		type: "GET",
		url: "https://newsapi.org/v2/top-headlines?country=in&pageSize=100&apiKey=3axxxxxxxxxxxxxxxxxxxx74",
		success: function(msg) {
			console.log(msg);
			if(msg.status == 'ok') {
				if(msg.articles) {
					var tempDiv = '';
					tempDiv += '<div class="container">';
					$.each(msg.articles, function(i, data) {
						var imgUrl = 'No-image-found.jpg'
						tempDiv += '<div class="card row" style="margin-bottom:10px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2)">';
						tempDiv += '<div>';
						if(data.urlToImage) {
							imgUrl = data.urlToImage
						}
						tempDiv += '<img src="' + imgUrl + '" alt="No Image Found" style="width:100px; height:100px; float:left; margin-right: 10px">';
						tempDiv += '<div style="padding-right:10px !important">';
						tempDiv += '<h6>' + data.title + '</h6>';
						if(data.description) {
							tempDiv += '<font size="2">' + data.description + '  </font>';
						}
						if(data.url) tempDiv += '<a href= "' + data.url + '" target="_blank">Read More</a>';
						tempDiv += '</div></div>';
						tempDiv += '</div>';
					});
					tempDiv += '</div>';
					$('#newsBox').html(tempDiv);
				}
			} else {
				alert("Unable to load News");
			}
		}
	});
}

function redirectTo(url) {
	alert(url);
	window.open(url, _blank);
}

$(function(){
	$('#greet').text(new Date().toDateString());
	getQuotes();
    getNews();
});